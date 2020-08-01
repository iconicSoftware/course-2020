let express = require('express');
let router = express.Router();
let candidatesController = require('../Controllers/candidatesController');

// POST - PUT - GET - DELETE - UPDATE - OPTIONS

router.get('/candidates', candidatesController.getCandidates);
router.post('/candidates', candidatesController.setCandidates);

module.exports = router;