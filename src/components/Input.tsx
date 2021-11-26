import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>
export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className="w-full p-3 focus:outline-none text-black 
  border-2 focus:border-pink-600 rounded-md" {...props} ref={ref} />;
});