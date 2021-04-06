import React, {useRef} from 'react';
import Counter from '../components/Counter';

export const HookImperativeHandle = () => {

    const ref = useRef(null);

    return (
        <>
            <div className='container'>
                <div className='row my-3'>
                    <div className='col-12'>
                        <div className='row justify-content-center'>
                            <h3>Hook Imperative Handle | Contador basico</h3>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='row justify-content-center'>
                            <p>Hook Ref, ImperativeHandle y ademas ForwardRef</p>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p>Normalmente se utiliza cuando se le asigna el valor de instancia del componente al que se adjunta.
                            Esto le permite interactuar con el elemento DOM directamente haciendo uso del useRef</p>
                        <p>useImperativeHandle es muy similar, pero te permite hacer dos cosas:</p>
                        <p>Proporciona control sobre el valor que se devuelve. En lugar de devolver el elemento de instancia,
                            indique explícitamente cuál será el valor devuelto. Le permite reemplazar funciones nativas con funciones propias,
                            permitiendo así efectos secundarios al comportamiento normal o un comportamiento diferente en conjunto.
                            Sin embargo, puede llamar a la función como quiera.
                            Puede haber muchas razones por las que desea que pueda hacer cualquiera de los anteriores;
                            es posible que no desee exponer propiedades nativas al elemento primario o tal vez desee cambiar el comportamiento de una función nativa.
                            Podría haber muchas razones. Sin embargo, rara vez se utiliza.useImperativeHandle</p>
                        <p>useImperativeHandle personaliza el valor de instancia que se expone a los componentes primarios cuando se utiliza ref</p>
                    </div>
                    <div className='col-12'>
                        <h4>Ejemplo</h4>
                    </div>
                    <div className='col-12'>
                        <p>En este ejemplo, el valor que obtendremos solo contendrá la función que declaramos en nuestro archivo.
                            No contendrá ninguna otra propiedad.
                            La función en sí también está 'personalizada' para comportarse de manera diferente de lo que normalmente cabría esperar.
                            Aquí, establece y desenfoca la entrada cuando se invoca useImperativeHandle</p>
                    </div>
                    <div className='col-12 code'>
                        {/*const MyInput = React.forwardRef((props, ref) => {
                            const [val, setVal] = React.useState('');
                            const inputRef = React.useRef();

                            React.useImperativeHandle(ref, () => ({
                            blur: () => {
                            document.title = val;
                            inputRef.current.blur();
                        }
                        }));

                            return (
                            <input
                            ref={inputRef}
                            val={val}
                            onChange={e => setVal(e.target.value)}
                            {...props}
                            />
                            );
                        });

                            const App = () => {
                            const ref = React.useRef(null);
                            const onBlur = () => {
                            console.log(ref.current); // Only contains one property!
                            ref.current.blur();
                        };

                            return <MyInput ref={ref} onBlur={onBlur} />;
                        };

                            ReactDOM.render(<App />, document.getElementById('app'));
                            <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.8.1/umd/react.production.min.js'></script>
                            <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.1/umd/react-dom.production.min.js'></script>
                            <div id='app'></div>*/}
                    </div>
                    <div className='col-12'>
                        <Counter ref={ref} />
                    </div>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-6'>
                                <button className='btn btn-success w-100 mx-2' onClick={() => ref.current.increment()}>Click index increment</button>
                            </div>
                            <div className='col-6'>
                                <button className='btn btn-warning w-100 mx-2' onClick={() => ref.current.restart()}>Click index re-start</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HookImperativeHandle;