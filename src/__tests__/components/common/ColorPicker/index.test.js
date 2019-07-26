import React from 'react';
import {shallow} from 'enzyme';
import ColorPicker from '../../../../app/components/common/ColorPicker/index';
import ColorIcon from '../../../../app/components/common/ColorPicker/ColorIcon';

jest.mock('../../../../app/config/colours.config', () => ({
    flatColours: ['red', 'orange', 'yellow','green']
}));

describe('ColorPicker', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ColorPicker {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            color: 'orange',
            onChange: jest.fn(),
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return four ColorIcon components with the orange ColorIcon selected', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('prop', () => {
            describe('onChange', () => {
                it('should be called on with yellow onClick of the orange ColorIcon', () => {
                    expect(props.onChange).not.toHaveBeenCalled();
                    wrapper().find(ColorIcon).at(2).props().onClick();
                    expect(props.onChange).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});