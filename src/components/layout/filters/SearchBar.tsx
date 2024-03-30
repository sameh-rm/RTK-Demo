import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getFiltersSelector, setFilters } from '@/redux/slices/products.slice';
import PriceRangeFilterButton from './PriceRangeFilterButton';
import PriceSortButton from './PriceSortButton';

const StickySearchBar = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(getFiltersSelector);
  const filterProducts = (v: string) => {
    dispatch(
      setFilters({
        ...filters,
        productName: v
      })
    );
  };

  return (
    <div className=" top-0 z-10 md:p-4 flex items-center justify-between w-full ">
      <div className="md:container flex items-center gap-3 justify-between w-full sm:mx-2">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md "
          value={filters.productName}
          onChange={(e) => filterProducts(e.target.value)}
        />
        <div className="flex gap-2  right-0">
          <PriceRangeFilterButton />
          <PriceSortButton />
        </div>
      </div>
    </div>
  );
};

export default StickySearchBar;
