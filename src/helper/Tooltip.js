import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      <div className="group inline-block">{children}</div>
      <div className="absolute z-10 -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
        <span className="absolute w-3 h-3 bg-gray-800 left-1/2 transform -translate-x-1/2 top-full"></span>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
