'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getPriceWithDiscount } from '@/utils/products.utils';
import { DISCOUNT } from '@/utils/constants';
import Rating from './Rating';
import CartIcon from '../icons/CartIcon';
import React, { useState } from 'react';
import { addCartItem } from '@/redux/slices/cart.slice';
import { useAppDispatch } from '@/redux/hooks';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = (product) => {
  const { name, price, imageUrl, slug } = product;
  const priceWithDiscount = getPriceWithDiscount(product);
  const dispatch = useAppDispatch();
  const handleAddCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCartItem(product));

    Notify.info('Added Product To Cart!');
  };

  return (
    <div className="relative flex w-full sm:max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md sm:m-auto">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href={`/products/${slug}`}
      >
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt={name}
          style={{ objectFit: 'contain' }}
          className="m-auto object-cover"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {DISCOUNT}% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight line-clamp-1 text-slate-900">
            {name}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">
              ${priceWithDiscount.toFixed(2)}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${price.toFixed(2)}
            </span>
          </p>
          <Rating />
        </div>
        <button
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={handleAddCartItem}
          name="Add To Cart"
          data-testid="addToCart"
        >
          <CartIcon />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
