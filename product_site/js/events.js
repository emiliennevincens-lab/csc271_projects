/*I am Emilienne Vincens and this is my 4th JavaScript file. It is due on Sunday 16th of Novvember.
     This page will handle the events of the upload page such as the form submission and the popup display to ask the user to choose a gas type. */



console.log("JS file is connected!");



var theform = document.querySelector("form");
var gastype = document.querySelector('input[name="fueltype"]:checked');
//console.log(gastype.value);
var popup = document.getElementById("popup");
var overlay = document.getElementById("overlay");


if (gastype === null) {
  

theform.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent actual form submission
            popup.style.display = "block";
            overlay.style.display = "block";
        });


        
function closePopup() {
            popup.style.display = "none";
            overlay.style.display = "none";
        }


function submitform() {
            theform.submit();
            console.log("form submitted");
        }

      }

// Function to display error message if no fuel type is selected but i need to find a way to call it before the popup appears

/*
function ErrorMessage() {
  var elMsg = document.getElementById('errorMessage');
  console.log(elMsg);
  elMsg.innerHTML = 'Please, enter your starting point and your destination before submitting the form.';
}


var elBtn = document.querySelectorAll('.smallbutton');
console.log(elBtn);
elBtn[0].onclick = ErrorMessage;
*/
