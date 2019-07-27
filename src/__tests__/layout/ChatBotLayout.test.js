import React from 'react';
import {shallow} from 'enzyme';
import ChatBotLayout from '../../app/layout/ChatBotLayout';

describe('ChatBotLayout', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ChatBotLayout {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {};
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return 2 lazy components (HeaderContainer and ChatBotContainer)', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
});