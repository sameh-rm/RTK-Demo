'use client';
import { useState } from 'react';
import CartDropdown from './CartDropDown';
import StickySearchBar from './filters/SearchBar';
import CartBadge from './CartBadge';
import useWindowSize from '@/utils/useWindowSize';
import Link from 'next/link';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { width } = useWindowSize();
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 flex flex-wrap items-center justify-between h-24 md:px-8 px-1">
      <div className="flex-none flex items-center justify-between w-full sm:w-auto">
        <Link href={'/'}>
          <p className="text-3xl font-bold ">Shop App</p>
        </Link>
        {width <= 500 && (
          <>
            <button className="text-xl" onClick={toggleCart}>
              <CartBadge />
            </button>
            <CartDropdown
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              setIsOpen={setIsCartOpen}
            />
          </>
        )}
      </div>

      <div className="flex items-center w-full sm:w-auto md:space-x-6 relative">
        <StickySearchBar />
        {width > 500 && (
          <>
            <button className="text-xl" onClick={toggleCart}>
              <CartBadge />
            </button>
            <CartDropdown
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              setIsOpen={setIsCartOpen}
            />
          </>
        )}
      </div>
    </nav>
  );
}
