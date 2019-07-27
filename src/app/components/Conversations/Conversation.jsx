import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../../themes/components/conversations.scss';

export default class Conversation extends React.PureComponent {
    returnClassNames() {
        const {selected, unread} = this.props;
        const classNames = [styles.conversationWrapper];
        if (selected) {
            classNames.push(styles.conversationSelected);
        }
        if (unread) {
            classNames.push(styles.conversationUnread);
        }
        return classnames(classNames);
    }

    render() {
        const {onClick, image, name, previewMessage} = this.props;
        return (
            <div onClick={onClick} className={this.returnClassNames()}>
                <img src={image}/>
                <div className={styles.conversationPreview}>
                    <span className={styles.conversationPreviewName}>{name}</span>
                    {previewMessage &&
                    <span className={styles.conversationPreviewMessage}>{previewMessage}</span>}
                </div>
            </div>
        );
    }
};

Conversation.defaultProps = {
    previewMessage: ''
};

Conversation.propTypes = {
    selected: PropTypes.bool,
    unread: PropTypes.bool,
    onClick: PropTypes.func,
    previewMessage: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
};