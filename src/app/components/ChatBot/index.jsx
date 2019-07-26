import React from 'react';
import styles from '../../../themes/components/chatBot.scss'
import MessagesList from "./MessagesList";
import MessageForm from "./Toolbar/MessageForm";

export default class ChatBot extends React.Component {
    render() {
        const {messages, replying, currentUserId, color, botName, sendMessage, onClickOption} = this.props;
        return (
            <div className={styles.chatBot}>
                <MessagesList
                    messages={messages}
                    replying={replying}
                    color={color}
                    botName={botName}
                    currentUserId={currentUserId}
                    onClickOption={onClickOption}
                />
                <MessageForm
                    sendMessage={sendMessage}
                />
            </div>
        )
    }
}