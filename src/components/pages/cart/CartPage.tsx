'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  getCartSelector,
  getCartTotal,
  removeCartItem
} from '@/redux/slices/cart.slice';
import Image from 'next/image';
import Link from 'next/link';
import CartItems from './CartItems';

const CartPage = () => {
  const { items, count } = useAppSelector(getCartSelector);
  const cartTotal = useAppSelector(getCartTotal);
  const dispatch = useAppDispatch();
  const handleRemoveCartItem = (item: CartItem) => (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(removeCartItem(item));
  };
  return (
    <div className="container mx-auto px-4 py-10 bg-white border-b border-gray-200 top-0  flex flex-wrap items-center justify-between my-4 rounded-md md:px-8 ">
      <h1 className="text-2xl font-bold mb-4 w-full">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CartItems />
        </div>
      )}
      {items.length > 0 && (
        <div className="mt-8 flex items-center justify-between w-full">
          <p className="text-lg font-bold">Total: ${cartTotal}</p>
          <Link
            href={'/cart/checkout'}
            className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
