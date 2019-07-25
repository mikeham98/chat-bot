import React from 'react';
import classnames from 'classnames';
import styles from '../../../themes/components/messages.scss';
import isPopulatedArray from "../../util/isPopulatedArray";
import Message from "./Message";
import {left, right} from "../../config/messages.config";
import formatDateTime from "../../util/formatDateTime";

export default class MessagesList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            clickedMessageId: null
        };
        this.messageContainerRef = this.messageContainerRef.bind(this);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate(prevProps) {
        if ((this.props.replying && !prevProps.replying) || (this.props.messages.length > prevProps.messages.length)) {
            this.scrollToBottom();
        }
    }

    scrollToBottom() {
        this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    }

    returnMessageClassName(position) {
        const classNames = [styles.messageWrapper];
        if (position === right) {
            classNames.push(styles.rightMessage);
        } else {
            classNames.push(styles.leftMessage);
        }
        return classnames(classNames);
    }

    returnMessages() {
        const {messages, currentUserId} = this.props;
        if (isPopulatedArray(messages)) {
            console.log(messages);
            return messages.map(message => {
                const position = currentUserId === message.createdBy.userId ? right : left;
                // showDateTime is implemented so that only one message at a time can show the date/time
                const showDateTime = message.id === this.state.clickedMessageId;
                return (
                    <div key={message.id}
                         onClick={() => this.setState({clickedMessageId: showDateTime ? null : message.id})}
                         className={this.returnMessageClassName(position)}>
                        <Message
                            showDateTime={showDateTime}
                            dateTime={formatDateTime(message.createdAt)}
                            body={message.content.body}
                        />
                    </div>
                );
            })
        }
    }

    messageContainerRef(ref) {
        this.messageContainer = ref;
    }

    render() {
        const {replying, botName} = this.props;
        return (
            <div
                ref={this.messageContainerRef}
                className={styles.messageContainer}
            >
                {this.returnMessages()}
                {replying && <span className={styles.replyInProgress}>{botName} is replying...</span>}
            </div>
        )
    }
}