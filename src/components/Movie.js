import React from 'react';

export const Movie = (props) => {
    const {Poster, Title, Year} = props.data;
    return (
        <div className='card my-1' style={{maxWidth: 250}}>
            <img src={Poster} className='card-img-top' alt={Title} style={{maxHeight: 250}} />
            <div className='card-body'>
                <h5 className='card-title'>{Title}</h5>
                <p className='card-text'>{Year}</p>
            </div>
        </div>
    );
}
export default Movie;