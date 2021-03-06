import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useCheckAuthoraized from '../../helpers/useCheckAuthoraized';

export const NotAuthorizedRoute = () => {
  const isAuth = useCheckAuthoraized();
  const location = useLocation();
  if (typeof isAuth === 'undefined') {
    return <h1>Загрузка</h1>;
  }
  if (isAuth) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  return <Outlet />;
};
