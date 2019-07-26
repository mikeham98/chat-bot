import React from 'react';
import PropTypes from "prop-types";
import styles from '../../../../themes/components/colorPicker.scss';
import {flatColours} from '../../../config/colors.config';
import ColorIcon from "./ColorIcon";

export default class ColorPicker extends React.PureComponent {
    returnColorIcons() {
        return flatColours.map((color) => {
            return (
                <ColorIcon
                    key={color}
                    selected={color === this.props.color}
                    color={color}
                    onClick={() => this.props.onChange(color)}
                />
            )
        });
    }

    render() {
        return (
            <div className={styles.colorPickerWrapper}>
                {this.returnColorIcons()}
            </div>
        )
    }
}

ColorPicker.propTypes = {
    color: '#1ccb9e',
    onChange: PropTypes.func.isRequired,
};