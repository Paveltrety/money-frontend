import { TYPES } from "./actionTypes";
import { ActionUserReducerType, InitialUserState } from "../types";

const initialState: InitialUserState = {
  info: null,
};
const userReducer = (
  state: InitialUserState = initialState,
  action: ActionUserReducerType
): InitialUserState => {
  switch (action.type) {
    case TYPES.UPDATE_USER_INFO: {
      return {
        ...state,
        info: action.payload
      };
    }
    default:
      return state;
  }
};
export default userReducer;
