import { combineReducers } from 'redux';
import Tasks from './reducer_todo';

const rootReducer = combineReducers({
    tasks: Tasks
});

export default rootReducer;
