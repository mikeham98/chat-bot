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
            getMessages: jest.fn(),
            messages: [1, 2, 3, 4, 5],
            replying: true,
            currentUserId: 1
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return MessageList component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        it('should call getMessages on mount', () => {
            expect(props.getMessages).not.toHaveBeenCalled();
            wrapper();
            expect(props.getMessages).toHaveBeenCalledTimes(1);
        });
    });
});