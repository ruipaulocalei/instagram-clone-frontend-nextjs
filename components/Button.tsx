import React from 'react';

interface IButtonProps {
  loading: boolean
  buttonName: string
  isClicable: boolean
}
const Button: React.FC<IButtonProps> = ({ buttonName, loading, isClicable }) =>
  <button type='button' className={`text-white py-3 rounded-md focus:outline-none
   ${isClicable ? 'bg-pink-600 hover:opacity-70'
      : 'bg-gray-300 pointer-events-none'}`}>{loading ? `Aguarde...` :
        `${buttonName}`}</button>

export default Button;