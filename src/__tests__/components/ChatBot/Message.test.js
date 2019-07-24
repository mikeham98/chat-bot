import React from 'react';
import {shallow} from 'enzyme';
import Message from '../../../app/components/ChatBot/Message';

describe('Message', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if(!shallowedWrapper) {
            shallowedWrapper = shallow(<Message {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            body: 'Hello world',
            dateTime: '10 minutes ago',
            showDateTime: false
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a message body', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a message body along with showDateTime', () => {
            wrapper().setProps({
                showDateTime: true
            });
            expect(wrapper()).toMatchSnapshot();
        });
    });
});