
// HELPFUL NOTES :

// This could be helpful storing our data
// jQuery.data()
// Store arbitrary data associated with the specified element and/or return the value that was set.

// jQuery.parseJSON()
// Takes a well-formed JSON string and returns the resulting JavaScript value.---------------------------------------------------------

//Appointment class
// class Appt {
//     constructor(hour, appt) {
//         this.hour= hour;
//         this.appt = appt;
//     }
// }
function showTime(){
  // DATE SECTION
    var myDate = new Date();
    var year = myDate.getFullYear();
    if (year < 1000){
      year += 1900
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var dayM = myDate.getDate();
    var dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",  "Saturday");
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    
    // TIME SECTION
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m= currentTime.getMinutes();
    var s= currentTime.getSeconds();
    if (h === 24){
      h = 0;
    } else if (h > 12){
      h = h - 0;
    }
    if (h < 10) {
      h = "0" + h;
    } 
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10){
      s = "0" + s;
    }
// DISPLAY FOR DATE AND TIME 
    var myClock = document.getElementById('currentDay');
    myClock.textContent = "" + dayArray[day] + " " + dayM + " " + monthArray[month] +
 " " + year + " | " + h + ":" + m +  ":" + s;
 myClock.innerText = "" + dayArray[day] + " " + dayM + " " + monthArray[month] +
 " " + year + " | " + h + ":" + m +  ":" + s;

 setTimeout("showTime()", 1000);  }

// CALL FUNCTION
 showTime();




//UI class
class UI {
static displayAppt () {
    var appts = Store.getAppts();


appts.forEach((appt) => UI.addApptToForm (appt));
 }
  static addApptToForm(appt) {
    var form = document.querySelector('#target');
  }
};
    

//Storage class
class Store {
static getAppts(){
     let appts;
     if (localStorage.getItem('appts') === null){
         appts = [];
     }
     else {
         appts = JSON.parse(localStorage.getItem('appts'));
     }
     return appts;
}


static addAppt(appt){
    var appts = Store.getAppts();

    appts.push(appt);
    localStorage.setItem('appts', JSON.stringify(appts));
}
}

//Event: display appointmens
document.addEventListener('DOMContentLoaded', UI.DisplayAppts);


//Event: Add an appointment
document.querySelector('#target').addEventListener('submit', (e) =>
{
e.preventDefault();
var hour = document.querySelector('.row').value;
var appointment = document.querySelector('.col-6').value;

//instatiate appointment 

var appt = new Appt(hour, appt);

UI.addApptToForm(appt);

// add appt to Store
Store.addAppt(appt);

});

var btn1 = document.getElementById('addBtn1');
var textInput1= document.getElementById('textInput1');

btn1.addEventListener('click', function () {
localStorage.setItem('text1', textInput1.value)
});

function getItems(){
        var storedText = localStorage.getItem('text1');
        textInput1.textContent = storedText;
    }
getItems(); 
