import { MenuIcon, UserGroupIcon } from '@heroicons/react/outline'
export function Sidebar() {
  return (
    <aside className='w-64 mr-8'>
      <div>
        <h1 className='font-bold text-gray-400 text-xl uppercase'>Geral</h1>
        <div className='items-stretch mt-8 space-y-2'>
          <div className='flex items-center space-x-6'>
            <MenuIcon className='h-5 w-5' />
            <h3 className='font-medium'>Dashboard</h3>
          </div>
          <div className='flex items-center space-x-6'>
            <UserGroupIcon className='h-5 w-5' />
            <h3 className='font-medium'>Usuários</h3>
          </div>
        </div>
      </div>
    </aside>
  )
}