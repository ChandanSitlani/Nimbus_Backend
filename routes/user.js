const express = require('express');

const router = express.Router();

const userRoutes = require('../Controller/user');

router.get('/getDepartments', userRoutes.getDepartment);
router.get('/getQuizzes', userRoutes.getQuizzes);
router.get('/getQuestions', userRoutes.getQuestions);

router.post('/verifyAnswers', userRoutes.verifyAnswer);

module.exports = router;