import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../../themes/components/media.scss';

const ImagePreview = ({src}) => {
    return (
        <img className={styles.mediaImagePreviewImage} src={src}/>
    );
};

ImagePreview.propTypes = {
    src: PropTypes.string.isRequired
};

export default React.memo(ImagePreview);