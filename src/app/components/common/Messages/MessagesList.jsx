import React from 'react';
import isPopulatedArray from "../../../util/isPopulatedArray";
import Message from "./Message";

export default class MessagesList extends React.PureComponent {
    returnMessages() {
        const {messages} = this.props;
        if(isPopulatedArray(messages)) {
            return messages.map(message => {
                return (
                    <Message
                        body={message.body}
                    />
                );
            })
        }
    }

    render() {
        return (
            <div>
                {this.returnMessages()}
            </div>
        )
    }
}