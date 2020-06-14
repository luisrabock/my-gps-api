const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    picture: String,
});

module.exports = mongoose.model('User', UsersSchema);
