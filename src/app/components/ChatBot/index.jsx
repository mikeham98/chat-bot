import React from 'react';
import PropTypes from "prop-types";
import styles from '../../../themes/components/chatBot.scss'
import MessagesList from "./MessagesList";
import MessageForm from "./Toolbar/MessageForm";
import {MessagesPropTypes} from "../../config/propTypes";

const ChatBot = ({messages, replying, currentUserId, color, botName, sendMessage, onClickOption}) => {
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
    );
};

ChatBot.defaultProps = {
    botName: ''
};

ChatBot.propTypes = {
    messages: MessagesPropTypes,
    replying: PropTypes.bool,
    currentUserId: PropTypes.number,
    color: PropTypes.string,
    botName: PropTypes.string,
    sendMessage: PropTypes.func.isRequired,
    onClickOption: PropTypes.func.isRequired,
};

export default React.memo(ChatBot);