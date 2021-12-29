
var rows = document.getElementsByClassName("row");
var form = document.querySelector('#target');
var currentTime = new Date();
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

 setTimeout("showTime()", 1000);  
 };
// CALL FUNCTION
 showTime();


//  This is my attempt at getting the colors to change.
//  function changeColor () {
// 	var d = new Date();
// 	var n = d.getHours();
//   var roundedHour = Math.floor(n);
//   var section = document.getElementsByTagName('section');
//   var apptHour = document.getElementsByTagName('section').value;
// 	if (apptHour === roundedHour){
//    section.style.backgroundColor = "red";
//   } else if ( roundedHour > apptHour){
//    section.style.backgroundColor = "purple";
//   }	else {
//   section.style.backgroundColor = 
//     "green";
//   }
//   changeColor();
// };

//_______________________________
// CALENDER START
//UI class
class UI {
static displayAppt () {
    var appts = Store.getAppts();


appts.forEach((appt) => UI.addApptToForm (appt));
 }
  static addApptToForm(appt) {
    var form = document.querySelector('#target');
  }};
  
//LOCAL STORAGE
class Store {
static getAppts(){
     var appts;
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
    localStorage.setItem('appts',  JSON.stringify(appts));
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
// ______________________________________________________
// WORKING STORAGE

// 9 AM HOUR
var btn1 = document.getElementById('addBtn1');
var textInput1= document.getElementById('textInput1');

btn1.addEventListener('click', function () {
localStorage.setItem('text1', textInput1.value)
});

function getItems(){
        var storedText = localStorage.getItem('text1');
        textInput1.textContent = storedText;
    };

    getItems();

//_______________________________________

// 10 AM HOUR


var btn2 = document.getElementById('addBtn2');
var textInput2= document.getElementById('textInput2');

btn2.addEventListener('click', function () {
localStorage.setItem('text2', textInput2.value)
});

function getItems2(){
        var storedText = localStorage.getItem('text2');
        textInput2.textContent = storedText;
    }
getItems2();
//_________________________________________________
// 11 AM HOUR

var btn3 = document.getElementById('addBtn3');
var textInput3= document.getElementById('textInput3');

btn3.addEventListener('click', function () {
localStorage.setItem('text3', textInput3.value)
});

function getItems3(){
        var storedText = localStorage.getItem('text3');
        textInput3.textContent = storedText;
    }

    getItems3();
//_________________________________________________
// 12PM HOUR


var btn4 = document.getElementById('addBtn4');
var textInput4= document.getElementById('textInput4');

btn4.addEventListener('click', function () {
localStorage.setItem('text4', textInput4.value)
});

function getItems4(){
        var storedText = localStorage.getItem('text4');
        textInput4.textContent = storedText;
    };
//
getItems4();
// //___________________________________________________
// 1 PM HOUR

var btn5 = document.getElementById('addBtn5');
var textInput5= document.getElementById('textInput5');

btn5.addEventListener('click', function () {
localStorage.setItem('text5', textInput5.value)
});

function getItems5(){
        var storedText = localStorage.getItem('text5');
        textInput5.textContent = storedText;
    };

    getItems5();
// //
// 2 PM HOUR
var btn6 = document.getElementById('addBtn6');
var textInput6= document.getElementById('textInput6');

btn6.addEventListener('click', function () {
localStorage.setItem('text6', textInput6.value)
});

function getItems6(){
        var storedText = localStorage.getItem('text6');
        textInput6.textContent = storedText;
    };

getItems6();
// //___________________________________________________
// 3 PM HOUR
var btn7 = document.getElementById('addBtn7');
var textInput7= document.getElementById('textInput7');

btn7.addEventListener('click', function () {
localStorage.setItem('text7', textInput7.value)
});

function getItems7(){
        var storedText = localStorage.getItem('text7');
        textInput7.textContent = storedText;
    };

getItems7();
// // ___________________________________________________

// 4 PM HOUR
var btn8 = document.getElementById('addBtn8');
var textInput8= document.getElementById('textInput8');

btn8.addEventListener('click', function () {
localStorage.setItem('text8', textInput8.value)
});

function getItems8(){
        var storedText = localStorage.getItem('text8');
        textInput8.textContent = storedText;
    };
getItems8(); 
// _______________________________________________________

// 5 PM HOUR
var btn9 = document.getElementById('addBtn9');
var textInput9= document.getElementById('textInput9');

btn9.addEventListener('click', function () {
localStorage.setItem('text9', textInput9.value)
});

function getItems9(){
        var storedText = localStorage.getItem('text9');
      ('.textInput9').textContent = storedText;
    };

    getItems9();

