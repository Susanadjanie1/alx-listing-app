import React from 'react';
import { ButtonProps } from '../../interfaces'

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  let baseStyles = "px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-75";
  let variantStyles = "";

  switch (variant) {
    case 'primary':
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
      break;
    case 'secondary':
      variantStyles = "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";
      break;
    case 'danger':
      variantStyles = "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500";
      break;
    default:
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;