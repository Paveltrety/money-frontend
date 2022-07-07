import { UserType } from '../types/User';
import { chooceDay } from './calendar/calendarActions';
import { selectEditExpense } from './expense/expensesActions';
import { updateUserInfo } from './user/userActions';

export type InitialUserState = {
  info: UserType | null;
};

export type ActionUserReducerType = ReturnType<typeof updateUserInfo>;

export type Result<T> = {
  result?: T;
  error?: string;
};

export type InitialCalendarState = {
  selectedDay: number | null;
};

export type ActionCalendarReducerType = ReturnType<typeof chooceDay>;

export type InitialExpenseState = {
  expensesList: Expense[];
};

export type Expense = {
  id: number;
  categoryId: number;
  categoryName: string;
  name: string;
  value: string;
  isEdit: boolean;
};

export type ActionExpensesReducerType = ReturnType<typeof selectEditExpense>;
