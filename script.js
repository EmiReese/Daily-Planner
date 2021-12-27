
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
