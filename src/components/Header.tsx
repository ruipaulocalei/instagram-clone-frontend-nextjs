import { useReactiveVar } from '@apollo/client'
import { SearchIcon, MenuIcon, UserAddIcon, BellIcon, PlusCircleIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { isLoggedInVar } from '../apollo'
import { useUser } from '../hooks/useUser'
// import useUser from '../hooks/useUser'
export function Header() {
  const { data } = useUser()
  // console.log(user)
  // const loggedIn = useReactiveVar(isLoggedInVar)
  return (
    <header className='shadow-sm border-b sticky top-0 z-50 bg-white'>
      <div className='flex items-center justify-between max-w-4xl mx-auto'>
        <h1 className="text-2xl font-bold tracking-tight hidden md:inline">Instagram</h1>
        <div className="flex relative items-center p-3">
          <div className='absolute'>
            <SearchIcon className='h-5 w-5 text-gray-500 ml-2' />
          </div>
          <input className='pl-8 block text-black border focus:outline-none focus:ring-black 
        focus:border-gray-300 border-gray-300 rounded-sm py-1 bg-gray-50'
            type="search" name="search" id="serach" />
        </div>
        <div className='flex space-x-4 items-center'>
          <HomeIcon className='icon' />
          <MenuIcon className='md:hidden h-6 cursor-pointer' />
          <div className="relative icon">
            <PaperAirplaneIcon className='icon rotate-45' />
            <div className="absolute -top-1 -right-2 bg-red-500 rounded-full
            flex items-center justify-center text-white text-xs w-5 h-5 ">3</div>
          </div>
          <PlusCircleIcon className='icon' />
          {/* <UserAddIcon className='h-4 w-4' /> */}
          {/* {data?.me.username} */}
          <div className='rounded-full hidden md:inline bg-gray-300 h-10 w-10'></div>
        </div>
      </div>
    </header>
  )
}