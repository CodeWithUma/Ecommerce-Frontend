// This is a TypeScript interface named Product.
// It defines the structure of a "Product" object used throughout the app.
export interface Product {
  // A unique identifier for the product
  id: number;

  // The name of the product
  name: string;

  // A short description of the product
  description: string;

  // The price of the product
  price: number;

  // A URL pointing to an image of the product
  imageUrl: string;

  // The number of items available in stock
  stock: number;
}
