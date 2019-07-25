import React from 'react';
import ChatBotLayout from "./layout/ChatBotLayout";
import ConversationPanelLayout from "./layout/ConversationPanelLayout";
import styles from '../themes/components/layout.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.chatBotContainer}>
                <div className={styles.chatBotWrapper}>
                    <ConversationPanelLayout/>
                    <div className={styles.messageSection}>
                        <ChatBotLayout/>
                    </div>
                </div>
            </div>
        );
    }
}