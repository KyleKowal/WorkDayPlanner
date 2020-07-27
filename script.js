$(document).ready(function() {
    
    // Today's date
    const todaysDate = moment();
    
    // Today's date header
    $("#currentDay").text(todaysDate.format("dddd | MMMM Do YYYY | hh:mm a"));

        // Creates schedule rows
        function createScheduler(date) {

            // Set start time
            date = moment(date).hour(9);
    
            for (let i = 0; i < 12; i++) {
                
    // Bootstrap Row
    const rowDiv = $("<div>").addClass("row").attr("id", `row${i}`);

    // Hour display div
    const hourDiv = $("<div>").addClass("col-1 hour time-block d-flex align-items-center justify-content-center").text(date.format("H a")).attr("id", `hour${i}`);


