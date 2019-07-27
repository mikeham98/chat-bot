import React from 'react';
import {shallow} from 'enzyme';
import {HeaderContainer} from '../../../app/containers/Header/HeaderContainer';
import IconButton from '../../../app/components/common/Icon/IconButton';
import {darkTheme, lightTheme} from "../../../app/config/theme.config";

describe('HeaderContainer', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<HeaderContainer {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            theme: 'light',
            getTheme: jest.fn(),
            setTheme: jest.fn(),
            setColor: jest.fn(),
            currentConversation: {
                id: "3",
                userId: "bot42",
                userName: "travel_bot",
                color: "#9A58B9",
                profile: {
                    name: "TravelBot",
                    img: "https://images.unsplash.com/photo-1496046744122-2328018d60b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80"
                },
                read: true,
                latest: {
                    message: "So just to confirm, you want to go to Florida for 2 weeks from August 12th (fly out 10am) August 26 (return flight 2pm) with 3 people.",
                    createdAt: "2019-07-26T20:36:26.725Z"
                }
            },
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a light theme with a h2 with the name and a ColorIcon', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a dark theme with a h2 with the name and a ColorIcon', () => {
            props.theme = darkTheme;
            expect(wrapper()).toMatchSnapshot();
        });
        it('should return a light theme with a h2 with the name and a ColorIcon with ColorPicker component', () => {
            wrapper().find('ColorIcon').first().props().onClick();
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('props', () => {
            describe('getTheme', () => {
                it('should be called on mount', () => {
                    expect(props.getTheme).not.toHaveBeenCalled();
                    wrapper();
                    expect(props.getTheme).toHaveBeenCalledTimes(1);
                });
            });
            describe('setTheme', () => {
                it('should be called on click of IconButton and pass in dark theme', () => {
                    expect(props.setTheme).not.toHaveBeenCalled();
                    wrapper().find(IconButton).first().props().onClick();
                    expect(props.setTheme).toHaveBeenCalledWith(darkTheme);
                });
                it('should be called on click of IconButton and pass in light theme', () => {
                    props.theme = darkTheme;
                    expect(props.setTheme).not.toHaveBeenCalled();
                    wrapper().find(IconButton).first().props().onClick();
                    expect(props.setTheme).toHaveBeenCalledWith(lightTheme);
                });
                it('should be called with red and 3 onChange of ColorPicker', () => {
                    wrapper().find('ColorIcon').first().props().onClick();
                    expect(props.setColor).not.toHaveBeenCalled();
                    wrapper().find('ColorPicker').first().props().onChange('red');
                    expect(props.setColor).toHaveBeenCalledWith('red', '3');
                });
            });
        });
    });
});