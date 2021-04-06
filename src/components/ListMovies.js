import React from 'react';
import Movie from './Movie';

export const ListMovies = ({listMovies}) => {
    if(listMovies.length === 0){
        return null;
    }else{
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    { listMovies.map( (element, index) => <Movie key={index} data={element} />)}
                </div>
            </div>
        );
    }
}
export default ListMovies;