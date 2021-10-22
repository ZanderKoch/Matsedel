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

    //making sure the day and month portion always takes up two symbols
    if (month<= 9){
        month = "0" + month;
    }
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
 * @returns {Boolean} true if DayMeny already exists for date, otherwise false
 */
function checkDayMenusForDate(date){
    //result to be returned
    let result;
    
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
    switch (dayMenuList.length) {
        case 0:
            result = false;
            break;
        case 1:
            result = dayMenuList[0].date == date;
    }
    
    //looping through dayMenuList
    for(let currentDayMenu of dayMenuList){
        console.log(
            "current dayMenuList-item's date: " + currentDayMenu.date); //debug
        
        //comparing input date to date of current
        if(currentDayMenu.date == date){
            console.log("returning true");        //debug
            console.log("---------------------"); //debug
            result = true;
            break; //a match was found, ending loop early    
        }
        else{
            result = false; //result will be false untill a match is found and 
            //forach loop breaks or stay false if none are found 
        }


    };
    console.log("returning " + result);   //debug
    console.log("---------------------"); //debug
    return result;
}

/**
 * creates a collection of dayMenus from an collection of dishes
 * @param {Object[]} inputCollection a collection of dishes with
 * serving_date:"YYYY-MM-DD",description:""
 */
function separateMenu(inputCollection){
    inputCollection.forEach(currentDish =>{
        //determening if the current dish's date already has a DayMenu
        // with its date in dayMenulist
        if(checkDayMenusForDate(currentDish.serving_date)){
            //adding a new dish to the latest daymenu
            dayMenuList[dayMenuList.length - 1].dishes
                .push(currentDish.description);
            console.log("added " + currentDish.description +
                " to existing DayMenu");  //debug
        }
        else{
            //no such DayMenu exists yet, creates it and adds the dish to its
            //dishes
            console.log(currentDish.serving_date); //debug
            let createdDayMenuIndex = 
                dayMenuList.push(new DayMenu(currentDish.serving_date)) - 1;
            dayMenuList[createdDayMenuIndex].
                dishes.push(currentDish.description);
            console.log("created DayMenu for " + currentDish.serving_date + 
                " and added " + currentDish.description);  //debug
        }
    })
}

/**
 * generates article based on provided DayMenu and a template in the HTML file
 * @param {DayMenu} dayMenu DayMenu that article will be generated from
 * @returns {Node} a node containing the generated article
 */
function generateArticle(dayMenu){
    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ('content' in document.createElement("template")) {
        //initializing template and cloning its contents
        let template = document.querySelector("#template")
        let templateClone = template.content.cloneNode(true);
        
        //getting weekday as a string
        let weekday = getWeekDay(dayMenu.date);

        //writing weekday and dayMenu.date to spans in clone
        let spans = templateClone.querySelectorAll("span");
        spans[0].appendChild(document.createTextNode(weekday))
        spans[1].appendChild(document.createTextNode(dayMenu.date))

        //adding dishes to article's <ul>
        let dishList = templateClone.querySelector("ul");
        for(let dish of dayMenu.dishes){
            let templi = document.createElement("li");
            let dishText = document.createTextNode(dish);
            templi.appendChild(dishText);
            dishList.appendChild(templi);
        }

        //returning finished template clone
        console.log(templateClone); //debug

    }
    else{
        /** @todo display this with a generic error function instead */
        alert("This page is unable to display correctly, because your browser" +
        " does not support HTML templates");
    }

}

/**
 * get the day of the week of a string reperesented date
 * @param {String} dateString date in format "YYYY-MM-DD"
 * @returns {String} the day of the week on provided date in swedish
 */
function getWeekDay(dateString){
    //splitting dateString into array ["YYYY","MM","DD"]
    let dateArray = dateString.split("-");
    
    //creating a Date from values in dateArray and returning its weekday
    let date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    let weekday = new Intl.DateTimeFormat("sv-SV", {weekday: "long"})
        .format(date);
    weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1); //capitalizes
    return weekday;
    
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

    //generating and displaying the articles 
    //displayTodayMenu();
    console.log(dayMenuList[0])
    generateArticle(dayMenuList[0]);
    
}


///////////////////////
//Starting the script//
///////////////////////
//init();
window.onload = init;