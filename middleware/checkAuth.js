/**
 * Created by Maksim on 15.08.2017.
 */
var HttpError = require('error').HttpError;

module.exports = function(req, res, next) {
    if (!req.session.user) {
        return next(new HttpError(401, "Вы не авторизованы"));
    }

    next();}