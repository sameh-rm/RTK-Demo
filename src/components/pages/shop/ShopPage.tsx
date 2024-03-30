'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { useProductsQuery } from '@/redux/services/productsApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  getFilteredProducts,
  getFiltersSelector,
  getProductsSelector,
  setProducts
} from '@/redux/slices/products.slice';
import NoProductsMessage from '@/components/layout/filters/NoProductsMessage';
import Loader from '@/components/layout/Loader';

const ShopPage = () => {
  const { data, error, isLoading, isSuccess } = useProductsQuery([], {
    refetchOnReconnect: true
  });
      const dispatch = useAppDispatch();
      const products = useAppSelector(getProductsSelector);
     const filters = useAppSelector(getFiltersSelector);
  // test format
  useEffect(() => {
    dispatch(setProducts(data || []));
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(getFilteredProducts(filters));
  }, [filters, dispatch]);

  if (products.length === 0) return <NoProductsMessage />;

  return (
    <>
      <div className="isErrorIsLoading">
        {error && <p>An error occured</p>}
        {isLoading && <Loader />}
      </div>
      <div className="lg:container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
            {isSuccess &&
              products.length > 0 &&
              products?.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopPage;
