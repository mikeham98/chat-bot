import PropTypes from 'prop-types';
import {gif, img, link} from "./media.config";

export const OptionPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    option: PropTypes.string.isRequired,
});

export const MediaObjectPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    type: PropTypes.oneOf([gif, img, link]).isRequired,
    imagePreview: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
});

export const MediaPropTypes = PropTypes.arrayOf(MediaPropTypes);

export const OptionsPropTypes = PropTypes.arrayOf(OptionPropTypes);

export const MessagesPropTypes = PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.shape({
        body: PropTypes.string.isRequired,
        media: MediaPropTypes,
        options: OptionsPropTypes,
    }),
    recipient: PropTypes.shape({
        userId: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        userName: PropTypes.string
    }),
    createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    createdBy: PropTypes.shape({
        userId: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        userName: PropTypes.string,
    }).isRequired
}));