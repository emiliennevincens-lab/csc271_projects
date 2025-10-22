//console.log("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.")
//alert("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.")
//document.write("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.")

var sign = 'Virgo';
var month = 'October';
var day = 20;
var luckyNumber = 7;
var horoscope = "Today you will die, be careful.";
var believe = false;


var element = document.getElementById('sign');
element.innerHTML = sign;

var elements = document.getElementsByClassName('birthday');
elements[0].innerHTML = "My birthday : " + month + " " + day + "nd";

var elements = document.getElementsByClassName('luckyNum');
elements[0].innerHTML = "Lucky Number : " + luckyNumber;

var elements = document.getElementsByTagName('p');
elements[0].innerHTML = horoscope;
elements[1].innerHTML = "Believe it? : " + believe ;
elements[1].style.fontWeight = 'bold';

var moodEmi=0;
var moodMeghan=4;
var moodGordon=5;
var moodTotal = (moodEmi + moodMeghan + moodGordon) / 3;

var elements = document.getElementsByTagName('p');
elements[2].innerHTML = "Today's mood rating for Emilienne: " + moodEmi + " out of 5. The average mood rating of Emilienne, Meghan, and Gordon is " + moodTotal + " out of 5.";

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var signEmi = signs[8];
var signMeghan = signs[5];
var signGordon = signs[7];

var elements = document.getElementsByTagName('p');
elements[3].innerHTML = "My zodiac sign is: " + signEmi +". Meghan's zodiac sign is: " + signMeghan +". Gordon's zodiac sign is: " + signGordon +".";

var horosopes = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
"Your determination will lead to success today. Stay focused on your goals.",
"Communication is key today. Express yourself clearly and listen to others.",
"Trust your intuition. It will guide you in making the right decisions.",
"Your creativity shines today. Use it to inspire and lead others.",
"Pay attention to the details. Your meticulous work will pay off.",
"Balance is essential. Find harmony in all aspects of your life.",
"Embrace transformation. Let go of what no longer serves you.",
"Adventure awaits. Explore new horizons and expand your horizons.",
"Hard work leads to success. Keep pushing toward your goals.",
"Your unique perspective is an asset. Share your ideas with others.",
"Trust your emotions. They will guide you in making the right choices.",
]

var horEmi = horosopes[8];
var horMeghan = horosopes[5];
var horGordon = horosopes[7];
horosopes[7]="You're going to die today, be careful.";

var elements = document.getElementsByTagName('p');
elements[4].innerHTML = "My today's horoscope is: " + horEmi +"."; 
elements[5].innerHTML = "Meghan's today's horoscope is: " + horMeghan +".";
elements[6].innerHTML = "Gordon's today's horoscope is: " + horGordon +".";