import React from 'react';
import {mount} from 'enzyme';
import MessageForm from '../../../../app/components/ChatBot/Toolbar/MessageForm';
import IconButton from "../../../../app/components/common/Icon/IconButton";

jest.mock("../../../../app/components/common/Icon/index.jsx", () => {
    return () => <div>Icon</div>
});

describe('MessageForm', () => {
    let mountedWrapper;
    let props = {};
    const wrapper = () => {
        if (!mountedWrapper) {
            mountedWrapper = mount(<MessageForm {...props}/>);
        }
        return mountedWrapper;
    };

    beforeEach(() => {
        props = {
            initialValues: {message: ''},
            sendMessage: jest.fn((message, callback) => callback())
        };
        mountedWrapper = undefined;
    });

    describe('render', () => {
        it('should return a form component with a MessageInput and an IconButton', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        describe('IconButton', () => {
            it('should have color prop set to #939aab', () => {
                expect(wrapper().find(IconButton).first().props().color).toBe('#939aab');
            });
            it('should have color prop set to #172B4D because messages has a length', () => {
                wrapper().find('input').first().simulate('change', {
                    target: {
                        name: 'message',
                        value: 'this is a message'
                    }
                });
                wrapper().update();
                expect(wrapper().find(IconButton).first().props().color).toBe('#172B4D');
            });
        });
    });
    describe('functionality', () => {
        describe('validate', () => {
            it('should return an object with message set to Required', () => {
                const values = {
                    message: ''
                };
                const error = {
                    message: 'Required'
                };
                expect(wrapper().find('Formik').first().props().validate(values)).toEqual(error);
            });
            it('should return an empty object', () => {
                const values = {
                    message: 'this is a message'
                };
                const error = {};
                expect(wrapper().find('Formik').first().props().validate(values)).toEqual(error);
            });
        });
        describe('props', () => {
            describe('sendMessage', () => {
                it('should be called onSubmit along with setSubmitting and resetForm', () => {
                    const values = {
                        message: 'this is a message'
                    };
                    const formikBag = {
                        setSubmitting: jest.fn(),
                        resetForm: jest.fn(),
                    };
                    expect(props.sendMessage).not.toHaveBeenCalled();
                    expect(formikBag.setSubmitting).not.toHaveBeenCalled();
                    expect(formikBag.resetForm).not.toHaveBeenCalled();
                    wrapper().find('Formik').first().props().onSubmit(values, formikBag);
                    expect(props.sendMessage).toHaveBeenCalledTimes(1);
                    expect(props.sendMessage).toHaveBeenCalledWith(values.message, expect.any(Function));
                    expect(formikBag.resetForm).toHaveBeenCalledTimes(1);
                    expect(formikBag.setSubmitting).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});