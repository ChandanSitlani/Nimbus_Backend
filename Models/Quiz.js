const mongoose = require('mongoose');
const schema = mongoose.Schema;

const createQuiz = new schema({
    quizName:String,
    questionCount:Number,
    department_id:String
});

createQuiz.index({department_id:'text'});

const Quizzes = mongoose.model('Quizzes', createQuiz);

module.exports = Quizzes;