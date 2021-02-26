
const ADD = 'add';
const REMOVE = 'remove';
const TOGGLE = 'toggle';

const listReducer = (state= [], action) => {
    switch(action.type) {
        case ADD:
            return [...state, action.payload];
        case REMOVE:
            return state.filter(el => el.id !== action.payload.id);
        case TOGGLE:
            return state.map(el => (el.id === action.payload.id) 
            ? {...el, selected:!el.selected} : el);
        default:
            return state;
    }
}

const actionAdd = (value, id, selected) => ({
    type: ADD,
    payload: {
        id,
        value,
        selected,
    }
});

const actionRemove = (item) => ({
    type: REMOVE,
    payload: item
});

const actionToggle = (item) => ({
    type: TOGGLE,
    payload: item
});

export {
    listReducer as default,
    actionAdd,
    actionRemove,
    actionToggle,
}