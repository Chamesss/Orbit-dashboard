import {
  Calculator,
  Calendar,
  Cards,
  Category2,
  Clock,
  DirectboxReceive,
  DollarCircle,
  MagicStar,
  MedalStar,
  Messages1,
  Profile2User,
  Receipt21,
  ReceiptText,
  Setting,
  TableDocument,
  UserAdd,
  Wallet
} from 'iconsax-react'

export const sidebarItemsMain: SidebarItems[] = [
  {
    title: 'Dashboard',
    Icon: Category2,
    url: '/',
    auth: false
  }
]

export const sidebarItemsPeople: SidebarItems[] = [
  {
    title: 'Team members',
    Icon: Profile2User,
    url: '/team-members',
    auth: false
  },
  {
    title: 'Orientation',
    Icon: UserAdd,
    url: '/orientation',
    auth: false
  },
  {
    title: 'Leave',
    Icon: Calendar,
    url: '/leave',
    auth: false
  },
  {
    title: 'Hours monitoring',
    Icon: Clock,
    url: '/hours-monitoring',
    auth: false
  },
  {
    title: 'Rewards',
    Icon: MedalStar,
    url: '/rewards',
    auth: false
  },
  {
    title: 'Expenditures',
    Icon: Receipt21,
    url: '/expenditures',
    auth: false
  },
  {
    title: 'Expense estimator',
    Icon: Calculator,
    url: '/expense-estimator',
    auth: false
  },
  {
    title: 'Remuneration',
    Icon: MagicStar,
    url: '/remuneration',
    auth: false
  },
  {
    title: 'Inquiries',
    Icon: DirectboxReceive,
    url: '/inquiries',
    auth: false
  },
  {
    title: 'Inputs',
    Icon: Messages1,
    url: '/inputs',
    auth: false
  }
]

export const sidebarItemsPayments: SidebarItems[] = [
  {
    title: 'Salaries',
    Icon: DollarCircle,
    url: '/salaries',
    auth: false
  },
  {
    title: 'Contractor bills',
    Icon: Cards,
    url: '/contractor-bills',
    auth: false
  },
  {
    title: 'Service Bills',
    Icon: ReceiptText,
    url: '/service-bills',
    auth: false
  },
  {
    title: 'Invoicing',
    Icon: TableDocument,
    url: '/invoicing',
    auth: false
  },
  {
    title: 'Financial methods',
    Icon: Wallet,
    url: '/financial-methods',
    auth: false
  }
]

export const sidebarItemsSetting: SidebarItems[] = [
  {
    title: 'Company',
    Icon: Setting,
    url: '/company',
    auth: false
  }
]
