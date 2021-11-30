import React, { ButtonHTMLAttributes } from 'react';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
const ButtonFollow: React.FC<IButtonProps> = ({ children, ...rest }) =>
  <button {...rest} className='text-white rounded-md focus:outline-none 
  bg-blue-500 hover:opacity-70 px-5'>{children}</button>

export default ButtonFollow;