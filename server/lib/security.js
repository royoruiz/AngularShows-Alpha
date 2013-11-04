var users = require('./models/users');

//GET para todos los Shows
var security = {

	ListUsers: function (req, res){
		users.find(function (err, users){
			if(!err){
				res.send(users);
			} else {
				console.log('ERROR ' + err);
			}

		});
	},
	UserID: function (req, res){
		users.findById(req.params.id, function (err, users) {
			if(!err){
				res.send(users);
			} else {
				console.log('ERROR ' + err);
			}
		});
	},
	ListUser: function (req, res){
		users.find({'username': req.params.username }, function (err, users) {
			if(!err){
				res.send(users);
			} else {
				console.log('ERROR ' + err);
			}
		});
	},
	AddUser: function (req, res){

  		var user = new users(req.body);

  		user.save(function(err) {
  			if(!err) {
  				console.log('Created');
  				res.redirect('/');
  			} else {
  				console.log('ERROR: ' + err);
  				//next(err);
  				req.flash(err);
  				//res.send(err);
  				res.redirect('create');
  			}
  		});
  		
	}    	

};

module.exports = security;