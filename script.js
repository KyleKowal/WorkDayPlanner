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

    // Create text area div 
    const textDiv = $("<textarea>").addClass("col-10 time-block text-box save-block").attr("id", `text${i}`);
            
    // Create save button div
    const saveDiv = $("<div>").addClass("col-1 d-flex align-items-center justify-content-center saveBtn save-block");
    let saveBtnIcon = $("<button>").addClass("btn fas fa-save fa-lg save-button").attr("id", i).attr("title", "Save");

    $(".container").append(rowDiv.append(hourDiv,textDiv,saveDiv.append(saveBtnIcon)));

    // Color code textDiv
    if (todaysDate.isAfter(date, "hour")) {
        textDiv.addClass("past");
    } else if (todaysDate.isBefore(date, "hour")) {
        textDiv.addClass("future");
    } else {
        textDiv.addClass("present");
    }
    date.add(1, "hour");
}        
}