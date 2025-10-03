import React from 'react';

export type ArrowTypes = {};

const Arrow = ({}: ArrowTypes): React.ReactElement => {
    return (
        <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.29285 25.7894L24.9513 2.13094M4.64372 1.92245H26M25.2881 1.21057V22.5668"
                stroke="#2D3436"
                strokeWidth="2"
            />
        </svg>
    );
};

export default Arrow;
