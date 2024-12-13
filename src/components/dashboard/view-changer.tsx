import { cn } from '@/lib/utils'

const views = ['week', 'month', 'year']

export default function ViewChanger({ fn, state }: { fn: (view: TView) => void; state: TView }) {
  return (
    <div className="relative flex h-full items-center gap-4 text-sm font-medium text-gray-500">
      {views.map((view) => (
        <p
          key={view}
          className={cn(
            'cursor-pointer capitalize transition-all hover:text-ocean/80 dark:text-gray-400',
            state === view && 'text-ocean dark:text-ocean'
          )}
          onClick={() => fn(view as TView)}
        >
          {view}
        </p>
      ))}
      <div
        className={cn(
          'absolute bottom-0 h-[2px] w-[2rem] rounded-full bg-ocean transition-all',
          state === 'week' && 'right-[101%] w-[2.4rem] translate-x-[100%] transform',
          state === 'month' && 'right-[47.5%] w-[3rem] translate-x-1/2 transform',
          state === 'year' && 'right-[-2%]'
        )}
      />
    </div>
  )
}
