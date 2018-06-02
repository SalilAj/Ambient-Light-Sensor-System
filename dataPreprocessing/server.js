const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var OSPoint = require('ospoint');
var point = new OSPoint("NORTHINGS", "EASTINGS");

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')


const MongoClient = require('mongodb').MongoClient
var db

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

  	if (err) return console.log(err);

  	db = client.db('UrbanComputing')

  	db.collection('StreetLightLoc').find({"EASTING":{$ne:0}}).toArray((err, results) => {
  				if (err) return console.log(err);

  				console.log(results[0]);

  				for (i = 0; i < results.length; i++) {
    				console.log("EASTING " + results[i].EASTING);
    				console.log("NORTHING " + results[i].NORTHING);
    				console.log("ID: " + String(results[i].ID));


    				point = new OSPoint(String(results[i].NORTHING), String(results[i].EASTING));
    				var result = point.toWGS84("irish_national_grid");

    				console.log("LAT: " + result.latitude);
    				console.log("LONG: " + result.longitude);
    				console.log("lat: " + result.lat);    				
    				var asd = db.collection('StreetLightLoc').update({"ID":results[i].ID},{$set:{"lat":result.latitude,"lon":result.longitude}});
				} 
				console.log(results.length);

  			});

  	})



