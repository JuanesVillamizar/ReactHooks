import React from 'react';
import Text from "./Text";
import {I, SecondBar} from './ComponentsStyles';

export const Footer = () => {

    return (
        <div style={SecondBar}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <hr />
                            <div style={{backgroundColor: '#f0f0f0'}} className='text-center' id='text'>
                                <Text />
                            </div>
                        <hr />
                        <div className="row justify-content-center">
                            <h5>Si quieres cumplirlo sube a la cima</h5>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h5>Estos son enunciados</h5>
                        <p>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
                            desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                        </p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h5>Nuestras redes sociales</h5>
                        <p>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                            Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
                            desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                        </p>
                    </div>
                    <div className='col-12 text-center'>
                        <p>Todos los derechos reservados | <span style={I}>Juan Esteban Villamizar Sierra</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;