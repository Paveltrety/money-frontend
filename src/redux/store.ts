import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user/userReducer';
import projectSaga from './sagas';
import calendarReducer from './calendar/calendarReducer';
import expensesReducer from './expense/expensesReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  user: userReducer,
  calendar: calendarReducer,
  expenses: expensesReducer,
});

export type StateType = ReturnType<typeof reducers>;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(projectSaga);

export default store;
