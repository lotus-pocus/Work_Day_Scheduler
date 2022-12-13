var time = moment().format('dddd, MMM Do YYYY');
var startOfBusiness = moment ('09', 'HH');

// set the current day at the top of the calendar
$("#currentDay").append(time);

//create variables for different time-blocks
var firstTime = $('#timeRow1');
var secondTime = $('#timeRow2');
var thirdTime = $('#timeRow3');
var fourthTime = $('#timeRow4');
var fifthTime = $('#timeRow5');
var sixthTime = $('#timeRow6');
var seventhTime = $('#timeRow7');
var eigthTime = $('#timeRow8');
var ninthTime = $('#timeRow9');

// $('#timeRow1') = moment(09, 'HH');

function savelogEntry(arr){
    localStorage.setItem('firstTime', JSON.stringify(arr));
}

//creat event listeners to save items
function addfirstTime() {
var keypressed = event.keycode;
}


function initial() {
    firstTime.addEventListener('click', addfirstTime);
    var logEntry = firstTime.value;
    firstTime.push(logEntry);
    saveFirstTime(firstTime);
}

initial();


// while (startOfBusiness.hour() < 18) {
//     console.log (startOfBusiness.format('ddd Do hh:MM a'));
//     startOfBusiness.add(1,'hours');
//     var newRow = $("<div>").addClass("row").attr("id");
// }

