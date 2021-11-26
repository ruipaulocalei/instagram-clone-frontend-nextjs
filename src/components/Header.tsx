import { SearchIcon, MenuIcon, UserAddIcon, BellIcon } from '@heroicons/react/outline'
export function Header() {
  return (
    <header className='w-full justify-between flex max-w-screen-xl mx-auto h-20 mt-4 px-6 
    items-center'>
      <h1 className="text-2xl font-bold tracking-tight">RC</h1>
      <div className="flex relative items-center p-3">
        <div className='absolute'>
          <SearchIcon className='h-5 w-5 text-gray-500 ml-2' />
        </div>
        <input className='pl-8 block text-black focus:ring-black 
        focus:outline-none focus:border-gray-300 rounded-sm py-1'
          type="search" name="search" id="serach" />
      </div>
      <div className='flex space-x-4 items-center'>
        <BellIcon className='h-4 w-4' />
        <UserAddIcon className='h-4 w-4' />
        <div className='rounded-full bg-white h-10 w-10'></div>
      </div>
    </header>
  )
}