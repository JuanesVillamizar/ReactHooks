import React,  {useContext}  from 'react';
import {UserContext} from '../context/UserContext';
import {ContactFrom} from '../components/ContactForm';
import Button from "../components/Button";

export const Forms = () => {
    const {user} = useContext(UserContext);

    const styleNameUser = {
        backgroundColor: user.login ? '#6c757d' : '#422452',
        color: user.login ? user.color : 'white',
        padding: 5
    }

    return (
        <div className='container py-3'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                    <div className='d-flex justify-content-center'>
                        <h3>Formularios</h3>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className='d-flex justify-content-center'>
                        <div style={styleNameUser}>
                            {user.login ? <h5>El usuario es {user.name}</h5> : <h5>No hay usuario</h5>}
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='row'>
                        <ContactFrom />
                    </div>
                </div>
                <div className='col-12'>
                    <div className='row'>

                    </div>
                </div>
            </div>
            <Button name='color' value={styleNameUser.color}/>
        </div>
    );
}