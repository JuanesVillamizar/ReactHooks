import React from 'react';
import {Link} from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-12">
                    <div className='alert alert-danger my-5 text-center' role='alert'>
                        Esta pagina no existe...
                    </div>
                </div>
                <div className="col-12">
                    <div className="row justify-content-center">
                        <Link to='/' className='btn btn-info'>Volver a inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NotFound;