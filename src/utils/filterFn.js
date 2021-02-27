
const COMPLETED = 'completed';
const PENDING = 'pending';

const filterFn = (todos, type) => {
    switch(type) {
        case COMPLETED:
            return todos.filter(todo => todo.selected);
        case PENDING:
            return todos.filter(todo => !todo.selected);
        default:
            return todos;
    }
}

export default filterFn;