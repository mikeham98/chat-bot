import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../../themes/components/conversations.scss';

const Conversation = (props) => {
    const returnClassNames = () => {
        const classNames = [styles.conversationWrapper];
        if(props.selected) {
            classNames.push(styles.conversationSelected);
        }
        if(props.unread) {
            classNames.push(styles.conversationUnread);
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

Conversation.propTypes = {
    selected: PropTypes.bool,
    unread: PropTypes.bool,
    onClick: PropTypes.func,
    image: PropTypes.string,
    name: PropTypes.string,
};

export default React.memo(Conversation);