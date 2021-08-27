var now = moment();
var today = now.format("dddd, MMMM Do");
$("#current-day").text(today);

var hours = ["9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"];

for (var i = 0; i < hours.length; i++) {
    var id = hours[i];
    var time = moment(id, "ha");

    var display = $("#" + id).children(".hour");
    display.text(time.format("h:mm a"));

    var block = $("#" + id).children(".time-block");
    if (now.format("ha") === time.format("ha")) {
        block.addClass("present");
    } else if (now.isBefore(time)) {
        block.addClass("future");
    } else {
        block.addClass("past");
    }

    var content = localStorage.getItem(id);
    if(content) {
        block.text(content);
    }
}

$(".save-btn").click(function () {
    var event = $(this).siblings(".time-block").val();
    var when = $(this).parent().attr("id");
    localStorage.setItem(when, event);    
});