import React from 'react';
import ReactTooltip from 'react-tooltip';
import MessagesList from "./components/common/Messages/MessagesList";
import messagesJSON from "../../json/messages.json";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <MessagesList
                    currentUserId={1}
                    messages={messagesJSON}
                />
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