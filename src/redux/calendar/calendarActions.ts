import { TYPES } from './actionCalendarTypes';

export const chooceDay = (day: number | null) => ({
  type: TYPES.CHOOSE_DAY,
  payload: day,
});
