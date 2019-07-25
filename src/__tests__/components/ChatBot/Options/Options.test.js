import React from 'react';
import {shallow} from 'enzyme';
import Options from '../../../../app/components/ChatBot/Options/Options';
import Option from '../../../../app/components/ChatBot/Options/Option';

describe('Options', () => {
    let shallowedWrapper;
    let props = {};
    const wrapper = () => {
        if (!shallowedWrapper) {
            shallowedWrapper = shallow(<Options {...props}/>);
        }
        return shallowedWrapper;
    };

    beforeEach(() => {
        props = {
            options,
            onClick: jest.fn(),
            selectedOption: 2,
        };
        shallowedWrapper = undefined;
    });

    describe('render', () => {
        it('should return 2 Option component with the second Option selected', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should set disabled to false when there is not a selected option', () => {
            props.selectedOption = undefined;
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        describe('prop', () => {
            describe('onClick', () => {
                it('should be called on onClick with 1 when the first Option is clicked', () => {
                    expect(props.onClick).not.toHaveBeenCalled();
                    wrapper().find(Option).at(0).props().onClick();
                    expect(props.onClick).toHaveBeenCalledTimes(1);
                    expect(props.onClick).toHaveBeenCalledWith(1);
                });
                it('should be called on onClick with 2 when the first Option is clicked', () => {
                    expect(props.onClick).not.toHaveBeenCalled();
                    wrapper().find(Option).at(1).props().onClick();
                    expect(props.onClick).toHaveBeenCalledTimes(1);
                    expect(props.onClick).toHaveBeenCalledWith(2);
                });
            });
        });
    });
});

const options = [
    {
        "id": 1,
        "option": "Back To The Future"
    },
    {
        "id": 2,
        "option": "Stranger Things"
    }
];