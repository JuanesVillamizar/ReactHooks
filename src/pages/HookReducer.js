import React, {useReducer} from 'react';
import Button from "../components/Button";

export const HookReducer = () => {
    const initialState = {
        count: 0,
        countInterval: 1,
        action: true
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'action':
                return {
                    ...state,
                    action: action.action
                }
            case 'setInterval':
                return {
                    ...state,
                    countInterval: parseInt(action.interval)
                }
            case 'setCount':
                return {
                    ...state,
                    count: state.action ? state.count + state.countInterval : state.count - state.countInterval
                }
            default:
                return {
                    ...state,
                    count: 0
                };
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const _handleEvents = (element) => {
        let action = element.target.value === '+' ?? false;
        let interval = document.querySelector('#interval').value;

        // console.log(action, interval)

        dispatch({type: 'action', action: action})
        dispatch({type: 'setInterval', interval: interval})
        dispatch({type: 'setCount'})
    }
    const _handleRestart = () => {
        dispatch({type: 'restart'})
    }
    return (
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <div className='col-12'>
                    <h3>Hook Reducer | Contador por intervalos</h3>
                </div>
                <div className='col-12'>
                    <p>Hook Reducer</p>
                </div>
                <div className='col-12'>
                    <h3>Cuenta: {state.count}</h3>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='mb-3'>
                        <h4>Decrementar</h4>
                        <button className='btn btn-light w-100' value='-' onClick={_handleEvents.bind(this)}>Decrementar</button>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='row'>
                        <div className='col-12 my-2'>
                            <div>
                                <h4>Elige los intervalos</h4>
                                <input type='number' className='form-control' id='interval' defaultValue='1'/>
                            </div>
                        </div>
                        <div className='col-12 my-2'>
                            <button className='btn btn-success w-100' onClick={_handleRestart}>Reiniciar</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='mb-3'>
                        <h4>Incrementar</h4>
                        <button className='btn btn-light w-100' value='+' onClick={_handleEvents.bind(this)}>Incrementar</button>
                    </div>
                </div>
            </div>
            <Button name='reducer' />
        </div>
    );
}
export default HookReducer;