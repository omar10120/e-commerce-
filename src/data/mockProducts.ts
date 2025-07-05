import { Product } from "@/types/Product";

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Pianta Coated Chocolate",
    slug: "pianta-coated-chocolate",
    description: "Delicious chocolate-coated treats in a beautiful tin.",
    price: 49.99,
    images: [
      "/assets/food.png", 
      "/assets/food2.png"
    ],
    variants: [
      {
        id: "var-1-1",
        name: "Classic",
        price: 49.99,
        images: ["/assets/food.png"],
        stock: 10
      },
      {
        id: "var-1-2",
        name: "Strawberry",
        color: "pink",
        price: 54.99,
        images: ["/assets/food2.png"],
        stock: 5
      }
    ],
    categoryId: "cat-1",
    rating: 4.5
  },
  {
    id: "prod-2",
    name: "Cocospresso ZERO SUGAR - Chocolate coated Coffee beans",
    slug: "cocospresso-zero-sugar-chocolate-coated-coffee-beans",
    description: "Zero sugar chocolate-coated coffee beans for a guilt-free treat.",
    price: 24.99,
    images: ["/assets/food3.png"],
    variants: [
      {
        id: "var-2-1",
        name: "Zero Sugar",
        price: 24.99,
        images: ["/assets/food3.png"],
        stock: 8
      }
    ],
    categoryId: "cat-1",
    rating: 4.2
  },
  {
    id: "prod-3",
    name: "Cocospresso Coffee coated chocolate",
    slug: "cocospresso-coffee-coated-chocolate",
    description: "Rich coffee beans coated in smooth chocolate.",
    price: 19.99,
    images: ["/assets/food4.png"],
    variants: [
      {
        id: "var-3-1",
        name: "Original",
        price: 19.99,
        images: ["/assets/food4.png"],
        stock: 12
      }
    ],
    categoryId: "cat-1",
    rating: 4.0
  },
  {
    id: "prod-4",
    name: "FuFuBites Choco Pretzel",
    slug: "FuFuBites-choco-pretzel",
    description: "Crunchy pretzels dipped in chocolate.",
    price: 14.99,
    images: ["/assets/food5.png"],
    variants: [
      {
        id: "var-4-1",
        name: "Milk Chocolate",
        price: 14.99,
        images: ["/assets/food5.png"],
        stock: 20
      }
    ],
    categoryId: "cat-1",
    rating: 4.3
  },
  {
    id: "prod-5",
    name: "Pianta Strawberry Coated Chocolate 50gm",
    slug: "pianta-strawberry-coated-chocolate-50gm",
    description: "Strawberry-flavored chocolate treats.",
    price: 24.99,
    images: ["/assets/food.png"],
    variants: [
      {
        id: "var-5-1",
        name: "Strawberry",
        color: "pink",
        price: 24.99,
        images: ["/assets/food.png"],
        stock: 7
      }
    ],
    categoryId: "cat-1",
    rating: 4.1
  },
  {
    id: "prod-6",
    name: "Pianta Raspberry Coated Chocolate 50gm",
    slug: "pianta-raspberry-coated-chocolate-50gm",
    description: "Raspberry-flavored chocolate treats.",
    price: 24.99,
    images: ["/assets/food2.png"],
    variants: [
      {
        id: "var-6-1",
        name: "Raspberry",
        color: "red",
        price: 24.99,
        images: ["/assets/food2.png"],
        stock: 6
      }
    ],
    categoryId: "cat-1",
    rating: 4.0
  },
  {
    id: "prod-7",
    name: "Freeze-Dried Mango | NO Sugar Added | 100% Real Fruit Snack",
    slug: "freeze-dried-mango-no-sugar-added",
    description: "Sweet and tangy freeze-dried mango slices.",
    price: 39.99,
    images: ["/assets/food3.png"],
    variants: [
      {
        id: "var-7-1",
        name: "Mango",
        price: 39.99,
        images: ["/assets/food3.png"],
        stock: 0
      }
    ],
    categoryId: "cat-2",
    rating: 4.6
  },
  {
    id: "prod-8",
    name: "Freeze-Dried Strawberries (Slices) | NO Sugar Added | 100% Real Fruit Snack",
    slug: "freeze-dried-strawberries-slices-no-sugar-added",
    description: "Crispy freeze-dried strawberry slices.",
    price: 37.99,
    images: ["/assets/food4.png"],
    variants: [
      {
        id: "var-8-1",
        name: "Strawberry Slices",
        price: 37.99,
        images: ["/assets/food4.png"],
        stock: 15
      }
    ],
    categoryId: "cat-2",
    rating: 4.7
  },
  {
    id: "prod-9",
    name: "Freeze-Dried Pineapple | NO Sugar Added | 100% Real Fruit Snack",
    slug: "freeze-dried-pineapple-no-sugar-added",
    description: "Tropical freeze-dried pineapple chunks.",
    price: 39.99,
    images: ["/assets/food5.png"],
    variants: [
      {
        id: "var-9-1",
        name: "Pineapple",
        price: 39.99,
        images: ["/assets/food5.png"],
        stock: 10
      }
    ],
    categoryId: "cat-2",
    rating: 4.4
  },
  {
    id: "prod-10",
    name: "Freeze-Dried Figs | NO Sugar Added | 100% Real Fruit Snack",
    slug: "freeze-dried-figs-no-sugar-added",
    description: "Naturally sweet freeze-dried figs.",
    price: 39.99,
    images: ["/assets/food.png"],
    variants: [
      {
        id: "var-10-1",
        name: "Figs",
        price: 39.99,
        images: ["/assets/food.png"],
        stock: 8
      }
    ],
    categoryId: "cat-2",
    rating: 4.2
  },
  {
    id: "prod-11",
    name: "Freeze-Dried Strawberry Yoghurt Bites – 50g",
    slug: "freeze-dried-strawberry-yoghurt-bites-50g",
    description: "Yogurt-covered freeze-dried strawberry bites.",
    price: 49.99,
    images: ["/assets/food2.png"],
    variants: [
      {
        id: "var-11-1",
        name: "Yoghurt Strawberry",
        price: 49.99,
        images: ["/assets/food2.png"],
        stock: 9
      }
    ],
    categoryId: "cat-2",
    rating: 4.5
  },
  {
    id: "prod-12",
    name: "Hazelnuts Milk Chocolate – 200gm",
    slug: "hazelnuts-milk-chocolate-200gm",
    description: "Crunchy hazelnuts coated in milk chocolate.",
    price: 49.99,
    images: ["/assets/food3.png"],
    variants: [
      {
        id: "var-12-1",
        name: "Hazelnut",
        price: 49.99,
        images: ["/assets/food3.png"],
        stock: 11
      }
    ],
    categoryId: "cat-1",
    rating: 4.6
  },
  {
    id: "prod-13",
    name: "Veggy Mix – 200gm",
    slug: "veggy-mix-200gm",
    description: "A healthy mix of freeze-dried vegetables.",
    price: 49.99,
    images: ["/assets/food4.png"],
    variants: [
      {
        id: "var-13-1",
        name: "Veggy Mix",
        price: 49.99,
        images: ["/assets/food4.png"],
        stock: 13
      }
    ],
    categoryId: "cat-3",
    rating: 4.3
  },
  {
    id: "prod-14",
    name: "Chips Mix – 180gm",
    slug: "chips-mix-180gm",
    description: "Crunchy chips mix for snacking.",
    price: 29.99,
    images: ["/assets/food5.png"],
    variants: [
      {
        id: "var-14-1",
        name: "Chips Mix",
        price: 29.99,
        images: ["/assets/food5.png"],
        stock: 18
      }
    ],
    categoryId: "cat-4",
    rating: 4.1
  },
  {
    id: "prod-15",
    name: "Pistachio Kunafa Chocolate Bar – Dubai Chocolate",
    slug: "pistachio-kunafa-chocolate-bar-dubai-chocolate",
    description: "A fusion of pistachio, kunafa, and chocolate in a bar.",
    price: 39.99,
    images: ["/assets/food.png"],
    variants: [
      {
        id: "var-15-1",
        name: "Pistachio Kunafa",
        price: 39.99,
        images: ["/assets/food.png"],
        stock: 0
      }
    ],
    categoryId: "cat-5",
    rating: 4.8
  }
]; 