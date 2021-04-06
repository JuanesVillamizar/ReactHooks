import React, {useState, useMemo} from 'react';
import ListLetters from '../components/ListLetters';
import Button from "../components/Button";

export const HookMemo = () => {
    const [word, setWord] = useState('');
    const [alphabet, setAlphabet] = useState({});

    const _handleSetWord = (element) => {
        setWord(element.target.value)
    }

    useMemo(() => {
        let count = word.length;
        let letters = {}
        for(let x = 0; x < count; x++){
            let letter = word[x].toLowerCase();
            if (letter !== ' '){
                if (letters.hasOwnProperty(letter)){
                    letters[letter] += 1;
                }else{
                    letters[letter] = 1;
                }
            }
        }
        setAlphabet(letters)
    }, [word]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h3>Hook Memo | Juego de letras</h3>
                </div>
                <div className='col-12 text-center'>
                    <p>Hook Memo, State</p>
                </div>
                <div className='col-12 text-center'>
                    <h4>Aqui veremos cuantas letras hay y se repiten en una palabra o oracion</h4>
                </div>
                <div className='col-12'>
                    <div className='my-3'>
                        <h4>Escribe una palabra:</h4>
                        <input type='text' className='form-control' id='color' value={word} onChange={_handleSetWord.bind(this)}/>
                    </div>
                </div>
                {/*<div className='col-12 col-md-6 d-flex flex-column justify-content-end pb-3'>*/}
                {/*    <button className='btn btn-success w-100' onClick={() => setCalculate(!calculate)}>Calcular</button>*/}
                {/*</div>*/}
                <div className='col-12'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <ListLetters listLetters={alphabet} />
                        </div>
                    </div>
                </div>
            </div>
            <Button name='memo' />
        </div>
    );
}
export default HookMemo;