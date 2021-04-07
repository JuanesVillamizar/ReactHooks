import React from 'react';

const PokeDexElement = ({name, urlAPI, type}) => {

    

    return (
        <div className='col-12 col-md-3 p-3 my-1 bg-white text-center'>

            <span>{name} --- {type}</span>

        </div>
    );
}

export default PokeDexElement;