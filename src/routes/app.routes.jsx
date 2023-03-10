import { Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { Home } from '../pages/Home'
import { EditProduct } from '../pages/EditProduct'
import { NewProduct } from '../pages/NewProduct'
import { NotFound } from '../pages/NotFound'
import { Product } from '../pages/Product'

export function AppRoutes() {
  const { user } = useAuth()

  const isAdmin = user?.admin

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      {isAdmin && <Route path="/admin/new-product" element={<NewProduct />} />}
      {isAdmin && (
        <Route
          path="/admin/edit-product/:product_id"
          element={<EditProduct />}
        />
      )}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
