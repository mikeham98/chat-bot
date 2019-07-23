import React, {Suspense} from 'react';
import ReactTooltip from 'react-tooltip';
import store from "./store";
import conversationReducer from "./reducers/conversation/index.reducers";

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
                    />
                </Suspense>
                <ReactTooltip
                    place="bottom"
                    delayShow={800}
                    type="dark"
                    effect="solid"
                />
            </div>
        );
    }
}