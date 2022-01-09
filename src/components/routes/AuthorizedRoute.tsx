import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useCheckAuthoraized from '../../helpers/useCheckAuthoraized';

export const AuthorizedRoute = () => {
  const isAuth = useCheckAuthoraized();
  debugger
  const location = useLocation();
  if(typeof isAuth === 'undefined'){
    return <h1>Загрузка</h1>
  }
  if (!isAuth) {
    return <Navigate to="/authorization" state={{ from: location }} />;
  }

  return <Outlet />;
};
