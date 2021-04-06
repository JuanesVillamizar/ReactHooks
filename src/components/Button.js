import React,{useContext} from 'react';
import {ClickContext} from '../context/ClickContext';

export const Button = ({name, value = ''}) => {
    const {clicks, SetClickValueName} = useContext(ClickContext);

    const _handleClicks = () => {
        SetClickValueName(name, value);
        console.log(clicks);
    }

    return (
        <div className="row my-3">
            <div className="col-12 my-3">
                <button className={'btn btn-outline-success w-100 text-capitalize text-center'} onClick={_handleClicks}>Product {name}</button>
            </div>
        </div>
    );
}
export default Button;