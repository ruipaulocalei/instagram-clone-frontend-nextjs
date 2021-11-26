import { Menu } from '@headlessui/react'
import { MenuIcon, UserGroupIcon } from '@heroicons/react/outline'
import { ActiveLink } from './ActiveLink'
export function Sidebar() {
  return (
    <aside className='w-48 mr-8'>
      <div className='flex'>
        <Menu>
          <Menu.Button>
            <MenuIcon className='h-5 w-5' />
          </Menu.Button>
          <Menu.Items>
            <Menu.Item>
              <div>
                <h1 className='font-bold text-gray-400 text-xl uppercase'>Geral</h1>
                <div className='items-stretch mt-8 space-y-2'>
                  <ActiveLink href='/dashboard'>
                    <div className='flex items-center space-x-6'>
                      <MenuIcon className='h-5 w-5' />
                      <h3 className='font-medium'>Dashboard</h3>
                    </div>
                  </ActiveLink>
                  <div className='flex items-center space-x-6'>
                    <UserGroupIcon className='h-5 w-5' />
                    <h3 className='font-medium'>Usuários</h3>
                  </div>
                </div>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </aside>
  )
}