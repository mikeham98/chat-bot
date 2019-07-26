import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../themes/theme.scss';
import {connect} from 'react-redux';
import {darkTheme} from "../../config/theme.config";
import {getThemeSelector} from "../../selectors/settingsSelector";

const ThemeContainer = ({theme, children}) => {
    return (
        <div className={theme === darkTheme ? styles.darkTheme : ''}>
            {children}
        </div>
    )
};

ThemeContainer.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.node,
};

const mapStateToProps = (state) => ({
    theme: getThemeSelector(state)
});

export default connect(mapStateToProps)(ThemeContainer)