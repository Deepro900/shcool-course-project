import React from 'react';

const Q1 = ({ qusition }) => {
    const { logo, name } = qusition;
    return (
        <div>
            <img src={logo}></img>

        </div>
    );
};

export default Q1;