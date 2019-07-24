import React, {Suspense} from 'react';
import messagesReducer from "../reducers/messages/index.reducers";
import store from "../store";
import styles from '../../themes/components/layout.scss';

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
            <Suspense fallback={<div>Loading...</div>}>
                    <ChatBotContainer/>
            </Suspense>
        )
    }
}