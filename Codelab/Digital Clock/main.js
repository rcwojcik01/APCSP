$(document).ready(function () {
    
function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var weekday = currentTime.getDay();
    var month = currentTime.getMonth();
    var date = currentTime.getDate();
    var year = currentTime.getYear();
    
    var weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    year += 1900;
    
    //Let's set the AM and PM meridiem and
    //12-hour format
    var meridiem = "AM"; //Default is AM
    
    //Convert from 24 hour to 12 hour format
    //and keep track of the meridiem.
    if(hours >= 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    
    //0 AM and 0 PM should read as 12
    if(hours === 0) {
        hours = 12;
    }
    
    //If the seconds digit is less than ten
    if(seconds < 10) {
        //Add the "0" digit to the front
        //so 9 becomes "09"
        seconds = "0" + seconds;
    }
    
    //If the minutes digit is less than ten
    if(minutes < 10) {
        //Add the "0" digit to the front
        //so 9 becomes "09"
        minutes = "0" + minutes;
    }
    
    //If the hours digit is less than ten
    if(hours < 10) {
        //Add the "0" digit to the front
        //so 9 becomes "09"
        hours = "0" + hours;
    }

    //this gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');
    
    //then we set the text inside the clock div
    //to the hours, minutes, and seconds of the current time
    clockDiv.innerText = weekdayArray[weekday] + "\n" + date + " " + monthArray[month] + " " + year + "\n" + hours + ':' + minutes + ':' + seconds + " " + meridiem;
}
    
    //This runs the displayTime function for the first time
    displayTime();
    
    //This makes our clock 'tick' by repeatedly
    //running the displayTime function every second.
    setInterval(displayTime, 1000);
    
});