import React from 'react';

export const HookDebugValue = () => {
    return (
        <div className='container'>
            <div className='row my-3'>
                <div className='col-12'>
                    <div className='row justify-content-center'>
                        <h3>Hook DebugValue | Sin ejercicio</h3>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='row justify-content-center'>
                        <p>Se usa para identificar componentes con la herramienta ReactDevTools.</p>
                    </div>
                </div>
                <div className='col-12'>
                    <p>A veces es posible que desee depurar ciertos valores o propiedades,
                        pero hacerlo puede requerir operaciones costosas que podrían afectar al rendimiento.</p>
                    <p>useDebugValue Solo se llama cuando React DevTools están abiertos y se inspecciona el gancho relacionado,
                        evitando cualquier impacto en el rendimiento.</p>
                    <p>useDebugValue se puede utilizar para mostrar una etiqueta para ganchos personalizados en React DevTools.</p>
                    <p>Personalmente nunca he usado este gancho sin embargo. Tal vez alguien en los comentarios puede dar alguna idea con un buen ejemplo.</p>
                </div>
            </div>
        </div>
    );
}
export default HookDebugValue;