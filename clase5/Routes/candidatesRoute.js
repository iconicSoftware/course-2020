let express = require('express');
let router = express.Router();
let candidatesController = require('../Controllers/candidatesController');
let auth = require('../Middleware/auth');

// POST - PUT - GET - DELETE - UPDATE - OPTIONS
router.get('/candidates/pagination',candidatesController.getCandidatesPagination);
router.get('/candidates', [auth.jwtAuthorization],candidatesController.getCandidates);
router.get('/candidates/:id',candidatesController.getCandidate);
router.put('/candidates/:id',candidatesController.updateCandidate);
router.post('/candidates', candidatesController.setCandidates);

module.exports = router;