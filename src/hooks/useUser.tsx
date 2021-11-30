import { gql, useQuery, useReactiveVar } from "@apollo/client"
import { useEffect } from "react"
import { isLoggedInVar, logOutUser } from "../apollo"
import { me } from "../__generated__/me"

const USER_QUERY = gql`
  query me {
    me {
      id
      name
      email
      username
      isMe
    }
  }
`

export const useUser = () => {
  const hasToken = useReactiveVar(isLoggedInVar)
  const { data, error } = useQuery<me>(USER_QUERY, {
    skip: !hasToken,
  })
  useEffect(() => {
    if (error) {
      logOutUser()
    }
  }, [data, error])
  return { data }
}

// function useUser() {
//   const hasToken = useReactiveVar(isLoggedInVar)
//   const { data, error } = useQuery<me>(USER_QUERY, { skip: !hasToken })
//   console.log(data, error)
//   useEffect(() => {
//     if (data?.me !== undefined && data.me === null) {
//       logOutUser()
//     }
//   }, [data])
//   return { data }
// }
// export default useUser
// export const useUser = () => {
//   const hasToken = useReactiveVar(isLoggedInVar)
//   const { data, error } = useQuery<me>(USER_QUERY, { skip: !hasToken })
//   console.log(data, error)
//   useEffect(() => {
//     if (data?.me !== undefined && data.me === null) {
//       logOutUser()
//     }
//   }, [data])
//   return
// }
