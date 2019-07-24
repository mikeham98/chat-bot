import React from 'react';
import styles from '../../../themes/components/messages.scss';

const Message = ({body, dateTime, showDateTime}) => {
    return (
        <div className={styles.messageContent}>
            <div className={styles.message}>
                {body}
            </div>
            {showDateTime && <span className={styles.messageCreatedAt}>{dateTime}</span>}
        </div>
    );
};

export default React.memo(Message);