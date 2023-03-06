import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signUp({ name, email, password, passwordConfirm }, cb) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
        passwordConfirm,
      })

      const { user, token } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ user, token })

      cb && cb()
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/session', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      console.log(error)
      if (error.response.data.message) alert(error.response.data.message)
      else alert('Algo deu errado')
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:token')
    setData({})
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('@foodexplorer:user'))
    const token = localStorage.getItem('@foodexplorer:token')

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ user, token })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
