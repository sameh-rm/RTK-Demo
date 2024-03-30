'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addCartItem } from '@/redux/slices/cart.slice';
import { getProductBySlug } from '@/redux/slices/products.slice';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import React from 'react';

const ProductDetailsPage = ({ slug }: { slug: string }) => {
  const product = useAppSelector(getProductBySlug(slug));
  const dispatch = useAppDispatch();
  if (!product) return notFound();
  const { imageUrl, description, name, price } = product as Product;

  const handleAddCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCartItem(product));

    Notify.info('Added Product To Cart!');
  };
  return (
    <div className="container w-full md:w-4/5 mx-auto px-4  md:px-10 py-10  bg-white md:border-b md:border-gray-200 sticky top-0  flex flex-wrap items-center justify-between md:my-4 md:rounded-md lg:px-15 ">
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={imageUrl}
              width={200}
              height={200}
              alt={name}
              style={{ objectFit: 'contain' }}
              className="m-auto object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-700 mb-4">Price: ${price}</p>
            <button
              onClick={handleAddCartItem}
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
