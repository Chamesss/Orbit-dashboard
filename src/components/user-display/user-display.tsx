export default function UserDisplay({ user }: { user: User }) {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <img src={user.picture} alt="avatar" className="h-10 w-10 rounded-full" />
        <div className="ml-4 -space-y-1">
          <p className="text-base font-semibold capitalize">
            {user.firstname} {user.lastname}
          </p>
          <p className="text-sm text-neutral-500">{user.role}</p>
        </div>
      </div>
    </div>
  )
}
