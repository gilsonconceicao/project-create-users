const mongoose = require('mongoose'); 

const Users = mongoose.model('Users', {
    name: String, 
    lastname: String, 
    email: String
})

module.exports = Users; 