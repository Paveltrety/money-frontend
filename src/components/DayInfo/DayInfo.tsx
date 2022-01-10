import moment from 'moment';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { chooceDay } from '../../redux/calendar/calendarActions';

type DayInfoProps = {
  selectedDay: number;
};

const DayInfo: FC<DayInfoProps> = ({ selectedDay }) => {
  const dispatch = useDispatch();
  const day = moment.unix(selectedDay).format('D');;
  const month = moment.unix(selectedDay).format('MMMM');;
  debugger;
  return (
    <div>
      Мясяц: {month}
      <br />
      День: {day}
      <br />
      <button onClick={() => dispatch(chooceDay(null))}>Очистить</button>
    </div>
  );
};

export default DayInfo;
