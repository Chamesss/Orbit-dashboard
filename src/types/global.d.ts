export {}
import type { Icon } from 'iconsax-react'

declare global {
  interface TProfile {
    firstname: string
    lastname: string
    picture: string
  }
  interface SidebarItems {
    title: string
    Icon: Icon
    url: string
    auth: boolean
  }

  interface User extends TProfile {
    id: string
    email: string
    role: string
  }

  type TView = 'week' | 'month' | 'year'

  interface OverviewData {
    duration: TView
    employees: number
    onLeave: number
    atOffice: number
    onRemote: number
    prevEmployees: number
    prevOnLeave: number
    prevAtOffice: number
    prevOnRemote: number
  }

  interface Tasks {
    id: string
    title: string
    description: string
    category: string
    deadline: Date
    assignedUser: TProfile
  }

  interface TasksWithIcons extends Tasks {
    Icon: Icon
  }

  interface FetchedTasksCounted {
    total: number
    tasks: Tasks[]
  }

  interface Notes {
    id: string
    title: string
    description: string
    date: Date
    keywords: string[] | null
    done: boolean
  }

  interface OfflineUser extends TProfile {
    id: string
    startDate: Date
    endDate: Date
    reason: string
  }

  interface OfflineUserResponse {
    data: OfflineUser[]
    total: number
  }

  interface Birthday extends TProfile {
    id: string
    role: string
    birthdate: Date
  }
}
