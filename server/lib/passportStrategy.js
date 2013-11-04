var mongoose = require('mongoose'),
    //passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    users = mongoose.model('users');

module.exports = function (passport) {
    // serialize sessions
    passport.serializeUser(function(users, done) {
        done(null, users.id);
    })

    passport.deserializeUser(function(id, done) {
        users.findOne({ _id: id }, function (err, users) {
            done(err, users);
        })
    })

    // Use Local Strategy
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(email, password, done) {
            users.findOne({ email: email }, function (err, user) {
                if (err) { 
                    return done(err);
                }
                if (!user) {
                    return done(null, false, { message: 'Unknown user' });
                }
                if (!user.authenticate(password)) {
                    console.log(user.email + " failed to log in (invalid password)"); 
                    return done(null, false, { message: 'Invalid password' });
                }
                console.log(user.email + " logged in OK");

                return done(null, user);
            })
        }
    ))
};