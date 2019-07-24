import React, {Suspense} from 'react';
import store from "./store";
import conversationReducer from "./reducers/conversation/index.reducers";
import MessageFormContainer from './containers/Toolbar/Message/MessageFormContainer';

const MessagesListContainer = React.lazy(() =>
    import(/* webpackChunkName: "MESSAGES_LIST_CONTAINER" */ "./containers/Messages/MessageListContainer")
        .then(() => {
            store.injectReducer('conversation', conversationReducer);
            return import ("./containers/Messages/MessageListContainer");
        })
);

export default class App extends React.Component {
    render() {
        return (
            <div>
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
        );
    }
}