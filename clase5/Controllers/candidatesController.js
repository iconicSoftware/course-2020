
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

const getCandidates = async (req, res) => {
    return await res.status(200).send({
        candidates
    })
};

const setCandidates = async (req, res) => {

    let candidate = req.body.candidate;

    
    //candidates.push(candidate);
    res.setHeader('hola', "chau");
    return await res.status(200).send({
        message: "The candidate was created"
    });
};

module.exports = {
    getCandidates,
    setCandidates
}