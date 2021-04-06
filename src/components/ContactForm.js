import React, {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext';
import {FormComments} from './FormComments';

export const ContactFrom = () => {
    const {user, LoginAdditional} = useContext(UserContext);
    const [name, setName] = useState(user.name === undefined ? '' : user.name);
    const [lastName, setLastName] = useState(user.lastName === undefined ? '' : user.lastName);
    const [age, setAge] = useState(user.age !== undefined ? ( parseInt(user.age) === 0 ? 0 : parseInt(user.age) ) : 0);
    const [profession, setProfession] = useState(user.profession === undefined ? '' : user.profession);
    const [color, setColor] = useState(user.color === undefined ? '#000000' : user.color);

    const _handleChangeName = (element) => {
        setName(element.target.value)
    }
    const _handleChangeLastName = (element) => {
        setLastName(element.target.value)
    }
    const _handleChangeAge = (element) => {
        setAge(element.target.value)
    }
    const _handleChangeProfession = (element) => {
        setProfession(element.target.value)
    }
    const _handleChangeColor = (element) => {
        setColor(element.target.value)
    }

    const _handleAdditionalForm = (elements) => {
        setName(user.name === undefined ? name : user.name );
        setLastName(user.lastName === undefined ? lastName : user.lastName );
        setAge(parseInt(user.age) === 0 ? user.age : age);
        setProfession(user.profession === undefined ? profession : user.profession );
        setColor(user.color !== '#000000' ? user.color : color);
        let data = { name, lastName, age, profession, color, ...elements }
        // console.log(data);
        LoginAdditional(data);
    }

    if(user.login){
        if (user.person === undefined){
            return (
                <div className='container py-3'>
                    <div className='row justify-content-center'>
                        <FormComments fnSend={_handleAdditionalForm} />
                    </div>
                </div>
            );
        }else{
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h3>Listo nos pondremos en contacto contigo</h3>
                        </div>
                    </div>
                </div>
            );
        }
    }
    return (
        <div className='container py-3'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <input className='form-control my-2' type='text' placeholder='Escriba su nombre' value={name} onChange={_handleChangeName.bind(this)} />
                </div>
                <div className='col-12 col-md-6'>
                    <input className='form-control my-2' type='text' placeholder='Escriba su apellido' value={lastName} onChange={_handleChangeLastName.bind(this)} />
                </div>
                <div className='col-12 col-md-6'>
                    <input className='form-control my-2' type='number' value={age} onChange={_handleChangeAge.bind(this)} />
                </div>
                <div className='col-12 col-md-6'>
                    <input className='form-control my-2' type='text' placeholder='Escriba su profesion' value={profession} onChange={_handleChangeProfession.bind(this)} />
                </div>
                <div className='col-12'>
                    <input className='form-control my-2' type='color' value={color} onChange={_handleChangeColor.bind(this)}/>
                </div>
            </div>
            <FormComments fnSend={_handleAdditionalForm}/>
        </div>
    );
}