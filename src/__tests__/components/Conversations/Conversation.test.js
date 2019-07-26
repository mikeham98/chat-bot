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
            unread: true,
            onClick: jest.fn(),
            previewMessage: 'Hello world',
            image: 'http://www.image.co.uk/image.jpg',
            name: 'I am a bot',
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a div with an image, a name and a preview message', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a div with an image, a name but not a preview message', () => {
            props.previewMessage = '';
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a div with a className of conversationWrapper and conversationSelected', () => {
            props.selected = true;
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('props', () => {
            describe('onClick', () => {
                it('should be called on onClick on div', () => {
                    expect(props.onClick).not.toHaveBeenCalled();
                    wrapper().find('div').first().props().onClick();
                    expect(props.onClick).toHaveBeenCalled();
                });
            });
        });
    });
});
