import React from 'react';
import styles from '../../../../themes/components/icon.scss';
import Icon from "./index";

const IconButton = ({onClick, type, icon, style, color, hoverColor, height, width, disabled}) => {
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

export default React.memo(IconButton);