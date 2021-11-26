import { gql, useMutation } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'
import { Input } from '../components/Input'
import { useForm } from 'react-hook-form'
import { login, loginVariables } from '../__generated__/login'
import { logInUser } from '../apollo'
import { useRouter } from 'next/router'
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
  const { register, getValues, handleSubmit, setError, clearErrors,
    formState: { errors, isValid } } = useForm<ILogin>({ mode: 'onChange' })
  const { push } = useRouter()

  const onCompleted = (data: login) => {
    const { login: { ok, error, token } } = data
    if (!ok) {
      setError('username', {
        message: `${error}`
      })
      setError('password', {
        message: `${error}`
      })
    }
    if (token) {
      logInUser(token)
      push(AppRoutes.DASHBOARD_PAGE)
    }
  }

  const [login, { loading, error, data }] = useMutation<login, loginVariables>(LOGIN_MUTATION, {
    onCompleted
  })
  const onSubmit = () => {
    if (loading) {
      return
    }
    const { username, password } = getValues()
    login({
      variables: {
        login: {
          username,
          password
        }
      }
    })
  }
  return (
    <div className='flex items-center h-screen w-screen justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full max-w-sm p-8 
      bg-gray-900 space-y-4 rounded-lg'>
        <Input {...register('username', { required: true })}
          placeholder='Username' onChange={() => clearErrors('username')} />
        <Input {...register('password', { required: true, minLength: 6 })}
          placeholder='Password' onChange={() => clearErrors('password')} />
        <Button loading={loading} buttonName={loading ? 'Carregar' : 'Entrar'} isClicable={isValid} />
      </form>
    </div>
  )
}

export default Home
