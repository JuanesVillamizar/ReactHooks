import React, {useState} from 'react';

let UserContext = React.createContext({ name: '', lastName: '', age: 0, profession: '', color:'#000000', person: '', affair: '', email: '', msg: '', login: false });
let {Provider, Consumer} = UserContext;

const UserProvider = ({children}) => {
    let [user, setUser] = useState({});

    const Login = ({name, lastName, age, profession, color}) => {
        setUser({name, lastName, age, profession, color, login: true});
    }

    const LoginAdditional = (user) => {
        setUser({...user, login: true});
    }

    const Logout = () => {
        setUser({ name: '', lastName: '', color:'#000000', login: false });
    }

    return (
        <Provider value={{user, Login, Logout, LoginAdditional}}>
            {children}
        </Provider>
    );
}

export {UserProvider, Consumer as UserConsumer, UserContext};