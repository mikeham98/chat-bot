import React from 'react';
import {shallow} from 'enzyme';
import Message from '../../../app/components/Messages/Message';

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
            dateTime: '10 minutes ago'
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should render a message body along with a data-tip', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
});