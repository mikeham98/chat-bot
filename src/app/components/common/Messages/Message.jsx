import React from 'react';
import styles from '../../../../themes/messages.scss';

const Message = ({body}) => {
    return (
        <div className={styles.message}>
            {body}
        </div>
    );
};

export default React.memo(Message);