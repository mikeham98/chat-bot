import React from 'react';
import styles from '../../../../themes/components/messages.scss';
import Option from './Option';
import isPopulatedArray from "../../../util/isPopulatedArray";

export default class Options extends React.PureComponent {
    returnOptions() {
        const {options, selectedOption} = this.props;
        if (isPopulatedArray(options)) {
            return options.map(option => {
                return (
                    <Option
                        key={option.id}
                        disabled={selectedOption}
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