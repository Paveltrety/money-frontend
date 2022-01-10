import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/userActions';
import AdditionalBlock from '../AdditionalBlock/AdditionalBlock';
import Calendar from '../Calendar/Calendar';
import { Wrapper } from './styles';

function Dashboard() {
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <Wrapper>
      <button style={{position: 'absolute', top: 0}} onClick={logoutUser}>Выход</button>
      <Calendar />
      <AdditionalBlock />
    </Wrapper>
  );
}

export default Dashboard;
