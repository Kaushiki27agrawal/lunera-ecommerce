import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "lunera-001",
    name: "Rose Gold Pearl Necklace",
    description:
      "A delicate rose gold necklace featuring elegant pearl detailing. Perfect for everyday wear and special occasions.",
    price: 1299,
    originalPrice: 1799,
    category: "Necklaces",
    image: "/images/jwellery/j1.jfif",
    rating: 4.8,
    reviews: 124,
    sizes: ["One Size"],
    colors: ["Rose Gold"],
    featured: true,
    inStock: true,
  },

  {
    id: "lunera-002",
    name: "Classic Gold Bracelet",
    description:
      "Elegant gold bracelet designed to add a sophisticated touch to any outfit.",
    price: 899,
    originalPrice: 1199,
    category: "Bracelets",
    image: "/images/jwellery/j3.jfif",
    rating: 4.7,
    reviews: 98,
    sizes: ["One Size"],
    colors: ["White"],
    featured: true,
    inStock: true,
  },

  {
    id: "lunera-003",
    name: "Classic pearl necklace",
    description:
      "A beautiful classic pearl necklace with a minimal and timeless design.",
    price: 1099,
    originalPrice: 1499,
    category: "Necklaces",
    image: "/images/jwellery/j4.jfif",
    rating: 4.6,
    reviews: 76,
    sizes: ["Small", "Medium", "Large"],
    colors: ["Gold"],
    featured: true,
    inStock: true,
  },

  {
    id: "lunera-004",
    name: "Minimal chain necklace",
    description:
      "A minimalist gold chain necklace designed for effortless everyday styling.",
    price: 749,
    originalPrice: 999,
    category: "Necklaces",
    image: "/images/jwellery/j5.jfif",
    rating: 4.5,
    reviews: 63,
    sizes: ["6", "7", "8", "9"],
    colors: ["Gold"],
    featured: true,
    inStock: true,
  },

  {
    id: "lunera-005",
    name: "Gold Layered bracelet",
    description:
      "A modern layered gold bracelet that complements both casual and formal outfits.",
    price: 1199,
    originalPrice: 1599,
    category: "Bracelets",
    image: "/images/jwellery/j6.jfif",
    rating: 4.7,
    reviews: 87,
    sizes: ["One Size"],
    colors: ["Silver"],
    featured: false,
    inStock: true,
  },

  {
    id: "lunera-006",
    name: "Floral Stud bracelet",
    description:
      "Beautiful floral-inspired stud bracelet with a lightweight and comfortable design.",
    price: 699,
    originalPrice: 899,
    category: "Bracelets",
    image: "/images/jwellery/j7.jfif",
    rating: 4.4,
    reviews: 51,
    sizes: ["One Size"],
    colors: ["Gold"],
    featured: false,
    inStock: true,
  },
];