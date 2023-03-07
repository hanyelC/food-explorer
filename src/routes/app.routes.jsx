import { Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { Home } from '../pages/Home'
import { EditProduct } from '../pages/EditProduct'
import { NewProduct } from '../pages/NewProduct'
import { NotFound } from '../pages/NotFound'

export function AppRoutes() {
  const { user } = useAuth()

  const isAdmin = user?.admin

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {isAdmin && <Route path="/admin/new-product" element={<NewProduct />} />}
      {isAdmin && <Route path="/admin/edit-product" element={<EditProduct />} />}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
