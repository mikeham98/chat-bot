import React from 'react';
import {shallow} from 'enzyme';
import Media from '../../../../app/components/ChatBot/Media/Media';
import {gif, img, link} from "../../../../app/config/media.config";

describe('Media', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<Media {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            media
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return two ImagePreview components (gif and img) and a LinkPreview component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return 3 media components even though a 4th has been added but with a unknown type', () => {
            const nullMedia = {
                id: 4,
                type: 'random',
                src: 'https://images.unsplash.com/image.jpg'
            };
            props.media = [...media, nullMedia];
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return an empty div when there is no media', () => {
            props.media = [];
            expect(wrapper()).toMatchSnapshot();
        });
    });
});

const media = [{
    id: 1,
    type: link,
    imagePreview: 'https://images8.alphacoders.com/374/374852.jpg',
    title: 'How (and Why) SpaceX Will Colonize Mars',
    description: 'A brief insight to how and why SpaceX will Colonize Mars',
    src: 'https://waitbutwhy.com/2015/08/how-and-why-spacex-will-colonize-mars.html'
}, {
    id: 2,
    type: gif,
    src: 'https://media.giphy.com/media/1108D2tVaUN3eo/giphy.gif'
}, {
    id: 3,
    type: img,
    src: 'https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1028&q=80'
}];