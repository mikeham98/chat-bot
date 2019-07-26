import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../../themes/components/icon.scss';
import Icon from "./index";

const IconButton = ({onClick, type = 'button', icon, style, color, hoverColor, height, width, disabled}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={style}
            className={styles.iconButton}
        >
            <Icon
                IconComponent={icon}
                color={color}
                hoverColor={hoverColor}
                height={height}
                width={width}
            />
        </button>
    );
};

IconButton.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    icon: PropTypes.any,
    style: PropTypes.object,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    disabled: PropTypes.bool,
};

export default React.memo(IconButton);