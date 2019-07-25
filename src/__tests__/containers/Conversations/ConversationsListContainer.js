import React from 'react';
import {shallow} from 'enzyme';
import {ConversationsListContainer} from '../../../app/containers/Conversations/ConversationsListContainer';
import ConversationsList from '../../../app/components/Conversations/ConversationsList';

describe('ConversationsListContainer', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ConversationsListContainer {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            getConversationList: jest.fn(),
            setCurrentConversation: jest.fn(),
            currentConversationId: 3,
            conversations: [1, 2, 3]
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return ConversationsList component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('props', () => {
            describe('getConversationList', () => {
                it('should be called on mount', () => {
                    expect(props.getConversationList).not.toHaveBeenCalled();
                    wrapper();
                    expect(props.getConversationList).toHaveBeenCalledTimes(1);
                });
            });
            describe('setCurrentConversation', () => {
                it('should be called on call of prop onClickConversation on ConversationList', () => {
                    expect(props.setCurrentConversation).not.toHaveBeenCalled();
                    wrapper().find(ConversationsList).first().props().onClickConversation(2);
                    expect(props.setCurrentConversation).toHaveBeenCalledWith(2);
                });
                it('should not be called on call of prop onClickConversation on ConversationList ' +
                    'due to matching conversationId', () => {
                    expect(props.setCurrentConversation).not.toHaveBeenCalled();
                    wrapper().find(ConversationsList).first().props().onClickConversation(3);
                    expect(props.setCurrentConversation).not.toHaveBeenCalled();
                });
            });
        });
    });
});