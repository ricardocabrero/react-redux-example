import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css'

const Filter = ({stateFilter, setStateFilter}) => {

    const text = ['completed', 'pending', 'all'];

    const handleClick = (param) => (e) => {
        setStateFilter(state => param);
    }

    return (
        <div className={styles.btns}>
            {text.map(text => 
            <button
            onClick={handleClick(text)}
            disabled={stateFilter === text}
            key={text}>{text}</button>
            )}
        </div>
    )
}

Filter.propTypes = {
    stateFilter: PropTypes.string.isRequired, 
    setStateFilter: PropTypes.func.isRequired,
}

export default Filter;