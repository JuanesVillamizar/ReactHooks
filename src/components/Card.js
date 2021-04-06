import React from 'react';

export const Card = ({title, text}) => {
    return (
        <div className="col-12 col-md-6 p-1">
            <div className='card p-3'>
                <h2>{title}</h2>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}
export default Card;