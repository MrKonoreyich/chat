const {validationResult} = require("express-validator");
const APIError = require("../utils/error");

const checkErrors = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return next(APIError.BadRequests("Ошибка валидации", errors.array()))
};

module.exports = {checkErrors}