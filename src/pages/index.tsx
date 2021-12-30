import { gql, useMutation, useReactiveVar } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { isLoggedInVar, logInUser } from '../apollo'
import { AppRoutes } from '../routes/constants'

interface ILogin {
  username: string
  password: string
}
const LOGIN_MUTATION = gql`
  mutation login($login: LoginInputDto!) {
    login(input: $login) {
      ok
      token
      error
    }
  }
`

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
      <h1>Splash Screen</h1>
    </div>
  )
}

export default Home
