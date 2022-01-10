import moment from 'moment';
import { FC, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { chooceDay } from '../../redux/calendar/calendarActions';
import { Cell, DayWrapper } from './styles';

type CalendarCellProps = {
  itemDay: moment.Moment;
  today: moment.Moment;
  selectedDayUnix: number | null;
};

const CalendarCell: FC<CalendarCellProps> = ({
  itemDay,
  today,
  selectedDayUnix,
}) => {
  const dispatch = useDispatch();

  const isCurrentDay = (day: moment.MomentInput) => moment().isSame(day, 'day');
  const checkSelectedMonth = (day: moment.MomentInput) =>
    today.isSame(day, 'month');

  const handleSelectDay = useCallback(() => {
    const convertToUnix = moment(itemDay).unix();
    dispatch(chooceDay(convertToUnix));
  }, [itemDay, dispatch]);
  const isSelectedMonth = checkSelectedMonth(itemDay);
  const isSelectedDay = useMemo(
    () => selectedDayUnix === moment(itemDay).unix(),
    [itemDay, selectedDayUnix],
  );

  const day = itemDay.format('D');

  return (
    <Cell
      isWeekend={itemDay.day() === 0 || itemDay.day() === 6}
      isSelectedMonth={isSelectedMonth}
      isSelectedDay={isSelectedDay}
    >
      <DayWrapper isCurrentDay={isCurrentDay(itemDay)}>
        <span>{day}</span>
        {isSelectedMonth && <span onClick={handleSelectDay}>Инфо</span>}
      </DayWrapper>
    </Cell>
  );
};

export default CalendarCell;
