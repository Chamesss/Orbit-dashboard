import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import { HambergerMenu } from 'iconsax-react'
import React, { useState } from 'react'
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
  const [expend, setExpend] = useState(false)

  return (
    <div
      className={cn(
        'z-[40] flex h-full max-h-screen w-[3.5rem] flex-col justify-between bg-white transition-all dark:bg-stone-900 xl:relative xl:w-[20%]',
        { 'w-[17.5rem]': expend }
      )}
    >
      <div className="flex w-full flex-row justify-between px-2 py-2.5 xl:px-4 xl:py-4">
        <img
          className={cn(
            'hidden h-7 w-auto object-contain xl:block xl:h-10',
            expend && 'block w-fit'
          )}
          src={isDarkMode ? './logo-white.svg' : './logo-blue.svg'}
          alt="logo"
        />
        <HambergerMenu
          onClick={() => setExpend((prev) => !prev)}
          size={25}
          className={cn('block h-7 w-full self-center xl:hidden', expend && 'w-fit')}
        />
      </div>

      <div className="scrollbar flex h-full w-full flex-col gap-1 overflow-y-auto overflow-x-hidden px-2 py-4 xl:px-4">
        {sidebarItemsMain.map((item: SidebarItems) => (
          <SidebarItem expend={expend} key={item.title} item={item} />
        ))}
        <GlobalSectionDivider expend={expend}>people</GlobalSectionDivider>
        {sidebarItemsPeople.map((item: SidebarItems) => (
          <SidebarItem expend={expend} key={item.title} item={item} />
        ))}
        <GlobalSectionDivider expend={expend}>payments</GlobalSectionDivider>
        {sidebarItemsPayments.map((item: SidebarItems) => (
          <SidebarItem expend={expend} key={item.title} item={item} />
        ))}
        <GlobalSectionDivider expend={expend}>company</GlobalSectionDivider>
        {sidebarItemsSetting.map((item: SidebarItems) => (
          <SidebarItem expend={expend} key={item.title} item={item} />
        ))}
      </div>

      <div className="flex flex-row items-center justify-between border border-neutral-100 px-2 dark:border-neutral-800">
        <UserDisplay />
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
  <div className="flex w-full flex-row justify-between">
    <hr
      className={cn(
        'my-4 ml-1 w-full border opacity-100 xl:hidden',
        expend && 'my-0 w-0 border-0 opacity-0'
      )}
    />
    <p
      className={cn(
        'my-0 h-0 w-0 text-xxs font-semibold uppercase opacity-0 xl:block',
        expend && 'my-4 !block h-full w-full opacity-100'
      )}
    >
      {children}
    </p>
  </div>
)

// const SectionDivider = ({ expend }: { expend: boolean }) => (
//   <hr
//     className={cn(
//       'my-2 border opacity-100 transition-all xl:hidden',
//       expend && 'my-0 border-0 opacity-0'
//     )}
//   />
// )

// const SectionTitle = ({ children, expend }: { children: React.ReactNode; expend: boolean }) => (
//   <p className={cn('my-4 hidden text-xxs font-semibold uppercase xl:block', expend && '!block')}>
//     {children}
//   </p>
// )
