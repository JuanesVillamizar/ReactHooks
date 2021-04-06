import React, { useState } from 'react';
import Button from "../components/Button";

export const HookState = () => {

    const [countRed, setCountRed] = useState(0);
    const [countBlack, setCountBlack] = useState(0);
    const [countGreen, setCountGreen] = useState(0);
    const [countWhite, setCountWhite] = useState(0);
    const [countBlue, setCountBlue] = useState(0);

    const [colorScreen, setColorScreen] = useState('');


    const screen = {
        // background: 'rgb(39,36,84)',
        background: colorScreen === '' ? 'linear-gradient(180deg, rgba(39,36,84,1) 0%, rgba(26,26,201,1) 36%, rgba(0,212,255,1) 100%)' : colorScreen
    }

    const _handleColors = (setCount, color) => {
        setColorScreen(color);
        let nameFunctionSet = setCount[0];
        nameFunctionSet(setCount[1] + 1);
    }

    return (
        <div style={screen}>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-white text-center'>Hook State | Contadores por colores</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className='text-white text-center'>Hook State</p>
                    </div>
                </div>
                <div className='row justify-content-center py-4'>
                    <button className='btn btn-danger mx-2' onClick={_handleColors.bind( this, [setCountRed,countRed],'red')}>{countRed} por el color rojo</button>
                    <button className='btn btn-dark mx-2' onClick={_handleColors.bind( this, [setCountBlack, countBlack ],'black')}>{countBlack} por el color negro</button>
                    <button className='btn btn-success mx-2' onClick={_handleColors.bind( this, [setCountGreen, countGreen ],'green')}>{countGreen} por el color verde</button>
                    <button className='btn btn-light mx-2' onClick={_handleColors.bind( this, [setCountWhite, countWhite ],'white')}>{countWhite} por el color blanco</button>
                    <button className='btn btn-primary mx-2' onClick={_handleColors.bind( this, [setCountBlue, countBlue ],'blue')}>{countBlue} por el color azul</button>
                </div>
                <Button name='state'/>
            </div>
        </div>
    );
}
export default HookState;
