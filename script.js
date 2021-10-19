/**
 * @file script file for a html page that shows menus
 * @author Zander Koch
 * @version 1
 */


//////////////////////////////
//Externally sourced scripts//
//////////////////////////////
//i can't figure out how to do this with imports and exports

// This script is released to the public domain and may be used, modified and
// distributed without restrictions. Attribution not necessary but appreciated.
// Source: https://weeknumber.com/how-to/javascript

// Returns the ISO week of the date.
function getWeek(){
    let currentDate = Date.now()
    let date = new Date(currentDate);
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    let week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }
////////////////
//Declarations//
////////////////



/**
 * @type {String}
 */
let todayDate;

/**
 * the current week of the year as an int
 * @type {Number} must be an integer
 */
let currentWeekNumber;


///////////////////
//Initializations//
///////////////////

todayDate = getCurrentDateString();
console.log(todayDate); //debug

currentWeekNumber = getWeek();
console.log(currentWeekNumber)


///////////
//Methods//
///////////

/**
 * gets the current time and returns it in a string with the format "YYY-MM-DD"
 * 
 * @return {String} current date in format "YYY-MM-DD"
 */
function getCurrentDateString(){
    //saving the current time as date
    let date = new Date(Date.now());

    //getting the year, month, and day of date and saving them 
    let year = date.getFullYear();
    let month = date.getMonth() + 1; //getMonth() returns 0-indexed month
    let day = date.getDate();

    //making sure the day portion always taks up two symbols
    if (day <= 9){
        day = "0" + day;
    }

    //returning date as formated string
    return `${year}-${month}-${day}`;
}