import React, {Suspense} from 'react';
import MessageFormContainer from '../containers/Toolbar/Message/MessageFormContainer';
import conversationReducer from "../reducers/conversation/index.reducers";
import store from "../store";
import styles from '../../themes/components/layout.scss';

const MessagesListContainer = React.lazy(() =>
    import(/* webpackChunkName: "MESSAGES_LIST_CONTAINER" */ "../containers/Messages/MessageListContainer")
        .then(() => {
            store.injectReducer('conversation', conversationReducer);
            return import ("../containers/Messages/MessageListContainer");
        })
);
export default class MessagesLayout extends React.Component {
    render() {
        return (
            <div className={styles.messageLayoutWrapper}>
                <Suspense fallback={<div>Loading...</div>}>
                    <MessagesListContainer
                        currentUserId={1}
                        conversationId={'bot1'}
                    />
                    <MessageFormContainer
                        conversationId={'bot1'}
                    />
                </Suspense>
            </div>
        )
    }
}