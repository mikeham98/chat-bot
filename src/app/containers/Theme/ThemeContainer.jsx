import React from 'react';
import styles from '../../../themes/theme.scss';
import {connect} from 'react-redux';
import {darkTheme} from "../../config/theme.config";

const ThemeContainer = ({theme, children}) => {
    console.log(theme)
    console.log(darkTheme)
    return (
        <div className={theme === darkTheme ? styles.darkTheme : ''}>
            {children}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        theme: state.settings.theme
    }
};

export default connect(mapStateToProps)(React.memo(ThemeContainer))