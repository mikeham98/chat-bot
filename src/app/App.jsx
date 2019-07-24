import React from 'react';
import MessagesLayout from "./layout/MessagesLayout";
import ConversationPanelLayout from "./layout/ConversationPanelLayout";
import styles from '../themes/components/layout.scss';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.chatBotContainer}>
                    <div className={styles.chatBotWrapper}>
                        <ConversationPanelLayout/>
                        <MessagesLayout/>
                    </div>
                </div>
            </div>
        );
    }
}