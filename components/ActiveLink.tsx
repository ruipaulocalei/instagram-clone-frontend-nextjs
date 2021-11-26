import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}
export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  let isActive = true
  return (
    <Link {...rest}>
      {
        cloneElement(children, {
          key: '',
          color: isActive ? 'red' : 'bg-gray-100'
        })
      }
    </Link>
  )
}