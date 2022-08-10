import { Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/User/SignIn'
import { SignUp } from '../pages/User/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
  )
}
