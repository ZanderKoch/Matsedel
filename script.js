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
console.log(todayDate);

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
    date.setDate(1);

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