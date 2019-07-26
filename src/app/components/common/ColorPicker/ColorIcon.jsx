import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../../../themes/components/colorPicker.scss';

export default class ColorIcon extends React.PureComponent {
    returnClassName() {
        let className = [styles.colorIconWrapper];
        if(this.props.selected) {
            className.push(styles.colorIconSelected)
        }
        return classnames(className);
    }

    render() {
        return (
            <div
                style={{backgroundColor: this.props.color}}
                onClick={this.props.onClick}
                className={this.returnClassName()}
            />
        )
    }
}

ColorIcon.propTypes = {
    color: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};