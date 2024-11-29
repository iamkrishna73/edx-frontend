import { Navigate} from 'react-router-dom'
import PrivateHome from './PrivateHome';


const PrivateRoutes = () => {

   let auth = {'token':data}
return (
    auth.token ? <PrivateHome/>: <Navigate to='/login'/>
  )
}

export default PrivateRoutes;