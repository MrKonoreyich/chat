const express = require('express');
const router = express.Router();
const registerPath = require('../controllers/auth/register');
const {check} = require("express-validator/lib/middlewares/check");


router.post('/register',[
    check('name','Name cant be empty').notEmpty(),
    check('email', 'Email is incorrect!').notEmpty().isEmail(),
    check('password', 'Invalid password!').notEmpty().isLength({min: 5, max: 10})],
    registerPath)



module.exports = router;