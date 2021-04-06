import React, {useRef, useState} from 'react';
import Circle from '../components/Circle';
import Button from "../components/Button";

export const HookRef = () => {
    let ref = useRef(null);
    let [color, setColor] = useState(null);

    const _handleChange = (ref) =>{
        setColor(ref.target.value);
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h3>Hook Ref | Cambio de color dinamico</h3>
                    </div>
                    <div className='col-12 text-center'>
                        <p>Hook Ref y State</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='mb-3'>
                            <h5>Elige el color del circulo</h5>
                            <input type='color' ref={ref} onChange={_handleChange.bind(ref)} className='form-control' id='color' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <Circle color={color} />
                    </div>
                </div>
                <Button name='ref' />
            </div>
        </div>
    );
}
export default HookRef;