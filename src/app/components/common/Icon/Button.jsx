import React from 'react';
import styles from '../../../../themes/icon.scss';
import Icon from "./index";

export default class IconButton extends React.PureComponent {
    render() {
        const {onClick, type, icon, style, color, hoverColor, height, width, disabled} = this.props;
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
    }
}