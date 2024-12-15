import { Routes, Route } from 'react-router'
import * as Pages from './pages'

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Pages.Home />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  )
}
