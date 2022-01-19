const express = require('express');
const router = express.Router();
const controller = require('../controller/index.js');

// *************
// Routing
// *************
router.get('/questions', controller.getProductQuestions);
router.post('/questions', controller.postNewQuestion);
router.put('/questions/helpful', controller.updateHelpfulness);

module.exports = router;