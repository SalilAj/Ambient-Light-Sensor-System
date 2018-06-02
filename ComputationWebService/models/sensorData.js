var mongoose = require('mongoose');

var sensorDataSchema = mongoose.Schema({
	lattitude:{
		type:String,
	},
	longitude:{
		type:String,
	},
	luxValue:{
		type:String,
	}
});

var Sensor = module.exports = mongoose.model('Sensor',sensorDataSchema);

module.exports.getSensorData = function(callback, limit){
	Sensor.find(callback).limit(limit);

}