
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionRemove, actionToggle } from '../../reducersDuck/listReducer';
import styles from './item.module.css';

const Item = ({ description, id, selected, index }) => {

    const dispatch = useDispatch();

    const handleDetele = (id) => (e) => {
        dispatch(actionRemove(id));
    }

    const handleToggle = (id) => (e) => {
        dispatch(actionToggle(id));
    }
 
    return(
        <li 
        id={id} 
        onClick={handleToggle(id)}
        className={selected ? `${styles.item} ${styles.selected}` : `${styles.item}`}>
            <span>{index + 1}.</span>
            <span className={styles.icon}></span>
            <p>
                {description}
            </p>
            <button onClick={handleDetele(id)}>Delete</button>
        </li>
    )
}

Item.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    index:PropTypes.number.isRequired,
}

export default Item;

