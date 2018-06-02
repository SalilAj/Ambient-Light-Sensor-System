var mongoose = require('mongoose');

var testingSchema = mongoose.Schema({

	testKey:{
		type:String,
		required: true
	}
});

var TEST = module.exports = mongoose.model('TEST', testingSchema, 'testCollection');

module.exports.getTestData = function(callback, limit){
	TEST.find(callback).limit();
}