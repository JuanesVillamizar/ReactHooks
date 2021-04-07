import React, {useState} from 'react';
import PokeDexElement from "./PokeDexElement";

export const ListElementsPokeDex = ({element, data}) => {
    const [names] = useState({
        pokemon: 'Pokemon',
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
                        {data.map((elementSelected, index) => <PokeDexElement key={index} name={elementSelected.name.toUpperCase()} urlAPI={elementSelected.url} type={names[element.replace('-','_')]}/>)}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ListElementsPokeDex;