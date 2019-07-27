import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ConversationsList from '../../components/Conversations/ConversationsList';
import {getConversationList, setCurrentConversation} from '../../actions/conversations/index.actions';
import {conversationSelector} from '../../selectors/conversationSelector';
import {ConversationsPropTypes} from "../../config/propTypes";

export class ConversationsListContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClickConversation = this.onClickConversation.bind(this);
    }

    componentDidMount() {
        this.props.getConversationList();
        // update backend to so that read is true on the initial load
        // (because the conversation selected by default is the first one)
        this.props.setCurrentConversation('1');
    }

    onClickConversation(conversationId) {
        const {id} = this.props.currentConversation;
        if (id !== conversationId) {
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

ConversationsListContainer.propTypes = {
    conversations: ConversationsPropTypes,
    getConversationList: PropTypes.func.isRequired,
    setCurrentConversation: PropTypes.func.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = (state) => {
    return conversationSelector(state);
};

export default connect(mapStateToProps, {getConversationList, setCurrentConversation})(ConversationsListContainer)