import { cn } from '@/lib/utils'

export default function SidebarItem({ item, expend }: { item: SidebarItems; expend: boolean }) {
  const Icon = item.Icon

  const isPathActive = item.url === window.location.pathname

  return (
    <ul
      className={cn(
        'group w-fit cursor-pointer rounded-xl p-2 transition-all hover:bg-coldOcean hover:dark:bg-ocean/20 xl:w-full',
        { 'bg-coldOcean dark:bg-ocean/20': isPathActive },
        { 'w-full': expend }
      )}
    >
      <li className={cn('flex flex-row items-center gap-0 xl:gap-4', expend && '!gap-4')}>
        <Icon
          size={22}
          className={cn('transition-text mt-0.5 shrink-0 text-neutral-500 group-hover:text-ocean', {
            'text-ocean': isPathActive
          })}
          variant="Bulk"
        />
        <span
          className={cn(
            'w-0 overflow-hidden text-nowrap text-sm font-normal opacity-0 transition-all xl:w-auto xl:opacity-100',
            expend && 'w-fit opacity-100'
          )}
        >
          {item.title}
        </span>
      </li>
    </ul>
  )
}
