import React from 'react';
import {shallow} from 'enzyme';
import ColorIcon from '../../../../app/components/common/ColorPicker/ColorIcon';

describe('ColorIcon', () => {

    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ColorIcon {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            color: '#1ccb9e',
            selected: false,
            onClick: jest.fn(),
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a div with a className of colorIconWrapper', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a div with a className of colorIconWrapper and colorIconSelected', () => {
            props.selected = true;
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('prop', () => {
            describe('onClick', () => {
                it('should be called on onClick of div', () => {
                    expect(props.onClick).not.toHaveBeenCalled();
                    wrapper().find('div').first().props().onClick();
                    expect(props.onClick).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});