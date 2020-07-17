import React from 'react';

function Ecma() {

    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const objectAssign = () => {
        return Object.assign(target, source);
    }

    const personas1 = [
        {
            name: 'pepe',
            lastname: 'santos',
            age: 22
        },
        {
            name: 'agu',
            lastname: 'decima',
            age: 24
        },
        {
            name: 'lucho',
            lastname: 'barboza',
            age: 22
        },
        {
            name: 'javi',
            lastname: 'voss',
            age: 34
        }
    ]

    const personas2 = [
        {
            name: 'rada',
            lastname: 'decima',
            age: 45
        },
        {
            name: 'lucho',
            lastname: 'cortes',
            age: 24
        }
    ]

    const spreadOperators = () => {
        return [...personas1, ...personas2];
    } 

    const filterByAge = (age) => {
        return spreadOperators().filter(persona => persona.age > age);
    }

    const findObject = () => {
        return spreadOperators().find(persona => persona.name === "javi");
    }

    
    const frutas = [
        'banana', 'pera', 'sandia', 'manzana'
    ]

    // RETORNA -1 SI EL ELEMENTO NO EXISTE, SINO LA POSICION EN QUE SE ENCUENTRA LA BUSQUEDA
    const findByIndex = (fruta) => {
        return frutas.indexOf(fruta);
    }

    const player1 = {
        name: 'Messi',
        speed: 99,
        teams: [
            'Barça'
        ]
    }

    const player2 = {
        name: 'Ronaldo',
        speed: 99,
        teams: [
            'Manchester',
            'Madrid',
            'Juventus'
        ]
    }

    // desestructuracion de dos objetos
    const {name, speed, teams} = player1
    const {name: nombre, speed: velocidad, teams: equipos} = player2


    return (
        <p>
        <pre>
            {/* {console.log(nombre, velocidad, equipos)} */} 
            {/* {JSON.stringify(findByIndex("pera"),null,2)} */}
            {/* {
                spreadOperators().map(persona => {
                    return JSON.stringify(persona, null, 2);
                })
            } */}
        </pre>
        </p>
    );

}

export default Ecma;
