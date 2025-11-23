/*I am Emilienne Vincens and this is my 5th JavaScript file using for the first time objects. It is due on Sunday 23th of Novvember.
        This page will create gas station objects with their name, distance, rating, image source and a method to favorite them by clicking on a heart icon. */     

var heart = document.getElementsByClassName("heart");

function Station(name, distance, rating, imgsrc) {
    this.name = name;
    this.distance = distance;
    this.rating = rating;
    this.imgsrc = imgsrc;   
    this.Fav = false;
    this.Favorite = function (i) { // i is the index of the heart icon corresponding to the station
        if (this. Fav == false) {
        this.Fav = true;
        heart[i].innerText = "♥";  // update the heart icon to a filled heart and changes its color to red
        heart[i].style.color = "red";
        heart[i].style.margin = "30px";
    }
        else {
        this.Fav = false;
        heart[i].innerText = "♡";  // update the heart icon to an empty heart and changes its color back to dark green
        heart[i].style.color = "darkgreen";
    }
}}

// Now we create the gas station objects with their respective info 

Station1 = new Station("Kingston Convenience Mart", "2360 Kingstown Rd, Kingston, RI 02881", "4.5")
Station2 = new Station("Mobil", "1892 Kingstown Rd, Wakefield, RI 02881", "2")
Station3 = new Station("Potters Sefice Station", "186 Main St, Wakefield, RI 02879", "3.5")
Station4 = new Station("Green Valley Oil", "4087 Tower Hill Rd, Wakefield, RI 02879", "4.1")
