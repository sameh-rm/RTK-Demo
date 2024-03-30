import React from 'react';

const NoProductsMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg text-gray-500 mb-4">No products found.</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.5 2a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0v-14a.5.5 0 0 0-.5-.5zM7 3a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0v-12a1 1 0 0 0-1-1zm5 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10zm4 2a.5.5 0 0 0-.5-.5h-1.586l-.707-.707a1 1 0 1 0-1.414 1.414l.707.707v.586a.5.5 0 0 0 1 0v-.586l.707-.707a1 1 0 0 0 1.414-1.414l-.707-.707h1.586a.5.5 0 0 0 .5-.5zm-.854 6.854a1 1 0 1 0-1.414-1.414l-.707.707v.586a.5.5 0 0 0 1 0v-.586l.707-.707a1 1 0 0 0 1.414 1.414l-.707.707zm-6.292 6.293a1 1 0 0 0-1.414 1.414l.707.707v.586a.5.5 0 0 0 1 0v-.586l.707-.707a1 1 0 0 0-1.414-1.414l-.707.707v-.586a.5.5 0 0 0-1 0v.586l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707z"
        />
      </svg>
    </div>
  );
};

export default NoProductsMessage;
