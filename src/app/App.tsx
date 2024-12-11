import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from '../pages/dashboard'
import Layout from './../app/layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
