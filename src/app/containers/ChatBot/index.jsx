import React from 'react';
import {connect} from 'react-redux';
import {getMessages} from "../../actions/messages/index.actions";
import {sendMessage} from "../../actions/toolbar/index.actions";
import ChatBot from "../../components/ChatBot";

class ChatBotContainer extends React.Component {
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
        const {messages, replying, currentUserId} = this.props;
        return (
            <ChatBot
                messages={messages}
                replying={replying}
                currentUserId={currentUserId}
                sendMessage={this.sendMessage}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        replying: state.messages.replying,
        messages: state.messages.messages,
        currentConversationId: state.conversations.currentConversationId
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