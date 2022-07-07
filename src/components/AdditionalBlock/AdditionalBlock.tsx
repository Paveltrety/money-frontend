import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../redux/store';
import moment from 'moment';
import { Wrapper } from './styles';
import { chooceDay } from '../../redux/calendar/calendarActions';
import ExpenseView from '../Expense/ExpenseView';
import ExpenseEdit from '../Expense/ExpenseEdit';


const AdditionalBlock = () => {
  const { selectedDay, expensesList } = useSelector(
    (state: StateType) => ({
      selectedDay: state.calendar.selectedDay,
      expensesList: state.expenses.expensesList
    }),
  );

  const dispatch = useDispatch();
  const day = selectedDay ? moment.unix(selectedDay).format('D') : moment().format('D');
  const month = selectedDay ? moment.unix(selectedDay).format('MMMM') : moment().format("MMMM");
  return (
    <Wrapper>
      Мясяц: {month}, День: {day}
      <br />

      {selectedDay && <button onClick={() => dispatch(chooceDay(null))}>Очистить</button>}
      {expensesList.map(item => item.isEdit ? <ExpenseEdit /> : <ExpenseView {...item}/>)}
    </Wrapper>
  );
};

export default AdditionalBlock;
