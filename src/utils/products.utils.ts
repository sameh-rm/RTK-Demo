import { DISCOUNT } from './constants';

export const getPriceWithDiscount = (product: Product) => {
  return product.price - (product.price * DISCOUNT) / 100;
};
