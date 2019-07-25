import React from 'react';
import {connect} from 'react-redux';
import {currentUser} from '../../../../db/config';
import {getMessages} from "../../actions/chatBot/messages/index.actions";
import {sendMessage} from "../../actions/chatBot/toolbar/index.actions";
import ChatBot from "../../components/ChatBot";

export class ChatBotContainer extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        this.getMessages();
    }

    componentDidUpdate(prevProps) {
        if(this.props.currentConversationId !== prevProps.currentConversationId) {
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

    render() {
        const {messages, replying, botName, currentUserId} = this.props;
        return (
            <ChatBot
                messages={messages}
                botName={botName}
                replying={replying}
                currentUserId={currentUserId}
                sendMessage={this.sendMessage}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const currentConversationId = state.conversations.currentConversationId;

    const currentConversation = state.conversations.conversations.find(e => e.id === currentConversationId);
    return {
        currentUserId: currentUser.userId,
        replying: state.messages.replying,
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBotContainer);