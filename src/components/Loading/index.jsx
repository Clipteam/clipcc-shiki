import React from 'react';
import classNames from 'classnames';

import styles from './loading.module.scss';

const Loading = ({
    fullscreen,
    size = 36
}) => {
    return (
        <div className={classNames(styles.preloader,{
            [styles.fullscreen]: fullscreen
        })}>
            <svg id="preloader-icon" className={styles.preloaderIcon} width={`${size}`} height={`${size}`} viewBox="0 0 128 128" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path id="preloader-icon-clip"
                    d="M58.3431 49.955L37.9785 70.3196C23.2707 85.0274 41.3726 103.129 56.0804 88.4216L96.8097 47.6922C114.912 29.5903 87.7588 2.43739 69.6568 20.5393L28.9275 61.2687C1.77464 88.4215 37.9785 124.625 65.1314 97.4725L85.496 77.1079"
                    stroke="#3581EA" strokeLinecap="round" strokeLinejoin="round" className={styles.preloaderIconClip}></path>
            </svg>
        </div>
    );
}

export default Loading;