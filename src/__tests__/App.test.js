import React from 'react';
import {shallow} from 'enzyme';
import App from '../app/App';

describe('App', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<App {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {};
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a ThemeContainer, ConversationPanelLayout and ChatBotLayout', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
});