import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

const Button = ({
    size = 'default',
    children,
    color,
    useShadow,
    disabled,
    onClick
}) => {
    return (
        <button
            className={classNames(styles.button, {
                [styles.disabled]: !!disabled,
                [styles.shadow]: !!useShadow
            }, styles[size], styles[color])}
            disabled={disabled}
            onClick={(e) => {
                const x = e.pageX;
                const y = e.pageY;
                
                const buttonTop = e.target.offsetTop;
                const buttonLeft = e.target.offsetLeft;
                const xInside = x - buttonLeft;
                const yInside = y - buttonTop;

                const ripple = document.createElement('span');
                ripple.classList.add(styles.ripple);
                ripple.style.top = yInside + 'px';
                ripple.style.left = xInside + 'px';
                
                e.target.appendChild(ripple);
                setTimeout(() => ripple.remove(), 250);
                if (onClick) onClick(e);
            }}
        >
            {children}
        </button>
    );
};

export default Button;
