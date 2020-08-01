import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons'

import { withRouter } from 'react-router-dom';

const AddCandidate = ({ history }) => {

    let skills = ['node js', 'react', 'angular']

    const [skillSelected, setSkillSelected] = useState([]);
    
    const [candidate, setCandidate] = useState({
        firstname: '',
        lastname: '',
        mail: '',
        level: ''
    });

    const handleCandidate = (e) => {
        setCandidate({
            ...candidate,
            [e.target.name] : e.target.value
        });
    }

    const handleSkill = (e) => {
        if(e.target.checked === true) {
            setSkillSelected(
                [...skillSelected,
                e.target.value]
                );
        }else{
            let filterSkill = skillSelected.filter((skill) => skill !== e.target.value);
            setSkillSelected(filterSkill);
        }
    };

    const submitCandidate = (e) => {
        e.preventDefault();

        let candidateNew = {
            ...candidate,
            skills: skillSelected
        }
        
        // services

        console.log(candidateNew);


    }

    return (
        <div className="mt-2">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">New Candidate</li>
                </ol>
            </nav>

            <div className="text-left">
                <button className="btn btn-info m-1"
                    onClick={() => history.goBack()}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back
                </button>
            </div>

            <form className="border border-black m-2 p-2" onSubmit={submitCandidate}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputNombre">FirstName</label>
                        <div className="input-group-prepend">
                            <input
                                type="text"
                                id="inputNombre"
                                name="firstname"
                                className="form-control"
                                onChange={(e) => handleCandidate(e)}
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
                                onChange={(e) => handleCandidate(e)}
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
                                className="form-control"
                                onChange={(e) => handleCandidate(e)}
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
                                onChange={(e) => handleCandidate(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-row border border-black p-1 m-1">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputNombre">Skills</label>
                        {skills.map((skill) => {
                            return(
                                <div class="form-check">
                                    <input type="checkbox" 
                                           class="form-check-input" id="exampleCheck1" value={skill}
                                           onChange={handleSkill}/>
                                    <label class="form-check-label" for="exampleCheck1">{skill}</label>
                                </div>
                            );  
                        })}
                    </div>
                   
                </div>
                <div className="form text-center">
                    <button className="btn btn-outline-info">
                        Create Customer
                    </button>
                </div>
            </form>

        </div>
            );
        }
        
export default withRouter(AddCandidate);