
const ISREPEAT = 'isRepeat';
const NOREPEAT = 'noRepeat';

const uiReducer = (state = false, action) => {
    switch(action.type) {
        case ISREPEAT:
            return state = action.payload.items.some(item => 
                item.description.toLowerCase() === action.payload.item.toLowerCase());
        case NOREPEAT:
            return state = false;
        default:
            return state;
    }
}

const actionIsRepeat = (items, item) => ({
    type: ISREPEAT,
    payload: {
        items,
        item,
    }
});

const actionNoRepeat = () => ({
    type: NOREPEAT,
})

export {
    uiReducer as default,
    actionIsRepeat,
    actionNoRepeat,
}