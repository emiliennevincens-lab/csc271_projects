/*I am Emilienne Vincens and this is my JavaScript file. It is due on Sunday 26th of October.
     This page will load all the info the users want to preview when they select a gas station. They have access to all the info to choose to go or go back to the list of the other gas stations. */

console.log("JS file is connected!");  //just to check that the js file is properly linked to the html file

var name = "Kingston Convenience Mart";
var adress = "2360 Kingstown Rd, Kingston, RI 02881";
var distance = 250; 
var fuelPrice = 3.59;
var rating = 4.5; // out of 5 
var fuelType = "Regular";

var element = document.getElementsByTagName('h3');
element[0].innerHTML = name ;

var element = document.getElementsByTagName('p');
element[0].innerHTML = adress ;
element[3].innerHTML = "Review : " + rating + " / 5 stars" ;

time=distance*1.5
 // we took an average speed of 40mph in town so 1.5 min per mile
 // this following line converts minute time in a hours and minuts format.
if (time <= 60){ var dur = time + " mins to go"} else { var dur= (distance/1.5).toFixed(0)  + " hours & " +time%60 + " mins"} ;

var element = document.getElementsByClassName('time');
element[0].innerHTML = distance + " mi to go - " + dur;

var element = document.querySelector('.price')
//var element = document.getElementsByClassName('price');
element.textContent = fuelType + " gas price = $"+ fuelPrice + "/gal";

var imgElement = document.getElementsByClassName('imagetext');
imgElement[0].src = "images/img_template.jpeg"; // for now it doesn't change the image but it will be useful in the future to adapt to each gas station



