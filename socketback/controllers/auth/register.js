const User = require('../../schemas/User.schema');
const APIError = require("../../utils/error");
const {checkErrors} = require("../../utils/utils");
const {hashSync} = require("bcrypt");

module.exports = register = async (req, res, next) => {
    await checkErrors(req,res, next);

    const { name, email, password } = req.body;
    const isExists = await User.findOne({email: email});
    if(isExists) return next(APIError.BadRequests('User already exists'));

    const newUser = new User({
        name: name,
        email:email,
        password: hashSync(password, 5)});
    await newUser.save()
    return res.send(newUser)
}