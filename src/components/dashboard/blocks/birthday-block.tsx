import Avatar from '@/components/ui/avatar'
import { getBirthdayDate } from '@/lib/date-operations/calculate-birthday'

export default function BirthdayBlock({ birthday }: { birthday: Birthday }) {
  const date = getBirthdayDate(birthday.birthdate)
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-xl px-1 py-1.5 hover:bg-coldOcean hover:dark:bg-ocean/20">
      <div className="flex items-center gap-4">
        <Avatar
          src={birthday.picture}
          alt={birthday.firstname}
          firstname={birthday.firstname}
          lastname={birthday.lastname}
          defaultColor
        />
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {birthday.firstname} {birthday.lastname}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{birthday.role}</p>
        </div>
      </div>
      <p className="mr-1 text-nowrap text-sm text-gray-500 dark:text-gray-400">{date}</p>
    </div>
  )
}
