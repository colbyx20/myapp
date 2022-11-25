const{model,Schema} = require('mongoose');

const userTestSchema = new Schema({

    firstname: String,
    lastname: String,
    email: String,
    login: String,
    password: String,
    group: String
});

module.exports = model('User',userTestSchema);