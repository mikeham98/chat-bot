import settingsReducer from '../../../app/reducers/settings/index.reducers';
import {darkTheme, lightTheme} from "../../../app/config/theme.config";

describe('settingsReducer', () => {
    describe('with action type', () => {
        describe('RANDOM', () => {
            it('should return current state', () => {
                const state = {
                    theme: lightTheme
                };
                const action = {
                    type: 'RANDOM',
                    payload: darkTheme
                };
                expect(settingsReducer(state, action)).toEqual(state);
            });
        });
        describe('SET_LIGHT_THEME', () => {
            it('should return theme as lightTheme', () => {
                const state = {
                    theme: darkTheme
                };
                const action = {
                    type: 'SET_LIGHT_THEME',
                };
                const expectedState = {
                    theme: lightTheme
                };
                expect(settingsReducer(state, action)).toEqual(expectedState);
            });
        });
        describe('SET_DARK_THEME', () => {
            it('should return current state and set replying to true', () => {
                const state = {
                    theme: lightTheme
                };
                const action = {
                    type: 'SET_DARK_THEME',
                };
                const expectedState = {
                    theme: darkTheme
                };
                expect(settingsReducer(state, action)).toEqual(expectedState);
            });
        });
    });
});