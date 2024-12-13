import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { HambergerMenu } from 'iconsax-react'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import UserDisplay from '../user-display/user-display'
import {
  sidebarItemsMain,
  sidebarItemsPayments,
  sidebarItemsPeople,
  sidebarItemsSetting
} from './constants'
import SidebarItem from './sidebar-item'

export default function SideBar({
  sidebarOpen,
  setSidebarOpen
}: {
  sidebarOpen?: boolean
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { isDarkMode } = useTheme()
  const [expend, setExpend] = useState(sidebarOpen || false)

  return (
    <div
      className={cn(
        'hidden h-full max-h-screen w-[3.5rem] flex-col justify-between bg-white transition-all dark:bg-stone-900 md:flex xl:relative xl:w-[20%]',
        { 'w-[17.5rem]': expend },
        sidebarOpen && '!flex'
      )}
    >
      <div className="flex w-full flex-row justify-between px-2 py-2.5 xl:px-4 xl:py-4">
        <img
          className={cn(
            'h-7 w-0 overflow-hidden object-contain xl:h-10 xl:w-auto',
            expend && 'w-fit'
          )}
          src={isDarkMode ? './logo-white.svg' : './logo-blue.svg'}
          alt="logo"
        />
        <HambergerMenu
          onClick={() => {
            if (sidebarOpen) return
            setExpend((prev) => !prev)
          }}
          size={25}
          className={cn(
            'block h-7 w-full self-center xl:hidden',
            expend && 'w-fit',
            sidebarOpen && 'hidden'
          )}
        />
        {setSidebarOpen && <X onClick={() => setSidebarOpen(false)} />}
      </div>

      <div className="scrollbar flex h-full w-full flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-4 xl:px-4">
        {sidebarItemsMain.map((item: SidebarItems) => (
          <SidebarItem
            setSidebarOpen={setSidebarOpen}
            expend={expend}
            key={item.title}
            item={item}
          />
        ))}
        <GlobalSectionDivider expend={expend}>people</GlobalSectionDivider>
        {sidebarItemsPeople.map((item: SidebarItems) => (
          <SidebarItem
            setSidebarOpen={setSidebarOpen}
            expend={expend}
            key={item.title}
            item={item}
          />
        ))}
        <GlobalSectionDivider expend={expend}>payments</GlobalSectionDivider>
        {sidebarItemsPayments.map((item: SidebarItems) => (
          <SidebarItem
            setSidebarOpen={setSidebarOpen}
            expend={expend}
            key={item.title}
            item={item}
          />
        ))}
        <GlobalSectionDivider expend={expend}>company</GlobalSectionDivider>
        {sidebarItemsSetting.map((item: SidebarItems) => (
          <SidebarItem
            setSidebarOpen={setSidebarOpen}
            expend={expend}
            key={item.title}
            item={item}
          />
        ))}
      </div>

      <div className="flex flex-row items-center justify-between border border-neutral-100 px-1.5 dark:border-neutral-800 xl:px-2">
        <UserDisplay expend={expend} />
      </div>
    </div>
  )
}

const GlobalSectionDivider = ({
  expend,
  children
}: {
  expend: boolean
  children: React.ReactNode
}) => (
  <div className="my-2 flex max-h-[1rem] min-h-[1rem] w-full flex-row items-center justify-between">
    <hr
      className={cn(
        'ml-1 w-full border opacity-100 xl:hidden',
        expend && 'my-0 w-0 border-0 opacity-0'
      )}
    />
    <p
      className={cn(
        'my-0 h-0 w-0 text-xxs font-semibold uppercase opacity-0 xl:block xl:h-auto xl:w-auto xl:opacity-100',
        expend && '!block w-full -translate-y-2 bg-red-100 opacity-100'
      )}
    >
      {children}
    </p>
  </div>
)
