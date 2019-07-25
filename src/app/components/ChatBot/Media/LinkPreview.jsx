import React from 'react';
import styles from '../../../../themes/components/media.scss';

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

export default React.memo(LinkPreview);