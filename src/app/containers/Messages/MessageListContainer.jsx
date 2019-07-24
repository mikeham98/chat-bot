import React from 'react';
import {connect} from 'react-redux';
import MessagesList from "../../components/Messages/MessagesList";
import {getMessages} from "../../actions/messages/index.actions";

export class MessageListContainer extends React.Component{
    componentDidMount() {
        this.props.getMessages();
    }

    render() {
        const {messages, replying, currentUserId} = this.props;
        return (
            <MessagesList
                messages={messages}
                replying={replying}
                currentUserId={currentUserId}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        replying: state.conversation.replying,
        messages: state.conversation.messages
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMessages: () => {
            dispatch(getMessages(ownProps.conversationId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);