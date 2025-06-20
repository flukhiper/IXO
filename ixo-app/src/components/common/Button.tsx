import React from 'react';

type ButtonVariant = 'add' | 'remove' | 'add-attribute';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  add: 'bg-blue-600 hover:bg-blue-700 text-white',
  remove: 'text-red-400 hover:text-red-600',
  'add-attribute': 'bg-green-600 hover:bg-green-700 text-white'
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'add', className = '', ...props }) => 
  <button
    className={`px-4 py-2 rounded transition-colors ${variantClasses[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
;

export default Button;