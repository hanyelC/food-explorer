import { Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/user/SignIn'
import { SignUp } from '../pages/user/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
  )
}
