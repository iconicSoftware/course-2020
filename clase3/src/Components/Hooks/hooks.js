import React, {useState, Fragment} from 'react';

const Hooks = () => {

    const [valor, setValor] = useState(10);
    const [valor2, setValor2] = useState(0);
    
    const [persona, setPersona] = useState([]);

    const setZero = () => {
        setValor(0);
        setValor2(0);
    }

    return (
       <Fragment>
           <h1>valor 1: {valor} </h1>
           <h1>valor 2: {valor2} </h1>
           <button
                onClick={() => setValor(valor + 1)}>
               Change value 1
           </button>
           <button
                onClick={() => setValor2(valor2 + 1)}>
               Change value 2
           </button>
           <button
                onClick={() => setZero()}>
               Change Zero
           </button>
           <pre>
               {JSON.stringify(persona,null,2)}
           </pre>
       </Fragment>
    );
}

export default Hooks;