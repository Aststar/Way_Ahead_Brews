
import { products } from './data.ts';
import { Product } from '../types.ts';

// This is a mock Shopify fetch function.
// In a real application, you would use the Shopify Storefront API client.
export const fetchProducts = async (): Promise<Product[]> => {
  console.log('Fetching products from mock API...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simulate network delay
  });
};
