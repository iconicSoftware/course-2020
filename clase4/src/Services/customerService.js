import axios from 'axios';

export const getCandidates = async () => {
    let headers = {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer "
    }
    return await axios.get('http://localhost:5001/api/v1/candidates',{headers});
};

export const setCandidates = async (candidate) => {
    let headers = {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer "
    }
    return await axios.post('http://localhost:5001/api/v1/candidates', candidate, {headers});
};

export const editCandidates = async (candidate) => {
    let headers = {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer "
    }
    return await axios.put(`http://localhost:5001/api/v1/candidates/${candidate.id}`, candidate, {headers});
};

