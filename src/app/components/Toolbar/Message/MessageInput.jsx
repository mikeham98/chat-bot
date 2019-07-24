import React from 'react';
import styles from '../../../../themes/toolbar.scss';

const MessageInput = ({value, onChange, onBlur}) => {
    return (
        <input
            name={'message'}
            placeholder={'Type a message...'}
            type={'text'}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={styles.messageInputWrapper}
        />
    );
};

export default React.memo(MessageInput);