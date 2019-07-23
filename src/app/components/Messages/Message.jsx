import React from 'react';
import styles from '../../../themes/messages.scss';

const Message = ({body, dateTime}) => {
    return (
        <div className={styles.message} data-tip={dateTime}>
            {body}
        </div>
    );
};

export default React.memo(Message);