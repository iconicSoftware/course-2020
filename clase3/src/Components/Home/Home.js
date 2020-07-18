import React, { useState, useEffect } from 'react';

// services
import { getNew } from '../../Services/newService';

const Home = ({topic}) => {

    const [articulos, setArticulos] = useState([]);
    const [totalRegister, setTotalRegister] = useState(0);

    useEffect(() => {
        getNew(topic)
            .then(res => {
                setArticulos(res.data.articles);
                setTotalRegister(res.data.totalResults);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

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