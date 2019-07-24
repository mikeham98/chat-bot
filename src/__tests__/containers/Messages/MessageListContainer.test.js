import React from 'react';
import {shallow} from 'enzyme';
import {MessageListContainer} from '../../../app/containers/Messages/MessageListContainer';

describe('MessageListContainer', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<MessageListContainer {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            getConversationMessages: jest.fn(),
            messages: [1, 2, 3, 4, 5],
            replying: true,
            currentUserId: 1
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should render MessageList component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        it('should call getConversationMessages on mount', () => {
            expect(props.getConversationMessages).not.toHaveBeenCalled();
            wrapper();
            expect(props.getConversationMessages).toHaveBeenCalledTimes(1);
        });
    });
});