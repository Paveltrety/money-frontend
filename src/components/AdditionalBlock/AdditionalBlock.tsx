import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store';
import DayInfo from '../DayInfo/DayInfo';
import TargetInfo from '../TargetInfo/TargetInfo';
import { Wrapper } from './styles';

const AdditionalBlock = () => {
  const selectedDay = useSelector(
    (state: StateType) => state.calendar.selectedDay,
  );
  return <Wrapper>{selectedDay ? <DayInfo selectedDay={selectedDay} /> : <TargetInfo />}</Wrapper>;
};

export default AdditionalBlock;
