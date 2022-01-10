import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../redux/store';
import { checkAuth } from '../redux/user/userActions';

function useCheckAuthoraized() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: StateType) => state.user.info);

  if (userInfo) {
    return true;
  }

  if (localStorage.getItem('token')) {
    dispatch(checkAuth());
  } else return false;
}

export default useCheckAuthoraized;
