export default function SidebarItem({ item }: { item: SidebarItems }) {
  const Icon = item.Icon
  return (
    <ul className="group w-full cursor-pointer rounded-xl p-2 transition-all hover:bg-coldOcean">
      <li className="flex flex-row items-center gap-4">
        <Icon
          size={22}
          className="transition-text mt-0.5 text-neutral-500 group-hover:text-ocean"
          variant="Bulk"
        />
        <span className="text-sm font-normal">{item.title}</span>
      </li>
    </ul>
  )
}
