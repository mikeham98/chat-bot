import React from 'react';
import {shallow} from 'enzyme';
import Spinner from '../../../app/components/common/Spinner'

describe('Spinner', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<Spinner {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {};
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a div with a className prop set to spinner', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
});