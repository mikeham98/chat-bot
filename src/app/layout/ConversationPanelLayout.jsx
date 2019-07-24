import React, {Suspense} from 'react';
import SideBar from "../components/common/SideBar";
import conversationsReducer from "../reducers/conversations/index.reducers";
import store from "../store";

const ConversationsListContainer = React.lazy(() =>
    import(/* webpackChunkName: "CONVERSATIONS_LIST_CONTAINER" */ "../containers/Conversations/ConversationsListContainer")
        .then(() => {
            store.injectReducer('conversations', conversationsReducer);
            return import ("../containers/Conversations/ConversationsListContainer");
        })
);
export default class ConversationPanelLayout extends React.Component {
    render() {
        return (
            <SideBar title='Messages'>
                <Suspense fallback={<div>Loading...</div>}>
                    <ConversationsListContainer/>
                </Suspense>
            </SideBar>
        )
    }
}