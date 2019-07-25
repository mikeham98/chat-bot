import React from 'react';
import {shallow} from 'enzyme';
import Conversation from '../../../app/components/Conversations/Conversation'

describe('Conversation', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<Conversation {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            selected: false,
            image: 'http://www.image.co.uk/img1',
            name: 'John Smith'
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a div with an image and a name', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a div with a className of conversationWrapper and conversationSelected', () => {
            props.selected = true;
            expect(wrapper()).toMatchSnapshot();
        });
    });
});
