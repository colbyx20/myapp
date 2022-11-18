const{model,Schema} = require('mongoose');

const professorSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String,
    privilege: Number,
    fieldOfInterest:String,
    schedule: Array,
    appointments: Array
});

module.exports = model('Professor',professorSchema);