const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    name: String,
    email: String,
    passwordHash: String,
})

module.exports = model('User', UserSchema);