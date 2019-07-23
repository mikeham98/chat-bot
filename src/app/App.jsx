import React from 'react';
import MessagesList from "./components/common/Messages/MessagesList";
import messagesJSON from "../../json/messages.json";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <MessagesList
                    messages={messagesJSON}
                />
            </div>
        );
    }
}