var mongoose = require('mongoose');

var streetLightData = mongoose.Schema({

	"ID" :{
		type:String,
		required: true
	},
	"Pole no. on street" : {
		type:String,
		required: true
	},
	"Street Ids" :{
		type:String,
		required: true
	},
	"Outside House no." : {
		type:String,
		required: true
	},
	"Poe Location" : {
		type:String,
		required: true
	},
	"Opposite House no." : {
		type:String,
		required: true
	},
	"lat" : {
		type:Number,
		required: true
	},
	"lon" : {
		type:Number,
		required: true	
	}
});

var StreetLights = module.exports = mongoose.model('StreetLights', streetLightData, 'StreetLightLoc');

module.exports.getStreetLightData = function(callback, limit){
	StreetLights.find(callback).limit(2000);

}