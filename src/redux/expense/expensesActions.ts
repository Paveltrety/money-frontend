import { TYPES } from "./actionExpenseTypes";


export const selectEditExpense = (id: number) => ({
  type: TYPES.SELECT_EDIT_EXPENSE,
  payload: {
    id
  },
});
