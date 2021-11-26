import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = 'instaclone-token'
export const isLoggedInVar = makeVar(typeof window !== 'undefined' && Boolean(localStorage.getItem(TOKEN)))

export const logInUser = (token: string) => {
  localStorage.setItem(TOKEN, token)
  isLoggedInVar(true)
}
export const logOutUser = () => {
  localStorage.removeItem(TOKEN)
  window.location.reload()
}

export const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
})