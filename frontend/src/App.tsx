import { useState, useEffect } from "react";

const App = () => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        
        console.log('Iniciando componente')
    }, [contador]);

    return (
        <div className="container mt-5">
            <button className="btn btn-primary me-5" onClick={() => setContador(contador + 1)}>
                +
            </button>
            <span>
                {contador}
            </span>
            <button className="btn btn-primary ms-5" onClick={() => setContador(contador - 1)}>
                -
            </button>
            {contador > 5 && <h1>O valor é maior que 5</h1>}
            {contador <= 5 && <h1>O valor é menor ou igual a 5</h1>}
        </div>
    )
}

export default App;