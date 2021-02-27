import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { actionAdd } from '../../reducersDuck/listReducer';
import { actionIsRepeat, actionNoRepeat } from '../../reducersDuck/uiReducer';
import useForm from '../../hooks/useForm';
import styles from './form.module.css';

const Form = () => {

    const { values, handleChange, reset } = useForm({
        text: '',
    });

    const dispatch = useDispatch();

    const listState = useSelector(state => state.list);
    const uiState = useSelector(state => state.repeat);

    const handleOnInput = () => {
        dispatch(actionNoRepeat());
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const newItem = {
            description: values.text,
            id: uuidv4(),
            selected: false,
        }

        if(!values.text.trim()) {
            return;
        }

        if(listState.some(item => 
            item.description.toLowerCase() === values.text.toLowerCase())){
            dispatch(actionIsRepeat(listState, newItem.description));
            return;
        }
       
        dispatch(actionAdd(newItem.description, newItem.id, newItem.selected));
        reset();
    }

    return(
        <>
        <form 
        className={styles.form}
        onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            onInput={handleOnInput}
            autoComplete='off'
            placeholder='task...'
            id="text" 
            type="text" 
            value={values.text}/>
            <button type="submit">Add+</button>
        </form>
        {uiState && <p className={styles.message}>This item already exist</p>}
        </>
    )  
}

export default Form;