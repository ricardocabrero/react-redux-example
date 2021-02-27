
const ADD = 'add';
const REMOVE = 'remove';
const TOGGLE = 'toggle';

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            return [...state, action.payload];

        case REMOVE:
            return state.filter(el => el.id !== action.payload);

        case TOGGLE:
            return state.map(el => (el.id === action.payload) 
            ? {...el, selected:!el.selected} : el);
            
        default:
            return state;
    }
}

const actionAdd = (description, id, selected) => ({
    type: ADD,
    payload: {
        id,
        description,
        selected,
    }
});

const actionRemove = (id) => ({
    type: REMOVE,
    payload: id
});

const actionToggle = (id) => ({
    type: TOGGLE,
    payload: id
});

export {
    listReducer as default,
    actionAdd,
    actionRemove,
    actionToggle,
}