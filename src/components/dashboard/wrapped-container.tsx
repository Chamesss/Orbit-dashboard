import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import ViewChanger from './view-changer'

type WrappedContainerProps = {
  className?: string
  title: string
  children: React.ReactNode
  totalCount?: number | undefined
  changeableView?: {
    isChangeable: boolean
    fn: (view: TView) => void
    state: TView
  }
}

export default function WrappedContainer({
  className,
  title,
  children,
  changeableView,
  totalCount
}: WrappedContainerProps) {
  return (
    <div className={cn('overflow-hidden rounded-2xl border border-input bg-white', className)}>
      <div className="flex h-[4rem] flex-row items-center justify-between border-b border-input px-6">
        <p className="h-fit font-semibold">
          {title}
          {totalCount && (
            <span className="ml-1 text-xs font-medium text-gray-500"> ({totalCount})</span>
          )}
        </p>
        {changeableView?.isChangeable ? (
          <ViewChanger fn={changeableView.fn} state={changeableView.state} />
        ) : (
          <div className="flex cursor-pointer flex-row gap-1 text-sm text-ocean hover:underline">
            <p className="font-semibold">View all</p>
            <ChevronRight size={20} />
          </div>
        )}
      </div>
      <div className="relative flex min-h-[8rem] w-full items-center justify-start p-4">
        {children}
      </div>
    </div>
  )
}
