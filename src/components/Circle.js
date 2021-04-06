import React from 'react';

export const Circle = ({color = '#000000'}) => {

    const circle = {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: color
    }

    return (
        <div className='row justify-content-center'>
            <div style={circle}>
            </div>
        </div>

    );
}
export default Circle;