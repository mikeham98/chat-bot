import React from 'react';
import {mount} from 'enzyme';
import MessagesList from '../../../app/components/ChatBot/MessagesList';
import Message from '../../../app/components/ChatBot/Message';

// formatDateTime has been mocked out due to the nature of re-running tests in the future and the current date changing.
jest.mock('../../../app/util/formatDateTime.js', () => ({
    __esModule: true,
    default: () => '10:30 am'
}));

describe('MessagesList', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = mount(<MessagesList {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            messages,
            replying: false,
            currentUserId: 1,
            selectedOption: 2,
            onClickOption: jest.fn()
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a list of messages', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return no messages', () => {
            props.messages = [];
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return ChatBot is replying... text', () => {
            expect(wrapper().find('.replyInProgress')).toHaveLength(0);
            wrapper().setProps({
                replying: true
            });
            expect(wrapper().find('.replyInProgress')).toHaveLength(1);
        });
    });

    describe('functionality', () => {
        describe('scrollToBottom', () => {
            beforeEach(() => {
                jest.spyOn(MessagesList.prototype, 'scrollToBottom');
            });

            afterEach(() => {
                jest.clearAllMocks();
            });

            it('should be called on mount', () => {
                expect(MessagesList.prototype.scrollToBottom).not.toHaveBeenCalled();
                // calling wrapper mounts the component
                wrapper();
                expect(MessagesList.prototype.scrollToBottom).toHaveBeenCalledTimes(1);
            });
            it('should not be called on update (unchanged props)', () => {
                expect(MessagesList.prototype.scrollToBottom).not.toHaveBeenCalled();
                wrapper();
                // clear the spyOn scrollToBottom which is called on mount
                jest.clearAllMocks();
                wrapper().update();
                expect(MessagesList.prototype.scrollToBottom).not.toHaveBeenCalled();
            });
            it('should not be called on update of random prop being passed in', () => {
                expect(MessagesList.prototype.scrollToBottom).not.toHaveBeenCalled();
                wrapper();
                // clear the spyOn scrollToBottom which is called on mount
                jest.clearAllMocks();
                // re-render with new prop
                wrapper().setProps({
                    foo: 'bar'
                });
                expect(MessagesList.prototype.scrollToBottom).not.toHaveBeenCalled();
            });
            it('should be called on change of replying prop from false to true', () => {
                expect(MessagesList.prototype.scrollToBottom).not.toHaveBeenCalled();
                wrapper();
                // clear the spyOn scrollToBottom which is called on mount
                jest.clearAllMocks();
                // re-render with new prop
                wrapper().setProps({
                    replying: true
                });
                expect(MessagesList.prototype.scrollToBottom).toHaveBeenCalledTimes(1);
            });
            it('should be called on change of messages prop increasing in length', () => {
                expect(MessagesList.prototype.scrollToBottom).not.toHaveBeenCalled();
                wrapper();
                // clear the spyOn scrollToBottom which is called on mount
                jest.clearAllMocks();
                // re-render with new prop
                wrapper().setProps({
                    messages: [
                        ...messages,
                        {
                            "id": 3,
                            "content": {
                                "body": "I am good thanks, how are you?"
                            },
                            "read": {
                                "status": false,
                                "timestamp": null
                            },
                            "recipient": {
                                "userId": 1,
                                "userName": "mikeham98"
                            },
                            "createdAt": "2019-07-23T12:02:30+00:00",
                            "createdBy": {
                                "userId": 100,
                                "userName": "johnSmith100"
                            }
                        }
                    ]
                });
                expect(MessagesList.prototype.scrollToBottom).toHaveBeenCalledTimes(1);
            });
        });
        describe('onClickOption', () => {
            it('should be called when calling onClickOption on Message', () => {
                expect(props.onClickOption).not.toHaveBeenCalled();
                wrapper().find(Message).at(0).props().onClickOption();
                expect(props.onClickOption).toHaveBeenCalledTimes(1);
            });
        });
        describe('showDateTime', () => {
            it('should be set to true for the first message', () => {
                expect(wrapper().find(Message).at(0).props().showDateTime).toBeFalsy();
                wrapper().find(Message).at(0).props().onClickBody();
                wrapper().update();
                expect(wrapper().find(Message).at(0).props().showDateTime).toBeTruthy();
            });
            it('should be set to true for the first message and then false on re-clicking', () => {
                expect(wrapper().find(Message).at(0).props().showDateTime).toBeFalsy();
                wrapper().find(Message).at(0).props().onClickBody();
                wrapper().update();
                expect(wrapper().find(Message).at(0).props().showDateTime).toBeTruthy();
                wrapper().find(Message).at(0).props().onClickBody();
                wrapper().update();
                expect(wrapper().find(Message).at(0).props().showDateTime).toBeFalsy();
            });
            it('should be set to true for the first message then false on click of the second' +
                ' message which now has showDateTime set to true', () => {
                expect(wrapper().find(Message).at(0).props().showDateTime).toBeFalsy();
                expect(wrapper().find(Message).at(1).props().showDateTime).toBeFalsy();
                wrapper().find(Message).at(0).props().onClickBody();
                wrapper().update();
                expect(wrapper().find(Message).at(0).props().showDateTime).toBeTruthy();
                expect(wrapper().find(Message).at(1).props().showDateTime).toBeFalsy();
                wrapper().find(Message).at(1).props().onClickBody();
                wrapper().update();
                expect(wrapper().find(Message).at(0).props().showDateTime).toBeFalsy();
                expect(wrapper().find(Message).at(1).props().showDateTime).toBeTruthy();
            });
        });
    });
});

const messages = [{
    "id": 0,
    "content": {
        "body": "Hello bot, what should I watch today",
    },
    "read": {
        "status": true,
        "timestamp": "2019-07-23T12:00:15+00:00"
    },
    "recipient": {
        "userId": 1,
        "userName": "mikeham98"
    },
    "createdAt": "2019-07-23T12:00:00+00:00",
    "createdBy": {
        "userId": 100,
        "userName": "johnSmith100"
    }
}, {
    "id": 1,
    "content": {
        "body": "Hello Mike, I have a few suggestions...",
        "options": [
            {
                "id": 1,
                "option": "Back To The Future"
            },
            {
                "id": 2,
                "option": "Stranger Things"
            }
        ]
    },
    "read": {
        "status": false,
        "timestamp": null
    },
    "recipient": {
        "userId": 100,
        "userName": "johnSmith100"
    },
    "createdAt": "2019-07-23T12:01:30+00:00",
    "createdBy": {
        "userId": 1,
        "userName": "mikeham98"
    },
    "selectedOption": 1
}];