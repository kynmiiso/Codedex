import zodiacHoroscopes from zodiac-horoscopes.js

let month = prompt("Please enter your birth month: ");
months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November"];
randInt = Math.floor(Math.random() * 3); // random number from 0 to 2
monthToZodiac = {"January": "Capricorn", "February": "Aquarius", "March": "Pisces", 
    "April": "Aries", "May": "Taurus", "June": "Gemini", "July": "Cancer", 
    "August": "Leo", "September": "Virgo", "October": "Libra", "November": "Scorpio", 
    "December": "Sagittarius"};

let zodiac;
if (month != null && months.includes(month)) {
    zodiac = monthToZodiac.month;

} 
else {
    console.log("That is not a valid month! Please use a capital first letter.");
}