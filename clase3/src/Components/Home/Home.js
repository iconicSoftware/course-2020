import React from 'react';

const Home = ({articulos, totalRegister}) => {

    return (
        <div>
            <h1>Home</h1>
            <h3>Total Registros: {totalRegister}</h3>
            {articulos.map((articulo) => {
                return <li>{articulo.author}</li>
            })}
        </div>
    );
}
export default Home;