import React from 'react';
import {connect} from 'react-redux';
import MessagesList from "../../components/Messages/MessagesList";
import {getConversationMessages} from "../../actions/conversation/index.actions";

export class MessageListContainer extends React.Component{
    componentDidMount() {
        this.props.getConversationMessages();
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

const mapStateToProps = (state, ownProps) => {
    return {
        replying: state.conversation.replying,
        messages: state.conversation.messages
    }
};

export default connect(mapStateToProps, {getConversationMessages})(MessageListContainer);