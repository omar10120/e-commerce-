import { create } from 'zustand';
import { CartItem } from '@/types/CartItem';

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

type Set = (fn: (state: CartState) => Partial<CartState>) => void;
type Get = () => CartState;

const getCartFromStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items: CartItem[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cart', JSON.stringify(items));
};

export const useCartStore = create<CartState>((set: Set, get: Get) => ({
  items: getCartFromStorage(),
  addItem: (item: CartItem) => {
    set((state: CartState) => {
      const existing = state.items.find(
        (i: CartItem) => i.productId === item.productId && i.selectedVariantId === item.selectedVariantId
      );
      let newItems: CartItem[];
      if (existing) {
        newItems = state.items.map((i: CartItem) =>
          i.productId === item.productId && i.selectedVariantId === item.selectedVariantId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        newItems = [...state.items, item];
      }
      saveCartToStorage(newItems);
      return { items: newItems };
    });
  },
  removeItem: (productId: string, variantId: string) => {
    set((state: CartState) => {
      const newItems = state.items.filter(
        (i: CartItem) => !(i.productId === productId && i.selectedVariantId === variantId)
      );
      saveCartToStorage(newItems);
      return { items: newItems };
    });
  },
  updateQuantity: (productId: string, variantId: string, quantity: number) => {
    set((state: CartState) => {
      const newItems = state.items.map((i: CartItem) =>
        i.productId === productId && i.selectedVariantId === variantId
          ? { ...i, quantity }
          : i
      );
      saveCartToStorage(newItems);
      return { items: newItems };
    });
  },
  clearCart: () => {
    saveCartToStorage([]);
    set(() => ({ items: [] }));
  },
  get totalItems() {
    return get().items.reduce((sum: number, i: CartItem) => sum + i.quantity, 0);
  },
  get subtotal() {
    // This assumes you have access to product/variant prices elsewhere
    // For now, just return 0; will be implemented with product lookup
    return 0;
  },
})); 