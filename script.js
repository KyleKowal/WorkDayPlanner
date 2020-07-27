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
                
    