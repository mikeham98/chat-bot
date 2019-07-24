import React from 'react';
import Conversation from "./Conversation";
import isPopulatedArray from "../../util/isPopulatedArray";
import styles from "../../../themes/components/conversations.scss";

export default class ConversationsList extends React.Component {
    returnConversations() {
        const {conversations} = this.props;
        if(isPopulatedArray(conversations)) {
            return conversations.map(conversation => {
                return (
                    <Conversation
                        key={conversation.id}
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