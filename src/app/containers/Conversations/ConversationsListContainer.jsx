import React from 'react';
import {connect} from 'react-redux';
import ConversationsList from '../../components/Conversations/ConversationsList';
import {getConversationList, setCurrentConversation} from '../../actions/conversations/index.actions';

class ConversationsListContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClickConversation = this.onClickConversation.bind(this);
    }

    componentDidMount() {
        this.props.getConversationList();
    }

    onClickConversation(conversationId) {
        const {currentConversationId} = this.props;
        if(currentConversationId !== conversationId) {
            this.props.setCurrentConversation(conversationId);
        }
    }

    render() {
        return (
            <ConversationsList
                conversations={this.props.conversations}
                onClickConversation={this.onClickConversation}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // add in selector
    let conversations = state.conversations.conversations;
    conversations = conversations.map(conversation => {
       return {
           ...conversation,
           selected: conversation.id === state.conversations.currentConversationId
       }
    });

    return {
        conversations,
        currentConversationId: state.conversations.currentConversationId
    }
};

export default connect(mapStateToProps, {getConversationList, setCurrentConversation})(ConversationsListContainer)