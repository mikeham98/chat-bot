import React from 'react';
import styles from '../../../themes/components/conversations.scss';

const Conversation = (props) => {
    return (
        <div onClick={props.onClick} className={styles.conversationWrapper}>
            <img src={props.image}/>
            <span>{props.name}</span>
        </div>
    );
};

export default React.memo(Conversation);