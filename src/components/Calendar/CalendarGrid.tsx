import moment from 'moment';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store';
import CalendarCell from './CalendarCell';
import { Cell, GridWrapper } from './styles';

type CalendarGridProps = {
  startDay: moment.Moment;
  today: moment.Moment;
};

const CalendarGrid: FC<CalendarGridProps> = ({ startDay, today }) => {
  const totalDays = 42;
  const day = startDay.clone();
  const selectedDay = useSelector(
    (state: StateType) => state.calendar.selectedDay,
  );

  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  return (
    <GridWrapper>
      {[...Array(7)].map((_, index) => (
        <Cell key={index}>
          {moment()
            .day(index + 1)
            .format('ddd')}
        </Cell>
      ))}
      {daysArray.map((itemDay) => (
        <CalendarCell
          key={itemDay.format('DDMMYYYY')}
          itemDay={itemDay}
          today={today}
          selectedDayUnix={selectedDay}
        //isSelectedDay={selectedDay === moment(itemDay).unix()}
        />
      ))}
    </GridWrapper>
  );
};

export default CalendarGrid;
