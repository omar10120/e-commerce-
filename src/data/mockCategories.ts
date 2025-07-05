import { Category } from "@/types/Product";

export const mockCategories: Category[] = [
  { id: "cat-1", name: "Chocolate Dragees", slug: "chocolate-dragees" },
  { id: "cat-2", name: "Freeze Dried", slug: "freeze-dried" },
  { id: "cat-3", name: "Healthy Corner", slug: "healthy-corner" },
  { id: "cat-4", name: "Crunchy & Salty Snacks", slug: "crunchy-salty-snacks" },
  { id: "cat-5", name: "Sweets & Bars", slug: "sweets-bars", parentId: "cat-3" },
]; 