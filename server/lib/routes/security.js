exports.addRoutes = function(app, security, passport) {
  // This route deals enables HTML5Mode by forwarding missing files to the index.html
  //app.get('/users', security.ListUsers);
  app.get('/user/:id', security.UserID);
  app.get('/user/:username', security.ListUser);
  app.post('/create',security.AddUser);
  //app.get('/create',security.AddUser);
  app.post('/login', function(req, res, next) {
      passport.authenticate('local', function(err, user, info) {
      	console.log('user ' + user);
      	console.log('info ' + info);
        console.log('err ' + err);
        if (err) { 
            return next(err); 
        }        
        if (!user) {
            //return res.send({ error: 1, message: "Bad Password" }, 200);
            $message = "Bad Password";
            return req.flash($message); 
        }
        console.log("User " + user.email + " found.");
        req.logIn(user, function(err) {
            if (err) { 
                return next(err); 
            }

            //res.send({ error: 0, user: user.email }, 201);
            res.redirect('/');      
        });
      })(req, res, next);
    });
}