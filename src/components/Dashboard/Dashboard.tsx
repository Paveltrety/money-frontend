import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/userActions';

function Dashboard() {
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <div>
      dashboard <br />
      Страницу видят только авторизированные пользователи <br />
      <button onClick={logoutUser}>Выход</button>
    </div>
  );
}

export default Dashboard;
