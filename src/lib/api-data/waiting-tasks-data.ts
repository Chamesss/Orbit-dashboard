import { Briefcase, CalendarAdd, CardPos, DocumentUpload, Icon, Receipt2 } from 'iconsax-react'

interface CategoriesIconsList {
  title: string
  Icon: Icon
}

export const categoriesIconsList: CategoriesIconsList[] = [
  {
    title: 'schedule',
    Icon: CalendarAdd
  },
  {
    title: 'papers',
    Icon: Receipt2
  },
  {
    title: 'files',
    Icon: DocumentUpload
  },
  {
    title: 'money',
    Icon: CardPos
  },
  {
    title: 'company',
    Icon: Briefcase
  }
]

const fetchedTasks: Tasks[] = [
  {
    id: '1',
    title: 'Review time off request',
    description: '1 request needs your attention.',
    deadline: new Date(),
    assignedUser: {
      firstname: 'Ford',
      lastname: 'D',
      picture: ''
    },
    category: 'schedule'
  },
  {
    id: '2',
    title: 'Process contractor invoices',
    description: 'You have 1 unpaid contractor invoice to review.',
    deadline: new Date(new Date().setDate(new Date().getDate() + 2)),
    assignedUser: {
      firstname: 'Karl',
      lastname: 'K',
      picture: ''
    },
    category: 'papers'
  },
  {
    id: '3',
    title: 'Upload additional documents for onboarding',
    description: 'We need a few more details for to make sure your onboarding goes smoothly.',
    deadline: new Date(new Date().setDate(new Date().getDate() + 6)),
    assignedUser: {
      firstname: 'Lara',
      lastname: 'Z',
      picture: ''
    },
    category: 'files'
  },
  {
    id: '4',
    title: 'Set up the new financial method',
    description: 'This will avoid delaying invoice and contractor payments.',
    deadline: new Date(new Date().setDate(new Date().getDate() - 1)),
    assignedUser: {
      firstname: 'Karl',
      lastname: 'K',
      picture: ''
    },
    category: 'money'
  },
  {
    id: '5',
    title: 'Finish company verification',
    description: 'For secure payments at Orbit, we need more details about your company.',
    deadline: new Date(),
    assignedUser: {
      firstname: 'Karl',
      lastname: 'K',
      picture: ''
    },
    category: 'company'
  }
]

export const fetchedTasksCounted = {
  total: 9,
  tasks: fetchedTasks
}
