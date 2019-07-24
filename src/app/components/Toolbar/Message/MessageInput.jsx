import React from 'react';
import classnames from 'classnames';
import styles from '../../../../themes/toolbar.scss';

class MessageInput extends React.PureComponent {
    displayError() {
        const {error, touched} = this.props;
        return error && touched;
    };

    returnClassName() {
        const classNames = [styles.messageInputWrapper];
        if (this.displayError()) {
            classNames.push(styles.messageInputError);
        }
        return classnames(classNames);
    }

    render() {
        const {value, onChange, onBlur} = this.props;
        return (
            <input
                id={'message'}
                name={'message'}
                placeholder={'Type a message...'}
                type={'text'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={this.returnClassName()}
            />
        );
    }
}

export default MessageInput;