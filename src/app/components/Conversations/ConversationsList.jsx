import React from 'react';
import PropTypes from 'prop-types';
import Conversation from "./Conversation";
import isPopulatedArray from "../../util/isPopulatedArray";
import styles from "../../../themes/components/conversations.scss";
import {ConversationsPropTypes} from "../../config/propTypes";

export default class ConversationsList extends React.PureComponent {
    returnConversations() {
        const {conversations} = this.props;
        if (isPopulatedArray(conversations)) {
            return conversations.map(conversation => {
                return (
                    <Conversation
                        key={conversation.id}
                        unread={typeof conversation.read === 'boolean' && !conversation.read}
                        previewMessage={conversation.latest ? conversation.latest.message : ''}
                        selected={conversation.selected}
                        name={conversation.profile.name}
                        image={conversation.profile.img}
                        onClick={() => this.props.onClickConversation(conversation.id)}
                    />
                );
            });
        }
    }

    render() {
        return (
            <div className={styles.conversationListWrapper}>
                {this.returnConversations()}
            </div>
        )
    }
}

ConversationsList.propTypes = {
    conversations: ConversationsPropTypes,
    onClickConversation: PropTypes.func.isRequired,
};