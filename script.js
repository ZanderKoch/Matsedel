/**
 * @file script file for a html page that shows menus
 * @author Zander Koch
 * @version 1
 */
//////////////
//Dummy data//
//////////////
const dummyMenu = [
    {serving_date:"2021-10-19", description:"lorembiff"},
    {serving_date:"2021-10-19", description:"lorembiff2"},
    {serving_date:"2021-10-20", description:"lorembiff"},
    {serving_date:"2021-10-20", description:"lorembiff2"},
    {serving_date:"2021-10-21", description:"lorembiff"},
    {serving_date:"2021-10-22", description:"lorembiff"},
    {serving_date:"2021-10-22", description:"lorembiff2"},
    {serving_date:"2021-10-23", description:"lorembiff"},

];

console.log(dummyMenu);


///////////
//Imports//
///////////

import {getWeek} from "./getWeek.js";
//import {separateMenu} from "./separateMenuByEqualDates.js";
//I'm having a hard time making this work so im gonna try to solve this myself

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

/**
 * @type {Object} object containing date separated arrays of dishes
 */
let separatedMenu;

/**
 * @class class for storing a date and the dishes served on it as a string and 
 * 
 */
class DayMenu{
    /**
     * @constructs an object for storing a date and the dishes served on it with
     * a date but no dishes
     * @param {String} date the date that the dishes in this object will be
     * served on
     */
    constructor(date){
        this.date = date;
        this.dishes = [];
    }

}

/**
 * list of date-separated multi-dish menus
 * @type {DayMenu[]} 
 */
let dayMenuList;


/////////////
//functions//
/////////////

/**
 * gets the current time and returns it in a string with the format "YYYY-MM-DD"
 * @return {String} current date in format "YYYY-MM-DD"
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
 * checks if a a daymenu with a certain date already exists in dayMenuList
 * @param {String} date the date being checked for
 * @returns {Boolean} true if date already exists, otherwise false
 * @todo this function can't be working right because it seems to always be
 * returning false
 */
function checkDayMenusForDate (date){
    //debug logging
    console.log("---------------------"); //debug
    console.log("checkDayMenusForDate:"); //debug
    console.log("input date: " + date);   //debug

    /* the foreach won't run the second time because adding a single item makes
     * it forget that it's an array, in that case the comparison is done inside 
     * this if() statement
     */
    if (dayMenuList.length === 1) {
        return dayMenuList[0].date == date;
    }
    
    //looping through dayMenuList
    dayMenuList.forEach(currentDayMenu =>{
        console.log(
            "current dayMenuList-item's date: " + currentDayMenu.date); //debug
        
        //comparing input date to date of current
        if(currentDayMenu.date == date){
            console.log("returning true");        //debug
            console.log("---------------------"); //debug
            return true;
        }
    });
    console.log("returning false");        //debug
    console.log("---------------------"); //debug
    return false;
}

/**
 * gets the DayMenu in dayMenuList with the given date
 * @param {String} date the given date
 * @returns {DayMenu} the Daymenu in dayMenuList with specified date.
 */
function getDayMenuFromDate(date){
    dayMenuList.forEach(currentDayMenu =>{
        if(currentDayMenu.date == date){
            console.log(currentDayMenu.date); //debug
            console.log(date);                //debug
            console.log(currentDayMenu);      //debug
            return currentDayMenu;
        }
    })
}

/**
 * creates a collection of dayMenus from an collection of dishes
 * @param {Object[]} inputCollection a collection of dishes with
 * serving_date:"YYYY-MM-DD",description:""
 */
function separateMenu(inputCollection){
    let createdDayMenu;
    inputCollection.forEach(currentDish =>{
        //determening if the current dish's date already has a DayMenu
        // with its date in dayMenulist
        console.log(checkDayMenusForDate(currentDish.serving_date))
        if(checkDayMenusForDate(currentDish.serving_date)){
            console.log("found a duplicate date")
            //finds said existing DayMenu and adds the dish to its dish list
            /**
             * @todo update this part to work like it does in the else statement
             */
            
        }
        else{
            //no such DayMenu exists yet, creates it and adds the dish to its
            //dishes
            console.log(currentDish.serving_date); //debug
            let createdDayMenuIndex = 
                dayMenuList.push(new DayMenu(currentDish.serving_date)) - 1;
            dayMenuList[createdDayMenuIndex].
                dishes.push(currentDish.description);
        }
    })
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

    //initializes variable as an empty collection because it can't be declared
    //as one
    dayMenuList = [];

    /* fetch the menu, loop through it, generate date based articles with dishes
     * according to template
     */
    
    //assign the result of a menu fetching function in a variable
    separateMenu(dummyMenu); //using dummyMenu for debug
    //separated menu stores in dayMenuList
    console.log(dayMenuList);
    
}


///////////////////////
//Starting the script//
///////////////////////
//init();
window.onload = init;