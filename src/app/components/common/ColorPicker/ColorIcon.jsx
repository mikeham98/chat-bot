import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from '../../../../themes/components/colorPicker.scss';

export default class ColourIcon extends React.PureComponent {
    returnClassName() {
        let className = [styles.colourIconWrapper];
        if(this.props.selected) {
            className.push(styles.colourIconSelected)
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

ColourIcon.propTypes = {
    color: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};