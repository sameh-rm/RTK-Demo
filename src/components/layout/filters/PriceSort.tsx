import { useAppDispatch } from '@/redux/hooks';
import { sortProducts } from '@/redux/slices/products.slice';
import useHideOnClickOutside from '@/utils/useHideOnClickOutside';
import React, { useRef } from 'react';

type PriceSortPropsType = {
  isSortOpen: boolean;
  setIsSortOpen: (isSortOpen: boolean) => void;
};
const PriceSort = ({ isSortOpen, setIsSortOpen }: PriceSortPropsType) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  useHideOnClickOutside(ref, () => setIsSortOpen(false));

  if (!isSortOpen) return null;
  return (
    <div
      ref={ref}
      className="absolute top-full right-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg p-2"
    >
      <p className="font-bold mb-2">Sort by Price</p>
      <button
        onClick={() => dispatch(sortProducts('asc'))}
        className="block w-full py-1 hover:bg-gray-200"
      >
        Price Low to High
      </button>
      <button
        onClick={() => dispatch(sortProducts('desc'))}
        className="block w-full py-1 hover:bg-gray-200"
      >
        Price High to Low
      </button>
    </div>
  );
};

export default PriceSort;
