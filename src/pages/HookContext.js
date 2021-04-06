import React, {useContext, useState} from 'react';
import {UserContext} from '../context/UserContext';
import Button from "../components/Button";

export const HookContext = () => {
    const {user, Login, Logout} = useContext(UserContext);
    const [info, setInfo] = useState({name: '', lastName: '', age: 0, profession: '', color: '#000000'});
    /*const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [profession, setProfession] = useState('');
    const [color, setColor] = useState('#000000');

    const _handleChangeName = (element) => {
        setName(element.target.value);
    }
    const _handleChangeLastName = (element) => {
        setLastName(element.target.value);
    }
    const _handleChangeColor = (element) => {
        setColor(element.target.value);
    }
    const _handleChangeAge = (element) => {
        setAge(element.target.value);
    }
    const _handleChangeProfession = (element) => {
        setProfession(element.target.value);
    }*/

    const _handleChange = (element) => {
        let allData = {...info};
        allData[element.target.name] = element.target.value;
        setInfo(allData);
    }

    const _handleSubmit = () => {
        let {name, lastName, age, profession, color} = info;
        let data = { name, lastName, age, profession, color, login: true}
        Login(data);
    }

    let {name, lastName, age, profession, color} = info;

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <h3>Hook Context | Variables globales</h3>
            </div>
            <div className='row my-3 justify-content-center'>
                <p>Hook Context, State</p>
            </div>
            <div className='row my-3'>
                {
                    user.login
                    ? <div className='col-12'>
                        <div className='row justify-content-around my-3'>
                            <div className='col-12 col-md-6'>
                                <h3>Usuario: {user.name}, Apellido: {user.lastName}</h3>
                                <h3>Edad: {user.age}, Profesion: {user.profession}</h3>
                            </div>
                            <div style={{backgroundColor: user.color, width: 100, height: 100, borderRadius: 50}}>

                            </div>
                        </div>
                        <button className='btn btn-warning w-100' onClick={Logout}>Logout</button>
                    </div>
                    : <>
                        <div className='col-12 col-md-6'>
                            <input className='form-control my-2' type='text' placeholder='Escriba su nombre' value={name} name='name' onChange={_handleChange.bind(this)} />
                        </div>
                        <div className='col-12 col-md-6'>
                            <input className='form-control my-2' type='text' placeholder='Escriba su apellido' value={lastName} name='lastName' onChange={_handleChange.bind(this)} />
                        </div>
                        <div className='col-12 col-md-6'>
                            <input className='form-control my-2' type='number' placeholder='Escriba su edad' value={age} name='age' onChange={_handleChange.bind(this)} />
                        </div>
                        <div className='col-12 col-md-6'>
                            <input className='form-control my-2' type='text' placeholder='Escriba su profesion' value={profession} name='profession' onChange={_handleChange.bind(this)} />
                        </div>
                        <div className='col-12'>
                            <input className='form-control my-2' type='color' value={color} name='color' onChange={_handleChange.bind(this)}/>
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-success w-100' onClick={_handleSubmit}>Login</button>

                        </div>
                    </>
                }
            </div>
            <Button name='context' />
        </div>
    );
}