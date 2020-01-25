const express = require('express');

const router = express.Router();

const adminRoutes = require('../Controller/admin');

router.post('/createDepartment', adminRoutes.createDepartment);
router.post('/createQuiz', adminRoutes.createQuiz);
router.post('/createQuestions', adminRoutes.createQuestion);

module.exports = router;