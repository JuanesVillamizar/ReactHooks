import React from 'react';

export const Letter = ({value, colorText = 'text-secondary'}) => {
    return (
        <div className='col-1'>
            <span className={colorText}>{value.toUpperCase()}</span>
        </div>
    );
}
export default Letter;