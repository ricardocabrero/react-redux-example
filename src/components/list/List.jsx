import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import filterFn from '../../utils/filterFn';
import styles from './list.module.css';
import Item from '../item/Item';

const List = ({stateFilter}) => {

    const listState = useSelector(state => state.list);
    
    localStorage.setItem('todos', JSON.stringify(listState));

    return(
        <ul className={styles.list}>
        {filterFn(listState, stateFilter).map((item, i) => {

            const { id, description, selected } = item;

            return <Item key={id} 
                    id={id}
                    description={description}
                    selected={selected}
                    index={i}/>
            }
        )}
        </ul>
    )
}

List.propTypes = {
    stateFilter: PropTypes.string.isRequired,
}

export default List;