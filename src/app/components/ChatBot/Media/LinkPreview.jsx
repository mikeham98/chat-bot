import React from 'react';
import styles from '../../../../themes/components/media.scss';
import PropTypes from "prop-types";

const LinkPreview = ({src, image, title, description}) => {
    return (
        <div className={styles.mediaLinkPreviewWrapper} onClick={() => window.open(src)}>
            <img src={image}/>
            <div className={styles.mediaLinkPreviewMeta}>
                <span className={styles.mediaLinkPreviewTitle}>{title}</span>
                <span className={styles.mediaLinkPreviewDescription}>{description}</span>
            </div>
        </div>
    );
};

LinkPreview.propTypes = {
    src: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default React.memo(LinkPreview);