'use client';
import React, { useEffect, useState } from 'react';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filterProducts = (v: string) => {
    setSearchQuery(v);
  };

  return (
    <div className="flex items-center space-x-8 relative">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md "
        value={searchQuery}
        onChange={(e) => filterProducts(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
