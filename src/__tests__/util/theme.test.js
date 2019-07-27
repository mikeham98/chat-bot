import {darkTheme, lightTheme} from '../../app/config/theme.config';
import {oppositeTheme} from '../../app/util/theme';

describe('oppositeTheme', () => {
    it('should return darkTheme when lightTheme is passed in', () => {
        expect(oppositeTheme(lightTheme)).toBe(darkTheme);
    });
    it('should return lightTheme when darkTheme is passed in', () => {
        expect(oppositeTheme(darkTheme)).toBe(lightTheme);
    });
});