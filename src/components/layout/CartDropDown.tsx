'use Client';
import { useAppSelector } from '@/redux/hooks';
import useHideOnClickOutside from '@/utils/useHideOnClickOutside';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useRouter } from 'next/navigation';

type CartDropDownPropsType = {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

const CartDropdown = ({
  isOpen,
  onClose,
  setIsOpen
}: CartDropDownPropsType) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { items } = useAppSelector((state) => state.cart);
  const isEmpty = items.length === 0;
  const router = useRouter();
  const handleOpenCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmpty) {
      Notify.warning('Your cart is empty');
      return;
    } else {
      router.push('/cart/checkout', {
        scroll: false
      });
    }
  };

  useHideOnClickOutside(ref, () => setIsOpen(false));
  if (!isOpen) {
    return null;
  }
  return (
    <div
      ref={ref}
      className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
    >
      <div className="p-4">
        <p className="text-lg font-bold mb-4">Your Cart</p>
        {isEmpty ? (
          <p>Your cart is empty.</p>
        ) : (
          items.slice(0, 4).map((product) => (
            <div key={product.id} className="flex items-center space-x-4 mb-2">
              <Image
                src={product.imageUrl}
                width={200}
                height={200}
                alt={product.name}
                style={{ objectFit: 'contain' }}
                className="m-auto object-cover w-16 h-16 rounded"
              />
              <div className="flex-1">
                <p className="font-bold line-clamp-1">{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
        <div className="flex justify-between mt-4">
          <Link
            href={'/cart'}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            View Cart
          </Link>
          <button
            onClick={handleOpenCheckout}
            className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
