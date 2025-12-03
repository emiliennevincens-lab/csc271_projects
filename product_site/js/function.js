/*I am Emilienne Vincens and this is my 2nd JavaScript file. It is due on Sunday 8th of Novvember.
     This page will load the list of gas station by displaying the info of all them. They can also filter the gas stations by fuel type to see the prices they want. */


console.log("JS file is connected!");  //just to check that the js file is properly linked to the html file

function header(){
    var headerEl = document.querySelector('div.header'); 
    headerEl.innerHTML =  '<div class="header-left"><a href="welcome.html"><img id="logo" src="images/logo_V2.png" alt="logo of Gasstar"></a></div>';
    headerEl.innerHTML += '<h1>Gasstar.com</h1>'; 
    //console.log(headerEl.innerHTML);
}

function searchbar(){
    var searchEl = document.querySelector('div.searchbar');
    const style = new Array(5).fill("link");
    style[nbActive]='active';
    searchEl.innerHTML = '<a class=' + style[0] + ' href="welcome.html">Home</a>';
    searchEl.innerHTML += '<a class=' + style[1] + ' href="upload.html">Plan</a>';
    searchEl.innerHTML += '<a class=' + style[2] + ' href="stationinfo.html">Map</a>';
    searchEl.innerHTML += '<a class=' + style[3] + ' href="welcome.html">Favourite</a>';
    searchEl.innerHTML += '<a class=' + style[4] + ' href="welcome.html">Settings</a>';
    //console.log(searchEl.innerHTML);
}

// the variable page gets the name of the current html page to highlight the correct tab in the header.
// I originally wanted to pass it as a parameter to the searchbar function but I couldn't call the function with a different parameter in each html file.

const page = window.location.pathname.split("/").pop();
if (page === "welcome.html") {
  var nbActive = 0;
  var Width = "100%"
} else if (page === "upload.html") {
  var nbActive = 1;
  var Width = "32.8%";
} else {
  var nbActive = 2;
  var Width = "100%";
}


//this function displays the footer info and resizes the minor divs if needed (for the upload page)

function down(width){
    var downEl = document.querySelectorAll('div.minor');
    var i =0;
    if (!(width==="100%")){
        downEl[2].style.width = width;
        downEl[2].innerHTML = "<h2>Informations</h2>";
        downEl[0].style.width = width;
        downEl[1].style.width = width;
        var i=2;
    }
    downEl[i].innerHTML +=  '<p> <a href="welcome.html">Go back</a> to the first page</p>';
    downEl[i].innerHTML += '<p>See the <a href="https://en.wikipedia.org/wiki/Filling_station" target="blank">history of gas stations</a> by clicking here.</p>';
    downEl[i].innerHTML += '<p> For any problem with this website, <em>please contact us <a href="mailto:emilienne.vincens@uri.edu" > here. </a></em></p>';
    downEl[i].innerHTML += '<p>last update : December 2025</p>';
}

header();
searchbar();
down(Width);

