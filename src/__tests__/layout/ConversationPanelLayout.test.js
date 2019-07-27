import React from 'react';
import {shallow} from 'enzyme';
import ConversationPanelLayout from '../../app/layout/ConversationPanelLayout';

describe('ConversationPanelLayout', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ConversationPanelLayout {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {};
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a lazy component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
});