import React from 'react';
import {shallow} from 'enzyme';
import {ThemeContainer} from '../../../app/containers/Theme/ThemeContainer';
import {lightTheme, darkTheme} from '../../../app/config/theme.config';

describe('ThemeContainer', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<ThemeContainer {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            theme: lightTheme,
            children: <div>Children</div>
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a light theme (empty class name) with a div with text of Children', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a dark theme with a div with text of Children', () => {
            props.theme = darkTheme;
            expect(wrapper()).toMatchSnapshot();
        });
    });
});