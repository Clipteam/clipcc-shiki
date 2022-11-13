import React from 'react';
import styles from './avatar.module.scss';
import defaultAvatar from './avatar.jpg';

const Avatar = ({
    src = defaultAvatar,
    alt = 'avatar',
    onClick
}) => {
    return (
        <div className={styles.container}>
            <img
                draggable={false}
                alt={alt}
                src={src}
                onClick={onClick}
            />
        </div>
    );
};

export default Avatar;
