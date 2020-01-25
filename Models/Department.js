const mongoose = require('mongoose');
const schema = mongoose.Schema;

const createDepartment = new schema({
    departmentName:String
})

createDepartment.index({departmentName : 'text'});

const __departments__ = mongoose.model('Department', createDepartment);

module.exports = __departments__;