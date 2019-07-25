import React from 'react';
import styles from '../../../../themes/components/messages.scss';
import classnames from "classnames";

export default class Option extends React.Component {
    constructor(props) {
        super(props);
        this.onClickOption = this.onClickOption.bind(this);
    }

    returnClassName() {
        const {selected, disabled} = this.props;
        const classNames = [styles.messageOption];
        if (selected) {
            classNames.push(styles.messageOptionSelected);
        } else if (disabled) {
            classNames.push(styles.messageOptionDisabled);
        }
        return classnames(classNames);
    }

    onClickOption(e) {
        const {onClick, disabled} = this.props;
        if (!disabled) {
            e.stopPropagation();
            onClick();
        }
    }

    render() {
        const {option} = this.props;
        return (
            <div className={this.returnClassName()} onClick={this.onClickOption}>
                {option}
            </div>
        );
    }
}