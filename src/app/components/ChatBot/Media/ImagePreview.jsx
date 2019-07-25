import React from 'react';
import styles from '../../../../themes/components/media.scss';

const ImagePreview = ({src}) => {
    return (
        <img className={styles.mediaImagePreviewImage} src={src}/>
    );
};

export default React.memo(ImagePreview);