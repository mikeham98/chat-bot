import React from 'react';
import styles from '../../../themes/components/messages.scss';
import isPopulatedArray from "../../util/isPopulatedArray";
import Media from "./Media/Media";
import Options from "./Options/Options";

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

    render() {
        const {body, showDateTime, dateTime, media, options, onClickBody, selectedOption} = this.props;
        return (
            <div className={styles.messageContent}>
                <div className={styles.message} onClick={onClickBody}>
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