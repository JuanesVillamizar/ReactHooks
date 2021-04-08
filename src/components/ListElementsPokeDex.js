import React, {useState} from 'react';
import PokeDexElementPokemon from "./PokeDexElementPokemon";
import PokeDexElementBerry from "./PokeDexElementBerry";

export const ListElementsPokeDex = ({element, data}) => {
    const [names] = useState({
        pokemon: 'Pokemones',
        berry: 'Bayas',
        contest_type: 'Concursos',
        encounter_method: 'Encuentros',
        evolution_chain: 'Evolución',
        generation: 'Juegos',
        item: 'Artículos',
        location: 'Ubicaciones',
        machine: 'Máquinas',
        move: 'Movimientos',
    })

    return (
        <div className='container p-5 bg-light'>
            <div className="row">
                <div className="col-12 text-center">
                    <h3>{names[element.replace('-','_')]} { data.length === 0 && 'no hay resultados' }</h3>
                </div>
                <div className="col-12">
                    <div className="row">
                        {names[element.replace('-','_')] === 'Pokemones' && data.map((elementSelected, index) => <PokeDexElementPokemon key={index} urlAPI={elementSelected.url} type={names[element.replace('-','_')]}/>)}
                        {names[element.replace('-','_')] === 'Bayas' && data.map((elementSelected, index) => <PokeDexElementBerry key={index} urlAPI={elementSelected.url} type={names[element.replace('-','_')]}/>)}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ListElementsPokeDex;