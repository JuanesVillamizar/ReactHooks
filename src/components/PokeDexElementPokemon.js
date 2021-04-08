import React, {useState, useEffect} from 'react';
import {Spinner} from "reactstrap";

const PokeDexElementPokemon = ({urlAPI, type}) => {

    const [pokemon, setPokemon] = useState({});
    const [count, setCount] = useState(0);
    let colors = ['danger', 'warning', 'success', 'dark', 'info', 'primary', 'secondary', 'light'];
    let attributes = {
        poison: 'Veneno',
        grass: 'Hierba',
        fire: 'Fuego',
        water: 'Agua',
        flying: 'Volador',
        electric: 'Electrico',
        bug: 'Insecto',
        ground: 'Tierra',
        psychic: 'Psíquico',
        normal: 'Normal',
        fighting: 'Lucha',
        steel: 'Acero',
        ice: 'Hielo',
        rock: 'Roca',
        dark: 'Oscuridad',
        fairy: 'Hada',
        ghost: 'Fantasma',
        dragon: 'Dragon',
    };

    const fetchData = async () => {
        let response = await fetch(urlAPI);
        let data = await response.json();
        setPokemon(data);
        setCount(1);
    }

    const getRandomArbitrary = (max) => {
        return Math.round(Math.random() * (max - 0));
    }

    const api = () => {
        if(count === 0){
            fetchData();
        }
    }

    useEffect(api, [pokemon]);

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
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={`${type} ${pokemon.name}`} height='100' width='100'/>
                </div>
                <div className="col-12 col-md-6">
                    <span className='text-success'>{pokemon.name.toUpperCase()}</span>
                    <br/>
                    <span className='text-muted'>{type}</span>
                    <br/>
                    <span className='text-muted'>{
                        pokemon.types.map((type, index) => {
                            return attributes[type.type.name] + (pokemon.types.length === index + 1 ? '. ': ', ')
                        })
                    }</span>
                </div>
            </div>
        </div>
    );
}

export default PokeDexElementPokemon;