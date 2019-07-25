import React from 'react';
import ImageMedia from "./ImagePreview";
import LinkMedia from "./LinkPreview";
import isPopulatedArray from "../../../util/isPopulatedArray";
import {gif, img, link} from "../../../config/media.config";

export default class Media extends React.PureComponent {
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
        return (
            <div>
                {this.returnMedia()}
            </div>
        );
    }
}