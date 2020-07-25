import React from 'react';

import ItemCandidate from './ItemCandidate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

import { withRouter } from 'react-router-dom';

const Candidates = ({history}) => {

    let candidates = [
        {
            firstname: 'agustin',
            lastname: 'decima',
            mail: 'agudecima@gmail.com',
            level: 'Ssr'
        },
        {
            firstname: 'luciano',
            lastname: 'decima',
            mail: 'lucho@gmail.com',
            level: 'Trainee'
        },
        {
            firstname: 'pepe',
            lastname: 'saenz',
            mail: 'pp@gmail.com',
            level: 'Junior'
        }
    ]

    return (
        <div className="mt-2">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Candidates 
                    </li>
                </ol>
            </nav>

            <button className="btn btn-success"
                    onClick={() => history.push('/add-candidate')}>
                            <FontAwesomeIcon icon={faPlus}/> Add
            </button>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Level</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidato, index) => {
                        return <ItemCandidate key={index} candidate={candidato}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(Candidates);