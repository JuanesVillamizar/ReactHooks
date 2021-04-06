import React, {useState} from 'react';
import {Spinner} from 'reactstrap';

export const Loading = () => {
    const colors = ['success', 'primary', 'warning', 'danger', 'dark', 'secondary', 'light', 'info'];
    const [state, setState] = useState(colors[Math.floor(Math.random() * (colors.length - 1))]);

    const _handleChange = () => {
        setState(colors[Math.floor(Math.random() * (colors.length - 1))])
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <Spinner color={state} onClick={_handleChange}/>
            </div>
        </div>
    );
}
export default Loading;