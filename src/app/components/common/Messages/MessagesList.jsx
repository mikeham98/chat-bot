import React from 'react';
import styles from '../../../../themes/messages.scss';
import isPopulatedArray from "../../../util/isPopulatedArray";
import Message from "./Message";
import {left, right} from "../../../config/messages.config";

export default class MessagesList extends React.PureComponent {
    returnMessages() {
        const {messages, currentUserId} = this.props;
        if (isPopulatedArray(messages)) {
            return messages.map(message => {
                const position = currentUserId === message.createdBy.userId ? right : left;
                return (
                    <div style={{alignSelf: position === left ? 'flex-start' :'flex-end'}}>
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