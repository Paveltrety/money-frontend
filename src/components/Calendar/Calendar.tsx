import moment from 'moment';
import { useCallback, useState } from 'react';
import CalendarGrid from './CalendarGrid';
import CalendarHeader from './CalendarHeader';
import { CalendarWrapper } from './styles';

const Calendar = () => {
  //  const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');
  debugger;
  const handlerPrevMonth = useCallback(
    () => setToday((prevToday) => prevToday.clone().subtract(1, 'month')),
    [setToday],
  );
  const handlerNextMonth = useCallback(
    () => setToday((prevToday) => prevToday.clone().add(1, 'month')),
    [setToday],
  );
  const handlerTodayMonth = useCallback(() => setToday(moment()), [setToday]);

  return (
    <CalendarWrapper>
      <CalendarHeader
        today={today}
        handlerPrevMonth={handlerPrevMonth}
        handlerNextMonth={handlerNextMonth}
        handlerTodayMonth={handlerTodayMonth}
      />
      <CalendarGrid startDay={startDay} today={today}/>
    </CalendarWrapper>
  );
};

export default Calendar;
