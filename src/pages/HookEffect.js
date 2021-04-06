import React, {useState, useEffect, useRef} from 'react';
import ListMovies from './../components/ListMovies';
import Button from "../components/Button";
import WaitLoader from "../components/WaitLoader";

const API_KEY = '4287ad07';

export const HookEffect = () => {
    const ref = useRef(null);
    const [movie, setMovie] = useState('');
    const [listMovie, setListMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData() {
        if(movie !== ''){
            let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`;
            let response = await fetch(url);
            let data = await response.json();
            let {Search = []} = data;
            setListMovie(Search);
            return true;
        }
        return null;
    }

    const api = () => {
        if(fetchData() !== null){
            console.log('OK');
        }
    }

    useEffect( api, [movie]);

    /*useEffect( () => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
            .then(response => response.json())
            .then(results => {
                let {Search = []} = results
                setListMovie(Search);
            });
    }, [movie]);*/

    const _handleChange = () => {
        let {value} = ref.current;
        setMovie(value)
    }

    const changeLoading = (result) => setLoading(result);

    if(loading){
        return (<WaitLoader statusLoading={changeLoading} />);
    }else{
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 text-center'>
                        <h3>Hooks Effect | Buscador de peliculas</h3>
                    </div>
                    <div className='col-12 text-center'>
                        <p>Hooks Effect, State, Ref</p>
                    </div>
                    <div className='col-12'>
                        <h3>Buscar por el nombre de la pelicula</h3>
                    </div>
                    <div className='input-group mb-3'>
                        <input type='text' className='form-control' placeholder='Buscar pelicula' ref={ref} onChange={_handleChange.bind(ref)}/>
                    </div>
                </div>
                <div className='row my-3'>
                    {/*<Suspense fallback={ <div><Spinner color='success'/></div> }>*/}
                    <ListMovies listMovies={listMovie} />
                    {/*</Suspense>*/}
                </div>
                <Button name='effect' />
            </div>
        );
    }
}