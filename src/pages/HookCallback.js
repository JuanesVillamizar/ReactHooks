import React, {useState, useRef, useCallback} from 'react';
import AlphabetSoup from '../components/AlphabetSoup';
import Button from "../components/Button";

export const HookCallback = () => {
    const [dimension, setDimension] = useState(2);
    const [count, setCount] = useState(0);
    const [array, setArray] = useState([]);
    const ref = useRef(null);

    const _handleChange = () => {
        let {value} = ref.current;
        if (parseInt(value) <= 20 && parseInt(value) >= 2){
            setDimension(value);
        }else{
            alert('Dimensiones invalidas, solo es permitido del 2 al 100');
        }
    }

    const memoizedCallback = useCallback(() => {
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let aux = [];
        for (let x = 0; x < dimension * dimension; x++){
            let value = Math.floor((Math.random() * alphabet.length - 1) + 1);
            aux.push(alphabet[value]);
        }
        setArray(aux);
        setCount(dimension);
        // console.log(Math.floor((Math.random() * alphabet.length) + 1))
    },[dimension]);

    return (
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <div className='col-12'>
                    <h3>Hook Callback | Sopa de letras</h3>
                </div>
                <div className='col-12'>
                    <p>Hook State, Ref, Callback</p>
                </div>
                <div className='col-12'>
                    <p>Hook Callback y hook Memo, estos dos por lo general se suelen utilizar juntos, y funcionan casi igual. Por ejemplo:</p>
                    <p>useCallback(fn, deps) es igual a useMemo(() => fn, deps).</p>
                </div>
            </div>
            <div className='col-12'>
                <div className='row my-3'>
                    <div className='col-12'>
                        <h4>Escribe la cantidad N de letras que tendra la sopa de letras, con una dimension de NxN</h4>
                    </div>
                    <div className='col-12 col-md-6'>
                        <input type='number' className='form-control' ref={ref} value={dimension} onChange={_handleChange} placeholder='Escriba aqui...' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <button className='btn btn-success w-100' onClick={memoizedCallback} >Hacer sopa de letras</button>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <AlphabetSoup array={array} dimension={count}/>
            </div>
            <Button name='callback' />
        </div>
    );
}
export default HookCallback;