import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getFiltersSelector, setFilters } from '@/redux/slices/products.slice';
import useHideOnClickOutside from '@/utils/useHideOnClickOutside';
import React, { useEffect, useRef, useState } from 'react';

interface PriceRangeFilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

const PriceRangeFilterPopup: React.FC<PriceRangeFilterPopupProps> = ({
  isOpen,
  onClose,
  setIsOpen
}) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const filters = useAppSelector(getFiltersSelector);
  useHideOnClickOutside(ref, () => setIsOpen(false));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      setFilters({
        ...filters,
        minPrice,
        maxPrice
      })
    );
    onClose();
  };

  const resetFilters = (e: React.FormEvent) => {
    e.preventDefault();
    setMinPrice(0);
    setMaxPrice(0);
    dispatch(
      setFilters({
        productName: '',
        minPrice: 0,
        maxPrice: 0
      })
    );
    onClose();
  };
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full bg-transparent ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg z-50"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">Price Range Filter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-md"
          />
          <div className="flex justify-between">
            <button
              onClick={resetFilters}
              className="bg-red-300 text-white p-2 rounded-md"
            >
              Reset
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PriceRangeFilterPopup;
