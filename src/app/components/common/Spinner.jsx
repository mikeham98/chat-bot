import React from 'react';
import styles from '../../../themes/components/spinner.scss';

const Spinner = () => {
    return (
        <div className={styles.spinner}/>
    )
};

export default React.memo(Spinner);