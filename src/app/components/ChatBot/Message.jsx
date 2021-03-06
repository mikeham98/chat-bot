import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../../../themes/components/messages.scss';
import isPopulatedArray from "../../util/isPopulatedArray";
import Media from "./Media/Media";
import Options from "./Options/Options";
import {MediaPropTypes, OptionsPropTypes} from "../../config/propTypes";

export default class Message extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClickOption = this.onClickOption.bind(this);
    }

    onClickOption(optionId) {
        const {id} = this.props;
        this.props.onClickOption(optionId, id)
    }

    showMedia() {
        return isPopulatedArray(this.props.media);
    }

    showOptions() {
        return isPopulatedArray(this.props.options);
    }

    returnMessageClassName() {
        const {showDateTime} = this.props;
        const classNames = [styles.message];
        if(showDateTime) {
            classNames.push(styles.messageFocused);
        }
        return classnames(classNames);
    }

    render() {
        const {body, showDateTime, dateTime, media, options, onClickBody, selectedOption, color} = this.props;
        return (
            <div className={styles.messageContent}>
                <div className={this.returnMessageClassName()} style={{backgroundColor: color}} onClick={onClickBody}>
                    <span className={styles.messageBody}>{body}</span>
                    {this.showOptions() && (
                        <Options
                            selectedOption={selectedOption}
                            options={options}
                            onClick={this.onClickOption}
                        />
                    )}
                </div>
                {this.showMedia() && (
                    <Media
                        media={media}
                    />
                )}
                {showDateTime && <span className={styles.messageCreatedAt}>{dateTime}</span>}
            </div>
        );
    }
}

Message.defaultProps = {
    color: ''
};

Message.propTypes = {
    onClickOption: PropTypes.func.isRequired,
    id: PropTypes.number,
    body: PropTypes.string,
    showDateTime: PropTypes.bool,
    dateTime: PropTypes.string,
    media: MediaPropTypes,
    options: OptionsPropTypes,
    onClickBody: PropTypes.func.isRequired,
    selectedOption: PropTypes.number,
    color: PropTypes.string,
};