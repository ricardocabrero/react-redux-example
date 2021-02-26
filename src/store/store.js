import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/listReducer';

const reducers = combineReducers({
    list: listReducer, 
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;