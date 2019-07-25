import React, {Suspense} from 'react';
import SideBar from "../components/common/SideBar";
import Spinner from "../components/common/Spinner";
import store from "../store";
import conversationsReducer from "../reducers/conversations/index.reducers";

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
                <Suspense fallback={<Spinner/>}>
                    <ConversationsListContainer/>
                </Suspense>
            </SideBar>
        )
    }
}