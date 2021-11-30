import React from 'react';
import { Header } from '../components/Header';
import Feed from '../components/Feed';

const Home: React.FC = () => {
  return (
    <div className='h-screen'>
      <Header />
      <Feed />
    </div>
  )
}

export default Home;