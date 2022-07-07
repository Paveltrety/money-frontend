import moment from 'moment';
import { FC } from 'react';
import { HeaderWrapper } from './styles';

type CalendarHeaderProps = {
  today: moment.Moment;
  handlerPrevMonth: () => void;
  handlerNextMonth: () => void;
  handlerTodayMonth: () => void;
};

const CalendarHeader: FC<CalendarHeaderProps> = ({
  today,
  handlerPrevMonth,
  handlerNextMonth,
  handlerTodayMonth,
}) => {
  return (
    <HeaderWrapper>
      <div>
        Месяц: {today.format('MMMM')} <br />
        Год: {today.format('YYYY')}
      </div>
      <div>
        <button onClick={handlerPrevMonth}>&lt;</button>
        <button onClick={handlerTodayMonth}>Сегодня</button>
        <button onClick={handlerNextMonth}>&gt;</button>
      </div>
    </HeaderWrapper>
  );
};

export default CalendarHeader;
