import React from 'react';
import {connect} from 'react-redux';
import {currentUser} from '../../../../db/config';
import {getMessages, setOption} from "../../actions/chatBot/messages/index.actions";
import {sendMessage} from "../../actions/chatBot/toolbar/index.actions";
import ChatBot from "../../components/ChatBot";

export class ChatBotContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getMessages = this.getMessages.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.setOption = this.setOption.bind(this);
    }

    componentDidMount() {
        this.getMessages();
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentConversationId !== prevProps.currentConversationId) {
            this.getMessages();
        }
    }

    getMessages() {
        this.props.getMessages(this.props.currentConversationId);
    }

    sendMessage(message, callback) {
        const {currentConversationId} = this.props;
        this.props.sendMessage(currentConversationId, message, callback);
    }

    setOption(optionId, messageId) {
        setOption(optionId, messageId, this.getMessages, this.props.currentConversationId)
    }

    render() {
        const {messages, replying, botName, currentUserId} = this.props;
        return (
            <ChatBot
                messages={messages}
                botName={botName}
                replying={replying}
                currentUserId={currentUserId}
                sendMessage={this.sendMessage}
                onClickOption={this.setOption}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const currentConversationId = state.conversations.currentConversationId;

    const currentConversation = state.conversations.conversations.find(e => e.id === currentConversationId);
    const replying = !!state.messages.replying.find(e => e === currentConversationId);

    return {
        currentUserId: currentUser.userId,
        replying,
        messages: state.messages.messages,
        currentConversationId,
        botName: currentConversation && currentConversation.profile.name
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (conversationId) => {
            dispatch(getMessages(conversationId))
        },
        sendMessage: (conversationId, message, callback) => {
            dispatch(sendMessage(conversationId, message, callback))
        },
        setOption: (optionId, messageId, callback, conversationId) => {
            // conversation id is passed in so that the application can get the next message
            dispatch(setOption(optionId, messageId, callback, conversationId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBotContainer);