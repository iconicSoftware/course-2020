import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

const ItemCandidate = ({candidate}) => {
    return (
        <tr>
            <th scope="row"></th>
            <td>{candidate.firstname}</td>
            <td>{candidate.lastname}</td>
            <td>{candidate.mail}</td>
            <td>{candidate.level}</td>
            <td>
                <button className="btn btn-outline-warning mr-1"><FontAwesomeIcon icon={faEdit}/> Edit</button>
                <button className="btn btn-outline-danger"><FontAwesomeIcon icon={faTrash}/> Delete</button>
            </td>
        </tr>
    );
}

export default ItemCandidate;