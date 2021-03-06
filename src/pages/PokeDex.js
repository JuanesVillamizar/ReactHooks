import React, {useState} from 'react';
import ListElementsPokeDex from "../components/ListElementsPokeDex";

export const PokeDex = () => {
    const [type, setType] = useState('pokemon');
    const [search, setSearch] = useState('');
    const [counter, setCounter] = useState(0);
    const [results, setResults] = useState([]);
    let stylesSearch = {position: 'fixed', backgroundColor: '#f0f0f0', zIndex: 10, top: 0}

    const style = {
        position: 'relative',
        flex: '1 1 auto',
        minWidth: 0,
        marginBottom: 0,
        display: 'block',
        width: '100%',
        height: 'calc(1.5em + .75rem + 2px)',
        padding: '.375rem .75rem',
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#495057',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid #ced4da',
        borderRadius: '.25rem',
        transition: 'border-color .15s ease-in-out,box-shadow .15s'
    }

    async function fetchData(url){
        const response = await fetch(url);
        const data = await response.json();
        let resultsAPI = data.results;
        if(resultsAPI !== undefined){
            if(resultsAPI.length > 0){
                setResults(resultsAPI);
                return 1
            }
        }else{
            alert('No se encontro ningun elemento que coincida con lo seleccionado');
            return null;
        }
        return null;
    }

    const _handleChange = (element) => {
        setCounter(0);
        setResults([]);
        let search = element.target.value;
        setType(search.toLowerCase());
    }

    const _handleChangeSearch = (element) => {
        let search = element.target.value;
        setSearch(search.toLowerCase());
    }

    const api = (url) => {
        if(fetchData(url) !== null){
            console.log('OK');
        }
    }

    const _handleClick = async () => {
        let url = '';
        if (search === ''){
            url = `https://pokeapi.co/api/v2/${type}?limit=${counter + 10}&offset=${counter}`;
            setCounter(counter+10);
        }else{
            url = `https://pokeapi.co/api/v2/${type}/${search}`;
        }
        api(url);
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h3>PokeDex | utilizando la API de pokemon</h3>
                </div>
                <div className="col-12 text-center">
                    <p>Podras buscar por tipo de elemento lo que quieras de pokemon, gracias a la API que hicieron en PokeDex</p>
                </div>
                <div className="col-12" id='divSearch' style={stylesSearch}>
                    <div className="row my-3">
                        <div className="col-12 col-md-6">
                            <select className="form-select" style={style} id='selectPokeDex' aria-label="Select PokeDex" onChange={_handleChange.bind(this)}>
                                <option disabled>--Seleccione una opcion--</option>
                                <option value="pokemon">Pokemones</option>
                                <option value="berry">Bayas</option>
                                <option value="contest-type">Concursos</option>
                                <option value="encounter-method">Encuentros</option>
                                <option value="evolution-chain">Evoluci??n</option>
                                <option value="generation">Juegos</option>
                                <option value="item">Art??culos</option>
                                <option value="location">Ubicaciones</option>
                                <option value="machine">M??quinas</option>
                                <option value="move">Movimientos</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder='Buscar elemento' aria-label="Search" aria-describedby="Search" onChange={_handleChangeSearch.bind(this)}/>
                                <button className="btn btn-outline-success" type="button" id="searchToType" onClick={_handleClick}>{search === '' ? 'Buscar en intervalos de 10' : 'Buscar'}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12" id='ListElements'>
                    <ListElementsPokeDex data={results} element={type} />
                </div>
            </div>
        </div>
    );
}
export default PokeDex;