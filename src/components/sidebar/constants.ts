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
    url: '',
    auth: false
  }
]

export const sidebarItemsPeople: SidebarItems[] = [
  {
    title: 'Team members',
    Icon: Profile2User,
    url: '',
    auth: false
  },
  {
    title: 'Orientation',
    Icon: UserAdd,
    url: '',
    auth: false
  },
  {
    title: 'Leave',
    Icon: Calendar,
    url: '',
    auth: false
  },
  {
    title: 'Hours monitoring',
    Icon: Clock,
    url: '',
    auth: false
  },
  {
    title: 'Rewards',
    Icon: MedalStar,
    url: '',
    auth: false
  },
  {
    title: 'Expenditures',
    Icon: Receipt21,
    url: '',
    auth: false
  },
  {
    title: 'Expense estimator',
    Icon: Calculator,
    url: '',
    auth: false
  },
  {
    title: 'Remuneration',
    Icon: MagicStar,
    url: '',
    auth: false
  },
  {
    title: 'Inquiries',
    Icon: DirectboxReceive,
    url: '',
    auth: false
  },
  {
    title: 'Inputs',
    Icon: Messages1,
    url: '',
    auth: false
  }
]

export const sidebarItemsPayments: SidebarItems[] = [
  {
    title: 'Salaries',
    Icon: DollarCircle,
    url: '',
    auth: false
  },
  {
    title: 'Contractor bills',
    Icon: Cards,
    url: '',
    auth: false
  },
  {
    title: 'Service Bills',
    Icon: ReceiptText,
    url: '',
    auth: false
  },
  {
    title: 'Invoicing',
    Icon: TableDocument,
    url: '',
    auth: false
  },
  {
    title: 'Financial methods',
    Icon: Wallet,
    url: '',
    auth: false
  }
]

export const sidebarItemsSetting: SidebarItems[] = [
  {
    title: 'Company',
    Icon: Setting,
    url: '',
    auth: false
  }
]
