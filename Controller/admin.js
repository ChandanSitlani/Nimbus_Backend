const Quizzes = require('../Models/Quiz');
const Departments = require('../Models/Department');
const Questions = require('../Models/Question');
const Answers = require('../Models/answers');

const createDepartment =  (req,res,next) => {
    Departments.create({
        departmentName:req.body.departmentName
    }).then(result => {
        console.log('Department Created Successfully');
    })
}

const createQuestion = (req,res,next) => {
    Questions.create({
        question:req.body.question,
        option1:req.body.option1,
        option2:req.body.option2,
        option3:req.body.option3,
        option4:req.body.option4,
        quiz_id:req.body.quiz_id
    }).then(result => {
        Answers.create({
            question_id: result._id,
            correct:req.body.correct
        }).then(result => {
            console.log('Questions created');
        })
    })
}

const createQuiz = (req,res,next) => {
    Quizzes.create({
        quizName:req.body.quizName,
        questionCount:0,
        department_id:req.body.department_id
    }).then(result => {
        console.log('Quiz created');
    })
}



exports.createDepartment = createDepartment;
exports.createQuiz = createQuiz;
exports.createQuestion = createQuestion;
