import React from 'react';

export const HookLayoutEffect = () => {
    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-12'>
                    <div className='row justify-content-center'>
                        <h3>Hook LayoutEffect | Sin ejercicio</h3>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='row justify-content-center'>
                        <p>No se realiza ejercicio porque es recomendado solo cuando el useEffect no
                            re-renderiza lo que tiene que renderizar despues de montarlo la primera vez</p>
                    </div>
                </div>
                <div className='col-12'>
                    <p>Aunque es similar en cierta medida, difiere en que se ejecutará después de que React ha confirmado actualizaciones al DOM.useEffect()</p>
                </div>
                <div className='col-12'>
                    <p>La firma es idéntica a , pero se activa sincrónicamente después de todas las mutaciones DOM.
                        Utilice esta opción para leer el diseño del DOM y volver a representarlo sincrónicamente.
                        Las actualizaciones programadas en el interior se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad de pintar.
                        useEffectuseLayoutEffect</p>
                </div>
                <div className='col-12'>
                    <h4>Ejemplo</h4>
                </div>
                <div className='col-12'>
                    <p>Supongamos que tiene un elemento absolutamente posicionado cuya altura puede variar y desea colocar otro debajo de él.
                        Puede usar para calcular las propiedades height y top del elemento primario y, a continuación,
                        aplicarlas a la propiedad superior del elemento secundario.divgetBoundingCLientRect()</p>
                    <p>Aquí usted querría utilizar en lugar de . Vea por qué en los ejemplos siguientes:useLayoutEffectuseEffect</p>
                </div>
                <div className='col-12'>
                    <h5>Con useEffect: (observe el comportamiento de salto)</h5>
                    <div className='code'>
                    {/*    const Message = ({boxRef, children}) => {*/}
                    {/*    const msgRef = React.useRef(null);*/}
                    {/*    React.useEffect(() => {*/}
                    {/*    const rect = boxRef.current.getBoundingClientRect();*/}
                    {/*    msgRef.current.style.top = `${rect.height + rect.top}px`;*/}
                    {/*}, []);*/}

                    {/*    return <span ref={msgRef} className='msg'>{children}</span>;*/}
                    {/*};*/}

                    {/*    const App = () => {*/}
                    {/*    const [show, setShow] = React.useState(false);*/}
                    {/*    const boxRef = React.useRef(null);*/}

                    {/*    return (*/}
                    {/*    <div>*/}
                    {/*    <div ref={boxRef} className='box' onClick={() => setShow(prev => !prev)}>Click me</div>*/}
                    {/*    {show && <Message boxRef={boxRef}>Foo bar baz</Message>}*/}
                    {/*    </div>*/}
                    {/*    );*/}
                    {/*};*/}
                    {/*    ReactDOM.render(<App />, document.getElementById('app'));*/}
                    </div>
                </div>
                <div className='col-12'>
                    <h5>Con useLayoutEffect:</h5>
                    <div className='code'>
                    {/*    const Message = ({boxRef, children}) => {*/}
                    {/*    const msgRef = React.useRef(null);*/}
                    {/*    React.useLayoutEffect(() => {*/}
                    {/*    const rect = boxRef.current.getBoundingClientRect();*/}
                    {/*    msgRef.current.style.top = `${rect.height + rect.top}px`;*/}
                    {/*}, []);*/}

                    {/*    return <span ref={msgRef} className='msg'>{children}</span>;*/}
                    {/*};*/}

                    {/*    const App = () => {*/}
                    {/*    const [show, setShow] = React.useState(false);*/}
                    {/*    const boxRef = React.useRef(null);*/}

                    {/*    return (*/}
                    {/*    <div>*/}
                    {/*    <div ref={boxRef} className='box' onClick={() => setShow(prev => !prev)}>Click me</div>*/}
                    {/*    {show && <Message boxRef={boxRef}>Foo bar baz</Message>}*/}
                    {/*    </div>*/}
                    {/*    );*/}
                    {/*};*/}
                    {/*<hr/>*/}
                    {/*    ReactDOM.render(<App />, document.getElementById('app'));*/}
                    {/*    .box {*/}
                    {/*    position: absolute;*/}
                    {/*    width: 100px;*/}
                    {/*    height: 100px;*/}
                    {/*    background: green;*/}
                    {/*    color: white;*/}
                    {/*}*/}

                    {/*    .msg {*/}
                    {/*    position: relative;*/}
                    {/*    border: 1px solid red;*/}
                    {/*}*/}
                    {/*    <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.8.1/umd/react.production.min.js'></script>*/}
                    {/*    <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.1/umd/react-dom.production.min.js'></script>*/}
                    {/*    <div id='app'></div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HookLayoutEffect;