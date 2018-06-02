const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const firebase = require("firebase");

var data;

var config = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  storageBucket: "XXX"
};

firebase.initializeApp(config);

var dbRefObj = firebase.database().ref(); //remove the child

app.use(bodyParser.json());

StreetLights = require('./models/streetLightData');
TEST = require('./models/test');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/UrbanComputing');
var db = mongoose.connection;

// 
app.get('/', (req, res) => {
	res.send('Please use /api/getStreetLightData or /api/getSensorData');
});

app.get('/api/getStreetLightData', (req, res) => {
	StreetLights.getStreetLightData((err,sdata) => {
		if(err){
			console.log(err);
		}
		res.json(data);
	})
});

app.get('/api/getSensorData', (req, res) => {
	dbRefObj.on("value", function(snapshot) {
  		res.json(getIndividualValues(snapshot.val()));
	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
	});
});

app.get('/api/getStreetLightsToSwtichOn', (req, res) => {

	dbRefObj.on("value", function(snapshot) {
		var SensorResult = getIndividualValues(snapshot.val());
		var StreetLigthArr = [];

		StreetLights.getStreetLightData((err,data) => {
			if(err){
				console.log(err);
			}
			
			for(var j =0 ; j<SensorResult.length; j++)
			{
				console.log("times: " + SensorResult[j]);
				if(8.0 <= SensorResult[j].luxValue )
				{
					console.log(": " + SensorResult[j].luxValue);
					for(var i=0; i < data.length; i++)
					{
						if(data[i]['lat'] == SensorResult[j]['lattitude'] && data[i]['lon'] == data[i][j]['longitude'])
						{
							data[i]['switchOn'] = true;
							StreetLigthArr.push(data[i]);
						}
					}
				}
			}
		})
		res.json(StreetLigthArr);
	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
	});


});

function getIndividualValues(obj){

	var SensorValues = [];
	for (var key in obj) {
  		if (obj.hasOwnProperty(key)) {
    		var val = obj[key];
    		SensorValues.push(val);
  		}
	}
	return SensorValues
}

app.listen(8001);
console.log('Running on port 8001');
