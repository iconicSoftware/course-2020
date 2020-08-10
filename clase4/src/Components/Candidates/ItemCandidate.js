import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

import { withRouter } from 'react-router-dom';

import Swal from 'sweetalert2';

const ItemCandidate = ({candidate, history, setIsLoad}) => {

    const btnEliminarMarca = (id) => {
        Swal.fire({
            title: 'Estas seguro de eliminar?',
            text: "Una marca eliminada no se puede recuperar!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // consulta a la api para eliminar
                // service para eliminar un elemento
                console.log('Objeto eliminado');
                setIsLoad(false);
            }
        })
    }

    return (
        <tr>
            <th scope="row"></th>
            <td>{candidate.firstname}</td>
            <td>{candidate.lastname}</td>
            <td>{candidate.mail}</td>
            <td>{candidate.level}</td>
            <td>
                <button className="btn btn-outline-warning mr-1" 
                    onClick={() => history.push('/edit-candidate/1',{candidate:candidate})}><FontAwesomeIcon icon={faEdit}/> Edit</button>
                <button className="btn btn-outline-danger"
                    onClick={() => btnEliminarMarca(candidate.id)}>
                    <FontAwesomeIcon icon={faTrash}/> Delete
                </button>
            </td>
        </tr>
    );
}

export default withRouter(ItemCandidate);