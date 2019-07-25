import React from 'react';
import {shallow} from 'enzyme';
import ImagePreview from '../../../../app/components/ChatBot/Media/ImagePreview';

describe('ImagePreview', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ImagePreview {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            src: 'http://www.image.co.uk/img1'
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return an img tag with the src set to \'http://www.image.co.uk/img1\'', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
});