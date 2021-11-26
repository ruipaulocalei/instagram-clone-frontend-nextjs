// import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { client } from '../apollo'
import ProtectedRoute from '../routes/ProtectedRoute'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return <ApolloProvider client={client} >
    <ProtectedRoute router={router}>
      <Component {...pageProps} />
    </ProtectedRoute>
  </ApolloProvider>
}

export default MyApp
