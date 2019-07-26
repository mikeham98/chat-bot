import React from 'react';
import classnames from 'classnames';
import styles from '../../../../themes/components/colorPicker.scss';

export default class ColourIcon extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);
    }

    onHover() {
        this.setState({
            hover: true
        });
    }

    offHover() {
        this.setState({
            hover: false
        });
    }

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
                onMouseOver={this.onHover}
                onMouseLeave={this.offHover}
                onClick={this.props.onClick}
                className={this.returnClassName()}
            />
        )
    }
}