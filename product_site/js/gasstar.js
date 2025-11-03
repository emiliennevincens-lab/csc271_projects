console.log("JS file is connected!");  //just to check that the js file is properly linked to the html file


var names = ['Kingston Convenience Mart', 'Mobil', 'Potters Sefice Station', 'Green Valley Oil'];
var adress = ["2360 Kingstown Rd, Kingston, RI 02881", "1892 Kingstown Rd, Wakefield, RI 02881","186 Main St, Wakefield, RI 02879", "4087 Tower Hill Rd, Wakefield, RI 02879" ];
var distance = [5, 10, 7, 12]; 

var fuelType = ['Diesel', 'Regular', 'Plus', 'Midgrade', 'Premium'];
var Regular = [0, 3.87, 3.69, 3.79];
var Diesel = [3.89, 4.7, 3.99, 4.09];
var Plus = [3.79, 4.00, 0, 3.99];
var Midgrade = [3.69, 0, 3.79, 3.89];
var Premium = [3.89, 0, 3.99, 0];

var rating = [4.5, 2, 3.5, 4.1]; // out of 5 


var element = document.querySelectorAll("div.list");

for (var i=0; i<element.length; i++){
    document.querySelectorAll('h3')[i].innerText = names[i] ; 
   
    for (var j=0; j<5; j++){ 
        if (j<rating[i]){
            document.querySelectorAll('p')[i*3].innerText += "★"; 
            console.log(rating[i]);
        } else {
            document.querySelectorAll('p')[i*3].innerText += "☆";           
        }  }

    document.querySelectorAll('p.time')[i].innerText = distance[i] + " mi to go";

 }

 // Now we update the prices based on the fuel type selected by the user

 var fueltype = document.querySelectorAll("div.list");
 console.log(fueltype);


    var selectedFuel = document.querySelector("#fuel-filter");  
    console.log(selectedFuel.value + " selectedFuel");

// we check which fuel type is selected and update the price accordingly by displaying the correct variable from the right table
   if (selectedFuel.value === 'All'){
        for (var k=0; k<names.length; k++){
            document.querySelectorAll('p.price')[k].innerText = "Select a fuel type to see prices";}
    }
   
   else  { // a fuel type is selected

        console.log(window[selectedFuel.value] + "FuelPrice");  //window[] converts string to variable name
       // document.querySelectorAll('p.price')[0].innerText =  "Syoooo";
        for (var j=0; j<names.length; j++){
            console.log("j=" + j);
            if  (window[selectedFuel.value][j]=="0") {
                    document.querySelectorAll("div.list")[j].style.display = 'none';
                    console.log("hiding card");
            }
            else  {
                document.querySelectorAll('p.price')[j].innerText = selectedFuel.value + " price : $" + window[selectedFuel.value][j]; + " / gal";}
                  
        }
    }

 
       
    

        
    


   