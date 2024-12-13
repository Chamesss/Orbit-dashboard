import CompanyPage from '@/pages/dummy-pages/company/company'
import ContractorBillsPage from '@/pages/dummy-pages/payments/contractor-bills'
import FinancialMethodsPage from '@/pages/dummy-pages/payments/financial-methods'
import InvoicingPage from '@/pages/dummy-pages/payments/invoicing'
import SalariesPage from '@/pages/dummy-pages/payments/salaries'
import ServiceBillsPage from '@/pages/dummy-pages/payments/service-bills'
import Expenditures from '@/pages/dummy-pages/people/expenditures'
import ExpenseEstimatorPage from '@/pages/dummy-pages/people/expense-estimator'
import HoursMonitoringPage from '@/pages/dummy-pages/people/hours-monitoring'
import InputsPage from '@/pages/dummy-pages/people/inputs'
import InquiriesPage from '@/pages/dummy-pages/people/inquiries'
import LeavePage from '@/pages/dummy-pages/people/leave'
import OrientationPage from '@/pages/dummy-pages/people/orientation'
import Remuneration from '@/pages/dummy-pages/people/remuneration'
import RewardsPage from '@/pages/dummy-pages/people/rewards'
import TeamMembersPage from '@/pages/dummy-pages/people/team-members'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from '../pages/dashboard'
import Layout from './../app/layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          {/* people section pages */}
          <Route path="/team-members" element={<TeamMembersPage />} />
          <Route path="/orientation" element={<OrientationPage />} />
          <Route path="/leave" element={<LeavePage />} />
          <Route path="/hours-monitoring" element={<HoursMonitoringPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/expenditures" element={<Expenditures />} />
          <Route path="/expense-estimator" element={<ExpenseEstimatorPage />} />
          <Route path="/remuneration" element={<Remuneration />} />
          <Route path="/inquiries" element={<InquiriesPage />} />
          <Route path="/inputs" element={<InputsPage />} />
          {/* payments section pages */}
          <Route path="/salaries" element={<SalariesPage />} />
          <Route path="/contractor-bills" element={<ContractorBillsPage />} />
          <Route path="/service-bills" element={<ServiceBillsPage />} />
          <Route path="/invoicing" element={<InvoicingPage />} />
          <Route path="/financial-methods" element={<FinancialMethodsPage />} />
          {/* company section pages */}
          <Route path="/company" element={<CompanyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
