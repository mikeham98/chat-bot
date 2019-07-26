import {createSelector} from 'reselect';

const settingsState = state => state.settings;

export const getThemeSelector = createSelector(
    settingsState,
    (settings) => {
        return settings.theme
    }
);