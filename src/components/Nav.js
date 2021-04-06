import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {MainA, MainBar} from './ComponentsStyles';
import {UserContext} from '../context/UserContext';

export const Nav = () => {
    const {user} = useContext(UserContext);
    return (
        <ul className='nav justify-content-center' style={MainBar}>
            <li className='nav-item'>
                <Link to='/' className='nav-link active' style={MainA} aria-current='page'>Start</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookState' style={MainA} className='nav-link'>Hook State</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookRef' style={MainA} className='nav-link'>Hook Ref</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookEffect' style={MainA} className='nav-link'>Hook Effect</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookContext' style={MainA} className='nav-link'>Hook Context</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookMemo' style={MainA} className='nav-link'>Hook Memo</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookReducer' style={MainA} className='nav-link'>Hook Reducer</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookCallback' style={MainA} className='nav-link'>Hook Callback</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookImperativeHandle' style={MainA} className='nav-link'>Hook Imperative Handle</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookLayoutEffect' style={MainA} className='nav-link'>Hook Layout Effect</Link>
            </li>
            <li className='nav-item' >
                <Link to='/HookDebugValue' style={MainA} className='nav-link'>Hook Debug Value</Link>
            </li>
            <li className='nav-item' >
                <Link to='/PokeDex' style={MainA} className='nav-link'>PokeDex</Link>
            </li>
            <li className='nav-item' >
                <Link to='/Forms' style={MainA} className='nav-link'>Forms</Link>
            </li>
            {
                user.login &&
                <li className='nav-item' >
                        <Link to='#' style={MainA} className='nav-link'>{user.name}</Link>
                </li>
            }
        </ul>
    );
}
export default Nav;