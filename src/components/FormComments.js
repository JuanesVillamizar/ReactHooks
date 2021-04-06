import React, {useState} from 'react';

export const FormComments = ({fnSend}) => {
    const [data, setData] = useState({person: '', affair: '', email: '', msg: ''})
    /*const [person, setPerson] = useState('');
    const [affair, setAffair] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const _handlePerson = (element) => {
        setPerson(element.target.value);
    }
    const _handleAffair = (element) => {
        setAffair(element.target.value);
    }
    const _handleEmail = (element) => {
        setEmail(element.target.value);
    }
    const _handleMsg = (element) => {
        setMsg(element.target.value);
    }*/

    const _handleChange = (element) => {
        let allData = {...data};
        allData[element.target.name] = element.target.value;
        setData(allData);
    }

    const _handleSubmit = () => {
        fnSend({...data})
    }

    let {person, affair, email, msg} = data;

    return (
        <div className='row'>
            <div className='col-12 col-md-6 my-2'>
                <input type='text' placeholder='Quien soy?' value={person} name='person' className='form-control' onChange={_handleChange.bind(this)}/>
            </div>
            <div className='col-12 col-md-6 my-2'>
                <input type='text' placeholder='Asunto' value={affair} name='affair' className='form-control' onChange={_handleChange.bind(this)}/>
            </div>
            <div className='col-12 col-md-6 my-2'>
                <input type='email' placeholder='Correo de contacto' value={email} name='email' className='form-control' onChange={_handleChange.bind(this)}/>
            </div>
            <div className='col-12 col-md-6 my-2'>
                <input type='text' placeholder='Mensaje' value={msg} name='msg' className='form-control' onChange={_handleChange.bind(this)}/>
            </div>
            <div className='col-12'>
                <button className='btn btn-success w-100' onClick={_handleSubmit}>Enviar</button>
            </div>
        </div>
    );
}