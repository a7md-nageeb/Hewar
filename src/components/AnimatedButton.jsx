import React, { useState } from 'react';

const AnimatedButton = ({ onClick, className = '', children, delay = 150, ...props }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = (e) => {
        // Prevent default behavior issues if needed, but usually we just want to delay the logic
        if (e && e.persist) e.persist();

        setIsPressed(true);

        setTimeout(() => {
            setIsPressed(false);
            if (onClick) onClick(e);
        }, delay);
    };

    return (
        <button
            className={`${className} ${isPressed ? 'is-pressed' : ''}`}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default AnimatedButton;
