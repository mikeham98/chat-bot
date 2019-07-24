import React from 'react';
import {shallow} from 'enzyme';
import Icon from '../../../../app/components/common/Icon/index';

describe('Icon', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<Icon {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            IconComponent: () => <div>IconComponent</div>,
            color: 'red',
            hoverColor: 'blue',
            height: '20px',
            width: '20px'
        };
        shallowedWrapper = undefined;
    });
    describe('render', () => {
        it('should return IconComponent', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        describe('fill color', () => {
            it('should be red', () => {
                expect(wrapper().find('IconComponent').first().props().fill).toBe('red');
            });
            it('should change from red to blue (on mouse enter) and back to red (on mouse leave)', () => {
                expect(wrapper().find('IconComponent').first().props().fill).toBe('red');
                wrapper().find('IconComponent').first().props().onMouseEnter();
                expect(wrapper().find('IconComponent').first().props().fill).toBe('blue');
                wrapper().find('IconComponent').first().props().onMouseLeave();
                expect(wrapper().find('IconComponent').first().props().fill).toBe('red');
            });
        });
    });
});

Icon.defaultProps = {
    height: '40px',
    width: '40px'
};