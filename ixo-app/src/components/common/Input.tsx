import React, { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => 
  <input
    ref={ref}
    className="bg-gray-900 border border-gray-700 text-gray-100 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    {...props}
  />
);

Input.displayName = 'Input';

export default Input;