const mongoose = require('mongoose');


const UsersSchema = new mongoose.Schema({
 nameUser: String
})


const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;