import React from 'react';
import ImagePreview from "./ImagePreview";
import LinkPreview from "./LinkPreview";
import isPopulatedArray from "../../../util/isPopulatedArray";
import {gif, img, link} from "../../../config/media.config";
import {MediaPropTypes} from "../../../config/propTypes";

export default class Media extends React.PureComponent {
    returnMedia() {
        const {media} = this.props;
        if (isPopulatedArray(media)) {
            return media.map(({id, type, src, imagePreview, title, description}) => {
                if (type === gif || type === img) {
                    return (
                        <ImagePreview
                            key={id}
                            src={src}
                        />
                    );
                }
                if (type === link) {
                    return (
                        <LinkPreview
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
        return (
            <div>
                {this.returnMedia()}
            </div>
        );
    }
}

Media.propTypes = {
    media: MediaPropTypes
};