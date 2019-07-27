import axiosInstance from '../../../app/actions/axiosInstance';
import {constants, getTheme, setTheme} from '../../../app/actions/settings/index.actions';
import MockAdapter from 'axios-mock-adapter';

const mockAxios = new MockAdapter(axiosInstance);

describe('conversation actions', () => {

    const mockDispatch = jest.fn();
    const dispatch = jest.fn((thunk) => thunk(mockDispatch));

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getTheme', () => {
        describe('success', () => {
            it('should call mockDispatch with a type of SET_DARK_THEME', () => {
                mockAxios.onGet('http://localhost:3000/settings').reply(200, {
                    theme: 'dark'
                });
                expect(mockDispatch).not.toHaveBeenCalled();
                return dispatch(getTheme()).then(() => {
                    expect(mockDispatch).toHaveBeenCalledTimes(1);
                    expect(mockDispatch).toHaveBeenCalledWith({
                        type: constants.SET_DARK_THEME
                    });
                });
            });
            it('should call mockDispatch with a type of SET_LIGHT_THEME', () => {
                mockAxios.onGet('http://localhost:3000/settings').reply(200, {
                    theme: 'light'
                });
                expect(mockDispatch).not.toHaveBeenCalled();
                return dispatch(getTheme()).then(() => {
                    expect(mockDispatch).toHaveBeenCalledTimes(1);
                    expect(mockDispatch).toHaveBeenCalledWith({
                        type: constants.SET_LIGHT_THEME
                    });
                });
            });
        });
    });
    describe('setColor', () => {
        it('should call mockDispatch', () => {
            mockAxios.onPatch('http://localhost:3000/settings', {theme: 'dark'}).reply(200);
            expect(mockDispatch).not.toHaveBeenCalled();
            return dispatch(setTheme('dark')).then(() => {
                expect(mockDispatch).toHaveBeenCalledTimes(1);
            });
        });
    });
});