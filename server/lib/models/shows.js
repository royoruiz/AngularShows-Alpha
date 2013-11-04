var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Episodes = new Schema({
	epnum		: { type: String },
	seasonnum 	: { type: String },
	prodnum		: { type: String },
	airdate		: { type: String },
	link		: { type: String },
	title		: { type: String },	
	screencap	: { type: String }

});

var EpisodeListed = new Schema({
	no			: { type: String },
	episodes 	: [Episodes]

});

var Shows = new Schema({
	name 			: { type: String },
	totalseasons	: { type: String },	
	showid			: { type: String },	 
	showlink		: { type: String },	
	started			: { type: String },	
	ended			: { type: String },	
	image			: { type: String },	
	origin_country	: { type: String },	
	status			: { type: String },	
	classification	: { type: String },	
	genres			: { type: String },
	runtime			: { type: String },	
	network			: { type :String }, 
	airtime			: { type: String },	
	airday			: { type: String },	
	timezone		: { type: String },	
	akas			: { type: String },
	episodelist 	: [EpisodeListed]

});

module.exports = mongoose.model('Shows', Shows);
