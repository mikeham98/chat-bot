import React, {Suspense} from 'react';
import styles from '../../themes/components/layout.scss';
import Spinner from "../components/common/Spinner";
import store from "../store";
import messagesReducer from "../reducers/messages/index.reducers";
import conversationsReducer from "../reducers/conversations/index.reducers";

const ChatBotContainer = React.lazy(() =>
    import(/* webpackChunkName: "CHAT_BOT_CONTAINER" */ "../containers/ChatBot/index")
        .then(() => {
            store.injectReducer('messages', messagesReducer);
            return import ("../containers/ChatBot/index");
        })
);

const HeaderContainer = React.lazy(() =>
    import(/* webpackChunkName: "HEADER_CONTAINER" */ "../containers/Header/HeaderContainer")
        .then(() => {
            store.injectReducer('conversations', conversationsReducer);
            return import ("../containers/Header/HeaderContainer");
        })
);

export default class ChatBotLayout extends React.Component {
    render() {
        return (
            <Suspense fallback={(
                <div className={styles.centerChatBotSpinner}>
                    <Spinner/>
                </div>
            )}>
                <div className={styles.headerLayout}>
                    <HeaderContainer/>
                </div>
                <ChatBotContainer/>
            </Suspense>
        )
    }
}
