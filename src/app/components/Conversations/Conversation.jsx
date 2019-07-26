import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../../themes/components/conversations.scss';

const Conversation = (props) => {
    const returnClassNames = () => {
        const classNames = [styles.conversationWrapper];
        if (props.selected) {
            classNames.push(styles.conversationSelected);
        }
        if (props.unread) {
            classNames.push(styles.conversationUnread);
        }
        return classnames(classNames);
    };
    return (
        <div onClick={props.onClick} className={returnClassNames()}>
            <img src={props.image}/>
            <div className={styles.conversationPreview}>
                <span className={styles.conversationPreviewName}>{props.name}</span>
                {props.previewMessage &&
                <span className={styles.conversationPreviewMessage}>{props.previewMessage}</span>}
            </div>
        </div>
    );
};

Conversation.propTypes = {
    selected: PropTypes.bool,
    unread: PropTypes.bool,
    onClick: PropTypes.func,
    previewMessage: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
};

export default React.memo(Conversation);