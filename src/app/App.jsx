import React from 'react';
import ThemeContainer from "./containers/Theme/ThemeContainer";
import ChatBotLayout from "./layout/ChatBotLayout";
import ConversationPanelLayout from "./layout/ConversationPanelLayout";
import styles from '../themes/components/layout.scss';

export default class App extends React.Component {
    render() {
        return (
            <ThemeContainer>
                <div className={styles.chatBotContainer}>
                    <div className={styles.chatBotWrapper}>
                        <ConversationPanelLayout/>
                        <div className={styles.messageSection}>
                            <ChatBotLayout/>
                        </div>
                    </div>
                </div>
            </ThemeContainer>
        );
    }
}