import axios from 'axios';

export const getCandidates = async () => {
    return await axios.get('http://localhost:5000/api/v1/candidates');
};

export const setCandidates = async (candidate) => {
    return await axios.post('http://localhost:5000/api/v1/customer', candidate);
};

