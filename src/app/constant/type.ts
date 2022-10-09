export const NAVIGATE = {
  CART: '/cart',
  HOME: '',
  PRODUCT: '/product_category',
};

export interface CART {
  id_prodcut: string;
  name: string;
  cost: string;
  specifications: string;
  images: string[];
  details: string[];
}
