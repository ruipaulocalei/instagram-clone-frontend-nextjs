import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import { Input } from '../components/Input'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='flex items-center h-screen w-screen justify-center'>
      <form className='flex flex-col w-full max-w-sm p-8 
      bg-gray-900 space-y-4 rounded-lg'>
        <Input placeholder='E-mail' />
        <Input placeholder='Password' />
        <Button loading={false} buttonName={'Entrar'} isClicable={true} />
      </form>
    </div>
  )
}

export default Home
