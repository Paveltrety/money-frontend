import About from '../AboutPage/About';
import Dashboard from '../Dashboard/Dashboard';
import { Routes as RouteWrapper, Route } from 'react-router-dom';
import { AuthorizedRoute } from './AuthorizedRoute';
import { NotAuthorizedRoute } from './NotAuthorizedRoute';
import Authorization from '../AuthPage/Authorization';
import NotFound from '../NotFoundPage/NotFound';
import EditProfile from '../EditProfilePage/EditProfile';

export type AuthorizedRouteProps = {
  isAuth: boolean;
};

const Routes = () => {
  return (
    <>
      <RouteWrapper>
        <Route element={<NotAuthorizedRoute />}>
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/" element={<About />} />
        </Route>
        <Route element={<AuthorizedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit" element={<EditProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </RouteWrapper>
    </>
  );
};
export default Routes;
