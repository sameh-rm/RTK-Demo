import NoProductsMessage from '@/components/layout/filters/NoProductsMessage';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getCartSelector, removeCartItem } from '@/redux/slices/cart.slice';
import Image from 'next/image';
import React, { Fragment } from 'react';

const CartItems = () => {
  const { items, count } = useAppSelector(getCartSelector);
  const dispatch = useAppDispatch();

  const handleRemoveCartItem = (item: CartItem) => (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(removeCartItem(item));
  };
  if (!items || items.length === 0) return <NoProductsMessage />;
  return items.map((item, index) => (
    <div
      key={index}
      className="border border-gray-200 p-4 rounded-lg flex items-center"
    >
      <Image
        src={item.imageUrl}
        width={200}
        height={200}
        alt={item.name}
        style={{ objectFit: 'contain' }}
        className="w-16 h-16 object-cover rounded mr-4"
      />
      <div>
        <p className="text-lg font-semibold line-clamp-1">{item.name}</p>
        <p className="text-gray-500">Price: ${item.price}</p>
        <p className="text-gray-500">Quantity: {item.quantity}</p>
        <p className="text-gray-500">Total: {item.price * item.quantity}</p>
      </div>
      <button
        onClick={handleRemoveCartItem(item)}
        className="ml-auto text-red-500"
      >
        Remove
      </button>
    </div>
  ));
};

export default CartItems;
