import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getMessages, setOption} from "../../actions/chatBot/messages/index.actions";
import {sendMessage} from "../../actions/chatBot/toolbar/index.actions";
import ChatBot from "../../components/ChatBot";
import {chatBotSelector} from "../../selectors/chatBotSelector";
import {ConversationPropTypes, MessagesPropTypes} from "../../config/propTypes";

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
        if (this.props.currentConversation.id !== prevProps.currentConversation.id) {
            this.getMessages();
        }
    }

    getMessages() {
        this.props.getMessages(this.props.currentConversation.id);
    }

    sendMessage(message, callback) {
        const {id} = this.props.currentConversation;
        this.props.sendMessage(id, message, callback);
    }

    setOption(optionId, messageId) {
        const {id} = this.props.currentConversation;
        this.props.setOption(optionId, messageId, this.getMessages, id)
    }

    render() {
        const {messages, replying, currentUserId} = this.props;
        const {profile, color} = this.props.currentConversation;
        return (
            <ChatBot
                messages={messages}
                color={color}
                botName={profile && profile.name || ""}
                replying={replying}
                currentUserId={currentUserId}
                sendMessage={this.sendMessage}
                onClickOption={this.setOption}
            />
        )
    }
}

ChatBotContainer.propTypes = {
    getMessages: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    setOption: PropTypes.func.isRequired,
    messages: MessagesPropTypes,
    replying: PropTypes.bool,
    currentUserId: PropTypes.number,
    currentConversation: ConversationPropTypes,
};

const mapStateToProps = (state) => chatBotSelector(state);

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (conversationId) => {
            dispatch(getMessages(conversationId))
        },
        sendMessage: (conversationId, message, callback) => {
            dispatch(sendMessage(conversationId, message, callback))
        },
        setOption: (optionId, messageId, callback, conversationId) => {
            // conversation id is passed in so that the application can get the next message on select of the option
            dispatch(setOption(optionId, messageId, callback, conversationId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBotContainer);