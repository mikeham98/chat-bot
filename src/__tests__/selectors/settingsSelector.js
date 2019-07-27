import {getThemeSelector} from '../../app/selectors/settingsSelector';

describe('settings selectors', () => {
    const state = {
        settings: {
            theme: 'dark'
        }
    };
    describe('getThemeSelector', () => {
        it('should return a theme of dark', () => {
            expect(getThemeSelector(state)).toBe('dark')
        });
    });
});