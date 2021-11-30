import { useReactiveVar } from "@apollo/client"
import { useRouter } from "next/router"
import { LinkProps } from "next/link"
import { ReactElement } from "react"
import { isLoggedInVar } from "../apollo"
import { AppRoutes } from '../routes/constants'

interface RouteLinkProps {
  children: ReactElement,
  router: {
    pathname: string,
    push: (a: string) => void
  }
}

const isBrowser = () => typeof window !== 'undefined'

const ProtectedRoute: React.FC<RouteLinkProps> = ({ children, router }) => {
  const isLoggenIn = useReactiveVar(isLoggedInVar)
  const { push } = useRouter()

  let publicRoutes = [
    AppRoutes.LOGIN_PAGE
  ]
  let pathIsPrivate = publicRoutes.indexOf(router.pathname) === -1
  if (isBrowser() && !isLoggenIn && pathIsPrivate) {
    router.push(AppRoutes.LOGIN_PAGE)
  }
  else if (isBrowser() && isLoggenIn && !pathIsPrivate) {
    router.push(AppRoutes.Home_PAGE)
  }
  return children
}

export default ProtectedRoute