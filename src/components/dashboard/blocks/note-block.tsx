import Budge from '@/components/ui/budge'
import Checkbox from '@/components/ui/checkbox'
import { remainingDaysExpended } from '@/lib/date-operations/calculate-days-left'
import { cn } from '@/lib/utils'
import { Calendar2 } from 'iconsax-react'
import { useState } from 'react'

export default function NoteBlock({ note }: { note: Notes }) {
  const dateTracking = remainingDaysExpended(note.date)
  //extract date in form "Oct 11"
  const extractedDate = note.date.toDateString().split(' ').slice(1, 3).join(' ')
  const [isDone, setIsDone] = useState(Boolean(note.done))

  return (
    <div className="mb-4 mt-2 w-full px-2 last:mb-2">
      <div className="flex w-full flex-row justify-between gap-3">
        <Checkbox
          className="mt-1"
          defaultChecked={isDone}
          onChange={(checked) => setIsDone(checked)}
        />
        <div className={cn('w-full transition-opacity', isDone && 'opacity-60')}>
          <h3 className="line-clamp-1 text-base font-semibold">{note.title}</h3>
          <p className="line-clamp-1 text-sm text-gray-600 dark:text-gray-400">
            {note.description}
          </p>
          <div className="mt-2 flex flex-row justify-between">
            <div className="flex flex-row flex-wrap gap-2">
              <Budge text={dateTracking} colorProps="text-wood bg-coldWood dark:bg-wood/20" />
              {note.keywords &&
                note.keywords.map((keyword) => <Budge key={keyword} text={keyword} />)}
            </div>
            <div className="flex flex-row flex-nowrap items-center gap-1">
              <Calendar2 variant="Bulk" size={20} className="-mt-0.5 shrink-0 text-ocean" />
              <span className="text-nowrap text-sm text-ocean">{extractedDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
