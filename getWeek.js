/**
 * @file script file for a function that gets the current week number
 * @author Zander Koch
 * @version 1
 */

//This script is released to the public domain and may be used, modified and
//distributed without restrictions. Attribution not necessary but appreciated.
//Source: https://weeknumber.com/how-to/javascript

/**
 * returns current week number as integer
 * @author https://weeknumber.com/how-to/javascript, modified by Zander Koch
 * @returns {number} current week number as integer
 */
export function getWeek(){
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
