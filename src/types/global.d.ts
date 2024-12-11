export {}
import type { Icon } from 'iconsax-react'

declare global {
  interface SidebarItems {
    title: string
    Icon: Icon
    url: string
    auth: boolean
  }

  interface User {
    _id: string
    email: string
    firstname: string
    lastname: string
    role: string
    picture: string
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
}
