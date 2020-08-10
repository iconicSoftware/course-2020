let { v4: uuidv4 } = require('uuid');

let candidates = []

const getCandidate = async (req, res) => {
    
    let id = req.params.id;

    let candidateFilter = candidates.filter((candidate) => candidate.id === id);

    return await res.status(200).send({
        candidate: candidateFilter
    })
};

const updateCandidate = async (req, res) => {
    
    let id = req.params.id;
    let candidateUpdated = req.body;

    for (let index = 0; index < candidates.length; index++) {
        if(candidates[index].id === id){
            candidates[index] = candidateUpdated;
            break;
        }
    }
    
    return await res.status(200).send({
        message: "the candidate was updated",
        candidate: candidateUpdated
    })
};

const getCandidates = async (req, res) => {

    return await res.status(200).send({
        candidates
    })
};

const getCandidatesPagination = async (req, res) => {

    let query = req.query;
    let limit = parseInt(query.limit);
    let offset = parseInt(query.offset);

    return await res.status(200).send({
        candidates : candidates.splice(offset, offset + limit),
        limit,
        offset
    })
};

const setCandidates = async (req, res) => {

    let candidate = req.body;

    candidate.id = uuidv4();

    candidates.push(candidate);
    res.setHeader("hola", "chau");
    return await res.status(201).send({
        message: "The candidate was created",
        candidate
    });
};

module.exports = {
    getCandidates,
    setCandidates,
    getCandidate,
    updateCandidate,
    getCandidatesPagination
}