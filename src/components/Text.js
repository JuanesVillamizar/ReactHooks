import React, {useState} from 'react';

export const Text = () => {
    const [state, setState] = useState(0);
    const colors = ['text-danger', 'text-warning', 'text-success', 'text-dark', 'text-info', 'text-primary', 'text-secondary', 'text-light'];
    // const text = ['O', 'N', 'E', ' ', 'D', 'R', 'E', 'A', 'M', ' ', 'O', 'N', 'E', ' ', 'W', 'I', 'S', 'H'];
    const text = 'ONE_DREAM_ONE_WISH';

    const getRandomArbitrary = (max) => {
        return Math.round(Math.random() * (max - 0));
    }

    const _handleClick = () => {
        setState(state+1)
    }

    return (
        <div className='row justify-content-center mx-5' style={{backgroundColor: '#4e4e4e'}} onClick={_handleClick}>
            {
                text.split('').map((letter, index) => {
                    let color = colors[getRandomArbitrary(colors.length - 1)];
                    return (
                        <h3 key={index} className={color} >
                            {letter}
                        </h3>
                    );
                })
            }
        </div>
        // <div style={{backgroundColor: '#f0f0f0'}} className='col-12 text-center'>
        //     {
        //         text.forEach((letter) => {
        //             console.log(`<span className="${colors[getRandomArbitrary(colors.length - 1)]}">${letter}</span>`);
        //         })
        //     }
        // </div>
        // <div style={{backgroundColor: '#f0f0f0'}} className='row text-center'>
        //     {
        //         text.forEach(letter => <Letter value={letter} colorText={colors[getRandomArbitrary(colors.length - 1)]}/>)
        //     }
        // </div>
    );
}
export default Text;