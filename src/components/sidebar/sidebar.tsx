import { useTheme } from '@/hooks/useTheme'
//import { ToggleTheme } from '../themes/toggle-theme'
import { EllipsisVertical } from 'lucide-react'
import React from 'react'
import UserDisplay from '../user-display/user-display'
import {
  sidebarItemsMain,
  sidebarItemsPayments,
  sidebarItemsPeople,
  sidebarItemsSetting
} from './constants'
import SidebarItem from './sidebar-item'

export default function SideBar() {
  const { isDarkMode } = useTheme()
  const user = {
    firstname: 'John',
    email: 'test@mail.com',
    picture: './assets/static-user.png',
    role: 'admin',
    _id: '1',
    lastname: 'Doe'
  }
  return (
    <div className="flex h-full max-h-screen w-[20%] flex-col justify-between bg-white dark:bg-black">
      <div className="p-4">
        <img
          className="h-10 w-auto object-contain"
          src={isDarkMode ? './logo-white.svg' : './logo-blue.svg'}
          alt="logo"
        />
      </div>

      <div className="scrollbar flex w-full flex-col gap-1 overflow-auto p-4">
        {sidebarItemsMain.map((item: SidebarItems) => (
          <SidebarItem key={item.title} item={item} />
        ))}
        <SectionTitle>people</SectionTitle>
        {sidebarItemsPeople.map((item: SidebarItems) => (
          <SidebarItem key={item.title} item={item} />
        ))}
        <SectionTitle>payments</SectionTitle>
        {sidebarItemsPayments.map((item: SidebarItems) => (
          <SidebarItem key={item.title} item={item} />
        ))}
        <SectionTitle>company</SectionTitle>
        {sidebarItemsSetting.map((item: SidebarItems) => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </div>

      <div className="flex flex-row items-center justify-between border border-neutral-100 px-2">
        {/* {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        <ToggleTheme /> */}
        <UserDisplay user={user} />
        <EllipsisVertical className="cursor-pointer hover:text-black/60" size={20} />
      </div>
    </div>
  )
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xxs my-4 font-semibold uppercase">{children}</p>
)
