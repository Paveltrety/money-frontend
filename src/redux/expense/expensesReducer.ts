import { ActionExpensesReducerType, InitialExpenseState } from '../types';
import { TYPES } from './actionExpenseTypes';

const initialState: InitialExpenseState = {
  expensesList: [
    {
      id: 1,
      categoryId: 5,
      categoryName: 'Авто',
      name: 'Бензин',
      value: '525,24',
      isEdit: false,
    },
    {
      id: 2,
      categoryId: 3,
      categoryName: 'Одежда',
      name: 'Футболка',
      value: '1200',
      isEdit: false,
    },
  ],
};
const expensesReducer = (
  state: InitialExpenseState = initialState,
  action: ActionExpensesReducerType,
): InitialExpenseState => {
  switch (action.type) {
    case TYPES.SELECT_EDIT_EXPENSE: {
      return state;
    }
    default:
      return state;
  }
};
export default expensesReducer;
