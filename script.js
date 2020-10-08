$(document).ready(function () {

// creating a variable with the begin time
  var beginTime = 9;

// creating a variable with the end time (both in military time) made it a lot easier to loop
  var endTime = 17;

 // creating the date and time at the very top of the page 
  var currentDateTime = moment().format("LLLL");
  console.log(currentDateTime);


// creating a current hour 
  var getCurrentHour = parseInt(moment().format("HH"))


// adding text to the current day id in HTML to show the current day and time
  $("#currentDay").text("The Date and Time is Now: " + currentDateTime);

// making the div container class equal to a variable 
  containerEl = $(".container");

// creating a new div that will be a row
  newDivRow = $("<div>");

  newDivRow.addClass("row");
  containerEl.append(newDivRow);

  var currentTextBox;


// dynamically creating all the content based on the number of integers between my begin time and end time integers
  for (var i = beginTime; i <= endTime; i++) {
    var getTime = moment(i, "HH").format("LT")
    
    var newDiv = $("<div>");
    var newTxtArea = $("<textarea>");
    var newSaveBtn = $("<button>");
    var newMailIcon = $("<i>");
    newDiv.addClass("time-block col-sm-12 hour row");
    newTxtArea.addClass("textarea col-sm-9");
    newTxtArea.attr("data-time", i);
    newSaveBtn.addClass("saveBtn col-sm-2 btn btn-primary");
    newMailIcon.addClass("fas fa-save");
    newDiv.text(getTime);
    newDivRow.append(newDiv);
    newDiv.append(newTxtArea);
    console.log(newDiv);
    newDiv.append(newSaveBtn);
    newSaveBtn.append(newMailIcon);
    console.log(getTime)


// validating time to change class of elements
    if (i > parseInt(getCurrentHour)) {;
        $("textarea[data-time='" + i + "']").addClass("future");
      } else if(i === parseInt(getCurrentHour)){
        $("textarea[data-time='" + i + "']").addClass("present")
      }else if(i < parseInt(getCurrentHour)){
        $("textarea[data-time='" + i + "']").addClass("past")
    
      }
  }

  newSaveBtn.on("click", function (event) {
      event.preventDefault();
    var storeText = $("textarea").prev()
    console.log(storeText)
    localStorage.setItem("storedText", (storeText))
  });
});
