import React from 'react';
import styles from '../../../themes/messages.scss';

const Message = ({body, dateTime}) => {
    return (
        <React.Fragment>
            <div className={styles.message}>
                {body}
            </div>
            <span className={styles.messageCreatedAt}>{dateTime}</span>
        </React.Fragment>
    );
};

export default React.memo(Message);