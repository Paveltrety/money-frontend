import { ActionCalendarReducerType, InitialCalendarState } from '../types';
import { TYPES } from './actionCalendarTypes';

const initialState: InitialCalendarState = {
  selectedDay: null,
};

const calendarReducer = (
  state: InitialCalendarState = initialState,
  action: ActionCalendarReducerType,
): InitialCalendarState => {
  switch (action.type) {
    case TYPES.CHOOSE_DAY: {
      return {
        ...state,
        selectedDay: action.payload,
      };
    }
    default:
      return state;
  }
};
export default calendarReducer;
