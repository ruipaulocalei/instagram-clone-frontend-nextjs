import React from 'react';

const Loading: React.FC = () => {
  return <div className='flex h-screen
  items-center justify-center'>
    <p className='h-12 animate-spin w-12 rounded-full bg-transparent 
          border-t-2 border-purple-700'></p>
  </div>
};

export default Loading;
