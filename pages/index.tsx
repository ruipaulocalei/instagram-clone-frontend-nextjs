import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='flex items-center h-screen w-screen justify-center'>
      <form className='flex flex-col w-full max-w-sm p-8 
      bg-gray-900 space-y-4 rounded-lg'>
        <input type="text" className='w-full p-3 focus:outline-none 
        border-2 focus:border-pink-600 rounded-md' />
        <input type="text" className='w-full p-3 focus:outline-none 
        border-2 focus:border-pink-600 rounded-md' />
        <button type='button' className='bg-pink-600 py-3 hover:opacity-70
        text-white rounded-md'>Login</button>
      </form>
    </div>
  )
}

export default Home
