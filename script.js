/**
 * @file script file for a html page that shows menus
 * @author Zander Koch
 * @version 1
 */


///////////
//Imports//
///////////

import {getWeek} from "./getWeek.js";


////////////////
//Declarations//
////////////////

/**
 * @type {String}
 */
let todayDate;

/**
 * @type {Number} must be an integer
 */
let currentWeekNumber;


/////////////
//functions//
/////////////

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

    //making sure the day portion always takes up two symbols
    if (day <= 9){
        day = "0" + day;
    }

    //returning date as formated string
    return `${year}-${month}-${day}`;
}

/**
 * displays clientside determined values on site
 */
function displayClientsideValues(){
    document.getElementById("todaydate").innerHTML = todayDate;
    document.getElementById("weeknumber").innerHTML = currentWeekNumber;
}

/**
 * initialization
 */
function init(){
    //sets clientside determined values
    todayDate = getCurrentDateString();
    currentWeekNumber = getWeek();
    
    //logs clientside determined values to console for debug
    console.log(todayDate); 
    console.log(currentWeekNumber) 

    //display all clientside determined values on the site
    displayClientsideValues();


}


///////////////////////
//Starting the script//
///////////////////////
init();
