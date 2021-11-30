import { ApolloClient, createHttpLink, InMemoryCache, makeVar } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'

const TOKEN = 'instaclone-token'
const token = typeof window !== 'undefined' && localStorage.getItem(TOKEN)
export const isLoggedInVar = makeVar(typeof window !== 'undefined' && Boolean(localStorage.getItem(TOKEN)))
export const authTokenVar = makeVar(token)

export const logInUser = (token: string) => {
  localStorage.setItem(TOKEN, token)
  authTokenVar(token)
  isLoggedInVar(true)
}
export const logOutUser = () => {
  localStorage.removeItem(TOKEN)
  window.location.reload()
}

const httpLink = createHttpLink({
  uri: 'http://localhost:4200/graphql'
})
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers, 'jwt-token': authTokenVar(),
    }
  }
})
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      UserModel: {
        keyFields: (obj) => `UserModel:${obj.username}`
      }
    }
  })
});