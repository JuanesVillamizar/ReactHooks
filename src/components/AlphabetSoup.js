import React, {Fragment} from 'react';

export const AlphabetSoup = ({array, dimension}) => {
    let count = array.length;

    if (count === 0){
        return null;
    }

    let aux = 0;

    return (
        <div className='container'>
            <div className='row my-3 justify-content-center'>
                {/*<table className='table table-dark table-striped'>*/}
                    {
                        array.map((element, index) => {
                            if (aux < dimension) {
                                aux++;
                                return (
                                    <div className='col' key={index}>
                                        <p className='bg-dark text-white text-center' key={index}>{element.toUpperCase()}</p>
                                    </div>
                                );
                            }else{
                                aux = 1;
                                return (
                                    <Fragment key={index}>
                                        <div className='col-12'>

                                        </div>
                                        <div className='col'>
                                            <p className='bg-dark text-white text-center'>{element.toUpperCase()}</p>
                                        </div>
                                    </Fragment>
                                )
                            }
                        })
                    }
                {/*</table>*/}
            </div>
        </div>
    );
}
export default AlphabetSoup;