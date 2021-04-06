import React, {useState, forwardRef, useImperativeHandle} from 'react';
const Counter = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        increment,
        restart
    }));

    const restart = () => setCount(0)

    const increment = () => setCount(count+1)

    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-6'>
                    <h1>Contador : {count}</h1>
                </div>
                <div className='col-6'>
                    <div className='row justify-content-between'>
                        <button className='btn btn-success mt-2' onClick={increment}>Click component count increment</button>
                        <button className='btn btn-warning mt-2' onClick={restart}>Click component count re-start</button>
                    </div>
                </div>
            </div>
        </div>
    );
});
export default Counter;