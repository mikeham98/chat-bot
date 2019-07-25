import React from 'react';
import {connect} from 'react-redux';

export class HeaderContainer extends React.PureComponent {
    render() {
        const {name} = this.props;
        return (
            <div>
                <h2>{name}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let conversations = state.conversations.conversations;
    const currentConversation = conversations.find(conversation => conversation.id === state.conversations.currentConversationId);
    return {
        name: currentConversation && currentConversation.profile.name
    }
};

export default connect(mapStateToProps)(HeaderContainer)