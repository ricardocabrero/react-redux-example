import { createStore, combineReducers } from 'redux';
import listReducer from '../reducersDuck/listReducer';
import uiReducer from '../reducersDuck/uiReducer';

const reducers = combineReducers({
    list: listReducer,
    repeat: uiReducer, 
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;