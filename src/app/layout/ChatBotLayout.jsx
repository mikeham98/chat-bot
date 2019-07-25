import React, {Suspense} from 'react';
import styles from '../../themes/components/layout.scss';
import Spinner from "../components/common/Spinner";
import store from "../store";
import messagesReducer from "../reducers/messages/index.reducers";

const ChatBotContainer = React.lazy(() =>
    import(/* webpackChunkName: "MESSAGES_LIST_CONTAINER" */ "../containers/ChatBot/index")
        .then(() => {
            store.injectReducer('messages', messagesReducer);
            return import ("../containers/ChatBot/index");
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
                <ChatBotContainer/>
            </Suspense>
        )
    }
}