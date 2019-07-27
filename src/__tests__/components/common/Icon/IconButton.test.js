import React from 'react';
import {shallow} from 'enzyme';
import IconButton from '../../../../app/components/common/Icon/IconButton';

describe('IconButton', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<IconButton {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            onClick: jest.fn(),
            type: 'text',
            icon: 'I am an icon',
            style: {
                margin: '10px',
                padding: '10px'
            },
            color: 'red',
            hoverColor: 'blue',
            height: '20px',
            width: '20px',
            disabled: true
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a button with an Icon component as a child', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        describe('props', () => {
            describe('onClick', () => {
                it('should be called onClick of button', () => {
                    expect(props.onClick).not.toHaveBeenCalled();
                    wrapper().find('button').first().props().onClick();
                    expect(props.onClick).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});