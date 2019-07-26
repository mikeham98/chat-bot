import React from 'react';
import PropTypes from "prop-types";
import styles from '../../../../themes/components/messages.scss';
import Option from './Option';
import isPopulatedArray from "../../../util/isPopulatedArray";
import {OptionsPropTypes} from "../../../config/propTypes";

export default class Options extends React.PureComponent {
    returnOptions() {
        const {options, selectedOption} = this.props;
        if (isPopulatedArray(options)) {
            return options.map(option => {
                return (
                    <Option
                        key={option.id}
                        disabled={!!selectedOption}
                        selected={selectedOption === option.id}
                        option={option.option}
                        onClick={() => this.props.onClick(option.id)}
                    />
                );
            });
        }
    }

    render() {
        return (
            <div className={styles.messageOptionWrapper}>
                {this.returnOptions()}
            </div>
        );
    }
}

Options.propTypes = {
    options: OptionsPropTypes,
    selectedOption: PropTypes.number,
    onClick: PropTypes.func,
};