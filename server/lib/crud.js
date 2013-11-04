var ShowsDB = require('./models/shows.js');

//GET para todos los Shows
var crud = {

	AllShows: function (req, res){
		ShowsDB.find(function (err, Shows){
			if(!err){
				res.send(Shows);
			} else {
				console.log('ERROR ' + err);
			}

		});
	},
	ShowOneID: function (req, res){
		ShowsDB.findById(req.params.id, function (err, Shows) {
			if(!err){
				res.send(Shows);
			} else {
				console.log('ERROR ' + err);
			}
		});
	},
	Show: function (req, res){
		ShowsDB.find({'showid': req.params.showid }, function (err, Shows) {
			if(!err){
				res.send(Shows);
			} else {
				console.log('ERROR ' + err);
			}
		});
	}    	

};

module.exports = crud;