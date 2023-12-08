import {Navigate} from 'react-router-dom'
import {UserAuth} from './AuthContext'

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()

    if (!user) return <Navigate to='/' />
  return children
   
  
}
