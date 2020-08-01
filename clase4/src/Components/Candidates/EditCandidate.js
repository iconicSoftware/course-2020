import React, {useRef} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons'

import { withRouter } from 'react-router-dom';

// props
const EditCandidate = ({ history, location }) => {

    const candidate = location.state.candidate;

    let firstnameRef = useRef('');
    let lastnameRef = useRef('');

    const submitCandidate = (e) => {
        e.preventDefault();
       
        let candidateEdit = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value
        }

        console.log(candidateEdit);

    }

    return (
        <div className="mt-2">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Edit Candidate</li>
                </ol>
            </nav>

            <div className="text-left">
                <button className="btn btn-info m-1"
                    onClick={() => history.goBack()}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back
                </button>
            </div>

            <div className="border border-black m-2 p-2">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">FirstName</label>
                        <div className="input-group-prepend">
                            <input
                                type="text"
                                id="inputNombre"
                                name="firstname"
                                className="form-control"
                                defaultValue={candidate.firstname}
                                ref={firstnameRef}
                            />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">LastName</label>
                        <div className="input-group-prepend">
                            <input
                                type="text"
                                id="inputNombre"
                                name="lastname"
                                className="form-control"
                                defaultValue={candidate.lastname}
                                ref={lastnameRef}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">Mail</label>
                        <div className="input-group-prepend">
                            <input
                                type="text"
                                id="inputNombre"
                                name="mail"
                                defaultValue={candidate.mail}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">Level</label>
                        <div className="input-group-prepend">
                            <input
                                type="text"
                                id="inputNombre"
                                name="level"
                                className="form-control"
                                defaultValue={candidate.level}
                            />
                        </div>
                    </div>
                </div>
                
                <div className="form text-center">
                    <button className="btn btn-outline-info"
                        onClick={(e) => submitCandidate(e)}>
                        Edit Customer
                    </button>
                </div>
            </div>

        </div>
            );
        }
        
export default withRouter(EditCandidate);