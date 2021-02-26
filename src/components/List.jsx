import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionAdd } from '../reducers/listReducer';

const List = () => {

    const state = useSelector(state => state.list);
    console.log('list',state);
    const dispatch = useDispatch();

    const item = {
        id: 223,
        value: 'esto',
        selected: false
    }

    const handleAdd = () => {
        dispatch(actionAdd(item.id, item.value, item.selected,));
    }
 
    return(
        <ul className="">
        {state.map((item) => {
            const { value, selected } = item;
            return <p key={value}>{value} {JSON.stringify(selected)}</p>
            }
        )}
        <button onClick={handleAdd}>Dispatch</button>
        </ul>
    )
}

export default List;