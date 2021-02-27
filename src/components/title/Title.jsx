import React from 'react';
import styles from './title.module.css';

const Title = ({text}) => {
    return (
        <h1 className={styles.title}>{text}</h1>
    )
}

Title.defaultProps = {
    text: 'To-do list'
}

export default Title;