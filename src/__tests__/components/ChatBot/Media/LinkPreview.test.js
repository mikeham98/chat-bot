import React from 'react';
import {shallow} from 'enzyme';
import LinkPreview from '../../../../app/components/ChatBot/Media/LinkPreview';

describe('LinkPreview', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<LinkPreview {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            src: 'http://www.link.co.uk/article',
            title: 'An interesting Article',
            description: 'This article is very interesting...',
            image: 'http://www.link.co.uk/article.jpg',
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return an img tag and render a title and description', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('window.open', () => {
            it('should be called on click of div with the link to the article', () => {
                window.open = jest.fn();
                expect(window.open).not.toHaveBeenCalled();
                wrapper().find('div').first().props().onClick();
                expect(window.open).toHaveBeenCalledTimes(1);
                expect(window.open).toHaveBeenCalledWith('http://www.link.co.uk/article');
            });
        });
    });
});