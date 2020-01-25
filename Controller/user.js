const Quizzes = require('../Models/Quiz');
const Departments = require('../Models/Department');
const Questions = require('../Models/Question');
const Answers = require('../Models/answers');


const getDepartment = (req,res,next) => {
    Departments.find({$text:{$search:req.body.departmentName}}).then(result => {
        if(result){
            res.send(result[0]._id)
        }
    })
}

const getQuestions = (req,res,next) => {
    Questions.find({$text:{$search:req.body.quiz_id}}).then(result => {
        if(result){
            res.send(result);
        }
    })
}

const getQuizzes = (req,res,next) => {
    Quizzes.find({$text:{$search:req.body.department_id}}).then(result => {
        if(result){
            res.send(result);
        }
    })
}

const verifyAnswer = (req,res,next) => {
    Answers.find({$text:{$search:req.body.question_id}}).then(result => {
        if(result[0].correct == req.body.correct){//take care about how the input is taken (text or int)
            console.log('Answer matches');
        }
    });
}

exports.getDepartment = getDepartment;
exports.getQuestions = getQuestions;
exports.getQuizzes = getQuizzes;
exports.verifyAnswer = verifyAnswer;