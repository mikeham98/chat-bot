import React from 'react';
import PropTypes from "prop-types";
import styles from '../../../../themes/components/toolbar.scss';

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

MessageInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
};

export default React.memo(MessageInput);