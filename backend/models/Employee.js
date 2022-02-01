const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

var emailValid = (emailId) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(emailId);
}

// creating the schema for employee
const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'first name cannot be blank'],
        lowercase: true,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'last name cannot be blank'],
        lowercase: true,
        trim: true
    },
    emailId: {
        type: String,
        required: [true, 'email cannot be blank'],
        validate: [emailValid, 'email has to be in valid format'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please enter a valid email address'],
        lowercase: true,
        trim: true
    }
})

autoIncrement.initialize(mongoose.connection);
EmployeeSchema.plugin(autoIncrement.plugin, 'employee');
module.exports = mongoose.model('employee', EmployeeSchema);