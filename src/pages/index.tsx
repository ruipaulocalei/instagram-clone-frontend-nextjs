import { gql, useMutation, useReactiveVar } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { isLoggedInVar, logInUser } from '../apollo'
import { AppRoutes } from '../routes/constants'

const Home: NextPage = () => {
  const { push, } = useRouter()
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  useEffect(() => {
    if (isLoggedIn) {
      push(AppRoutes.Home_PAGE)
      // console.log('Exists', isLoggedIn);
    } else {
      push(AppRoutes.LOGIN_PAGE)
      // console.log('No exists', isLoggedIn);
    }
  }, [])

  return (
    <div className='flex items-center h-screen w-screen justify-center'>
      <h1>INSTAGRAM CLONE</h1>
    </div>
  )
}

export default Home
