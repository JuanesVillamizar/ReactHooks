import React, {useState} from 'react';

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
        <div className='container'>
            <div className="row">
                <div className="col-12 text-center">
                    <h3>{names[element.replace('-','_')]} { data.length !== 0 ? 'si hay resultados' : 'no hay resultados' }</h3>
                </div>
                <div className="col-12">

                </div>
            </div>
        </div>
    );

}
export default ListElementsPokeDex;