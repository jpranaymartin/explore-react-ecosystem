import {combineReducers} from 'redux';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_TASK_LIST':
      return [...action.payload];
    default:
      return state;
  }
};

const reducer = combineReducers({
  tasks: tasksReducer
})

export default reducer;
