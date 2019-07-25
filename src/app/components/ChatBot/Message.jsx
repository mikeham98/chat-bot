import React from 'react';
import styles from '../../../themes/components/messages.scss';
import ImageMedia from "../common/Media/ImagePreview";
import LinkMedia from "../common/Media/LinkPreview";
import isPopulatedArray from "../../util/isPopulatedArray";
import {gif, img, link} from "../../config/media.config";

export default class Message extends React.PureComponent {
    returnMedia() {
        const {media} = this.props;
        if (isPopulatedArray(media)) {
            return media.map(({id, type, src, imagePreview, title, description}) => {
                if (type === gif || type === img) {
                    return (
                        <ImageMedia
                            key={id}
                            src={src}
                        />
                    );
                }
                if (type === link) {
                    return (
                        <LinkMedia
                            key={id}
                            src={src}
                            image={imagePreview}
                            title={title}
                            description={description}
                        />
                    );
                }
                return null;
            });
        }
    }

    render() {
        const {body, showDateTime, dateTime, onClickBody} = this.props;
        return (
            <div className={styles.messageContent}>
                <div className={styles.message} onClick={onClickBody}>
                    {body}
                </div>
                {this.returnMedia()}
                {showDateTime && <span className={styles.messageCreatedAt}>{dateTime}</span>}
            </div>
        );
    }
}