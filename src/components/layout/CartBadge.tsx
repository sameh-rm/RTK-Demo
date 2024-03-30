import { useAppSelector } from '@/redux/hooks';
import React from 'react';

const CartBadge = () => {
  const { count } = useAppSelector((state) => state.cart);
  return (
    <div className="relative py-2 cursor-pointer">
      <div className="t-0 absolute left-3">
        <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
          {count}
        </p>
      </div>
      <svg
        className="h-8 w-8 text-gray-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" /> <circle cx="9" cy="19" r="2" />{' '}
        <circle cx="17" cy="19" r="2" />{' '}
        <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
      </svg>
    </div>
  );
};

export default CartBadge;
