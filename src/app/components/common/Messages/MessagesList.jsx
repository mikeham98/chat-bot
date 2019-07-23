import React from 'react';
import classnames from 'classnames';
import styles from '../../../../themes/messages.scss';
import isPopulatedArray from "../../../util/isPopulatedArray";
import Message from "./Message";
import {left, right} from "../../../config/messages.config";

export default class MessagesList extends React.PureComponent {
    returnMessageClassName(position) {
        const classNames = [styles.messageWrapper];
        if(position === right) {
            classNames.push(styles.rightMessage);
        }else {
            classNames.push(styles.leftMessage);
        }
        return classnames(classNames);
    }

    returnMessages() {
        const {messages, currentUserId} = this.props;
        if (isPopulatedArray(messages)) {
            return messages.map(message => {
                const position = currentUserId === message.createdBy.userId ? right : left;
                return (
                    <div className={this.returnMessageClassName(position)}>
                        <Message
                            body={message.body}
                        />
                    </div>
                );
            })
        }
    }

    render() {
        return (
            <div className={styles.messageContainer}>
                {this.returnMessages()}
            </div>
        )
    }
}