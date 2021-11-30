import React from 'react';

interface IErrorProps {
  message: string
}

const Error: React.FC<IErrorProps> = ({ message }) => {
  return <div className="my-2 bg-red-100 border-l-4 
  border-red-500 text-red-700 p-2">
    <p className="font-bold">Erro</p>
    <p>{message}</p>
  </div>
}

export default Error;