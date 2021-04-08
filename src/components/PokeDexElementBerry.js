import React, {useState, useEffect} from 'react';
import {Spinner} from "reactstrap";

const PokeDexElementBerry = ({urlAPI, type}) => {
    const [berry, setBerry] = useState({});
    const [count, setCount] = useState(0);
    let colors = ['danger', 'warning', 'success', 'dark', 'info', 'primary', 'secondary', 'light'];

    const getRandomArbitrary = (max) => {
        return Math.round(Math.random() * (max - 0));
    }

    const fetchData = async () => {
        let response = await fetch(urlAPI);
        let data = await response.json();
        let responseItem = await fetch(data.item.url);
        let dataItem = await responseItem.json();
        setBerry(dataItem);
        setCount(1);
    }
    const api = () => {
        if(count === 0){
            fetchData();
        }
    }

    useEffect(api, [berry]);

    if(count === 0){
        return (
            <div className='m-3'>
                <Spinner color={colors[getRandomArbitrary(colors.length - 1)]} />
            </div>
        );
    }
    return (
        <div className='col-12 col-md-6 col-lg-3 p-3 my-1 bg-white text-center'>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={berry.sprites.default} alt={`${type} ${berry.name}`} height='100' width='100'/>
                </div>
                <div className="col-12 col-md-6">
                    <span className='text-success'>{berry.name.toUpperCase()}</span>
                    <br/>
                    <span className='text-muted'>{type}</span>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default PokeDexElementBerry;