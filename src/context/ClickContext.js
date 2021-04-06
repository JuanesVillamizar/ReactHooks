import React, {useState} from 'react';

let ClickContext = React.createContext({start:0,state:0,ref:0,effect:0,context:0,memo:0,reducer:0,callback:0,color: ''});
let {Provider, Consumer} = ClickContext;

const ClickProvider = ({children}) => {
    let [clicks, setClicks] = useState({start:0,state:0,ref:0,effect:0,context:0,memo:0,reducer:0,callback:0,color: ''});

    const SetClickValueName = (name, value) => {
        if(value === ''){
            let objectState = {};
            value = clicks[name];
            objectState[name] = value + 1;
            setClicks({...clicks, ...objectState});
        }else{
            setClicks({...clicks, color:value});
        }
    }

    const restart = () => {
        setClicks({start:0,state:0,ref:0,effect:0,context:0,memo:0,reducer:0,callback:0,color: ''});
    }

    return (
        <Provider value={{clicks, SetClickValueName, restart}}>
            {children}
        </Provider>
    );

}
export {ClickProvider, Consumer as ClickConsumer, ClickContext};