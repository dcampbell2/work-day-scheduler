$(document).ready(function () {

  var beginTime = 9;

  var endTime = 18;

  var currentDateTime = moment().format("LLLL");
  console.log(currentDateTime);

  var getCurrentHour = parseInt(moment().format("HH"))

  $("#currentDay").text("The Date and Time is Now: " + currentDateTime);

  containerEl = $(".container");

  newDivRow = $("<div>");

  newDivRow.addClass("row");
  containerEl.append(newDivRow);

  for (var i = beginTime; i <= endTime; i++) {
    var getTime = moment(i, "HH").format("LT")
    
    newDiv = $("<div>");
    newTxtArea = $("<textarea>");
    newDiv.addClass("time-block col-sm-12 hour row");
    newTxtArea.addClass("textarea col-sm-9");
    newTxtArea.attr("data-time", i);
    newSaveBtn = $("<button>");
    newSaveBtn.addClass("saveBtn col-sm-2 btn btn-primary");
    newMailIcon = $("<i>");
    newMailIcon.addClass("fas fa-save");
    newDiv.text(getTime);
    newDivRow.append(newDiv);
    newDiv.append(newTxtArea);
    console.log(newDiv);
    newDiv.append(newSaveBtn);
    newSaveBtn.append(newMailIcon);
    console.log(getTime)

    if (i > parseInt(getCurrentHour)) {;
        $("textarea[data-time='" + i + "']").addClass("future");
      } else if(i === parseInt(getCurrentHour)){
        $("textarea[data-time='" + i + "']").addClass("present")
      }else if(i < parseInt(getCurrentHour)){
        $("textarea[data-time='" + i + "']").addClass("past")
    
      }
  }

  newSaveBtn.on("click", function () {
    var storeText = localStorage.getItem("textarea");
    localStorage.setItem("textarea", newTxtArea);
  });
});
