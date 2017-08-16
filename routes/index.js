var express = require('express');
var router = express.Router();
var User = require('../model/US').User;
var AuthError = require('../model/US').AuthError;
var async = require('async');
var mongoose = require ('mongoose');



/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index');

    res.post = function(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;

        User.authorize(username, password, function(err, user) {
            if (err) {
                if (err instanceof AuthError) {
                    return next(new HttpError(403, err.message));
                } else {
                    return next(err);
                }
            }



        });

    };
next();
});
router.get('/user', function(req, res, next){
   res.render('user');


});
module.exports = router;