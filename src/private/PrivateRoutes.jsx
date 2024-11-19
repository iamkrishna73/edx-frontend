import { Navigate, Outlet } from 'react-router-dom'
import PrivateHome from './PrivateHome';

const PrivateRoutes = () => {
  let auth = {'token':true}
return (
    auth.token ? <PrivateHome/>: <Navigate to='/login'/>
  )
}

export default PrivateRoutes;