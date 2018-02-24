# Ambient-Light-Sensor-System
Considering the 24/7 working culture of Urban Cities all over the world, it has become a priority to make sure that ample visibility is available in every corner of the city. Even though street lights are present on every main road there are always some parts of the city where, due to lack of street lights, the streets and alleys are pitch dark. Such places are prone to crimes and accidents. But identifying such places in a very large city can be a cumbersome manual work. Thus, leveraging the use of the ambient light sensors and GPS technology present in all smart phones we can be able to identify the dark zones of the city using crowd sourcing techniques and map out the places where illumination may be needed. 

Data Collection:
Sensors Used: 
a.	Global Positioning System (GPS) in smart phones
b.	Ambient Light Sensors in smart phones

Technologies Used:
c.	Android Smart Phone – Moto G5 plus (Android 7.0 Nougat)
d.	Android application (JAVA language)



Collected Data Sample:

{
  "-L679Vw7_-79On60YKjt" : 
{
  		"20180224141413" : 
{
      				"lattitude" : 53.3437292,
      				"longitude" : -6.2507775,
      				"luxValue" : "479.0"
   			}
}



Description:

Type: JSON

"-L679Vw7_-79On60YKjt"	-> Unique Key
"20180224141413"		-> Time Stamp (yyyyMMddHHmmss)
"lattitude"				-> Lattitude co-ordinates from the GPS
"longitude"				-> Longitude co-ordinates from the GPS
"luxValue"				-> Luminosity levels from the light sensor

Relevant Challenges and their Solutions:

1.	The authenticity of the ambient light sensor data gathered is dependent on the user’s device exposure to natural ambient light. If the cellphone is inside the user’s bag or pocket the cellphone light sensor will not be able to measure the ambient light present.
Solution:
Considering this is a crowd sourced data collection the users need to be advised to hold their cellphones in their hand, thus the light sensor in their hands is exposed to the proper ambience around them and an accurate measurement of the light present can be recorded.


2.	The Data gathered is crowd sourced. Thus cellphone user’s need to proactively contribute the data for proper analysis.
Solution:
The users can be incentivized by explaining to them the benefits of sharing such data. This would not only illuminate dark alleys and streets but also make the city a much safer place to live.


3.	Luminosity in an area is subject to a lot of factors like shadows from buildings, Day and night cycle, temporary obstructions.
Solution:
Ambient Street Light data is spatially and temporally dynamic in nature. There is no single measurement as the ground truth value of the illumination in the area. Thus in order to mitigate the varying measurements, we need to consider a large number of luminosity measurements of the same area and analyze them to get correct approximation of the luminosity levels in that area

