import React from 'react';
import classnames from 'classnames';
import styles from '../../../themes/components/conversations.scss';

const Conversation = (props) => {
    const returnClassNames = () => {
        const classNames = [styles.conversationWrapper];
        if(props.selected) {
            classNames.push(styles.conversationSelected);
        }
        return classnames(classNames);
    };
    return (
        <div onClick={props.onClick} className={returnClassNames()}>
            <img src={props.image}/>
            <span>{props.name}</span>
        </div>
    );
};

export default React.memo(Conversation);