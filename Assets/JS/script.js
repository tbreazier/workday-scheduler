var currentTime = moment().format("HH");
var currentTimeInt = parseInt(currentTime);
var saveBtn = $(".saveBtn");

$("#row9").attr("data-time", moment("0900", "HH:mm").format("HH"));
$("#row10").attr("data-time", moment("1000", "HH:mm").format("HH"));
$("#row11").attr("data-time", moment("1100", "HH:mm").format("HH"));
$("#row12").attr("data-time", moment("1200", "HH:mm").format("HH"));
$("#row13").attr("data-time", moment("1300", "HH:mm").format("HH"));
$("#row14").attr("data-time", moment("1400", "HH:mm").format("HH"));
$("#row15").attr("data-time", moment("1500", "HH:mm").format("HH"));
$("#row16").attr("data-time", moment("1600", "HH:mm").format("HH"));
$("#row17").attr("data-time", moment("1700", "HH:mm").format("HH"));

$(document).ready(function () {

    loadSchedule();

    var currentDay = moment().format("dddd, MMMM Do");
	$("#currentDay").text(currentDay);

	for (var x = 9; x <= 17; x++){
        var inputTime = $("#" + "row" + x).attr("data-time");
        var inputTimeInt = parseInt(inputTime);

        if (currentTimeInt === inputTimeInt){
            $("#" + "row" + x).addClass("present");  
        }

        if (currentTimeInt > inputTimeInt){
            $("#" + "row" + x).addClass("past");
        }

        if (currentTimeInt < inputTimeInt){
            $("#" + "row" + x).addClass("future");
        }
    }

    saveBtn.on("click", function () {
        var hour = $(this).attr("data-hour");
        var schedule = $("#" + "row" + hour).val();
        localStorage.setItem(hour, schedule);
    });

    function loadSchedule() {
        for (var i = 1; i <= 17; i++) {
            $("#" + "row + i").val(localStorage.getItem(i));
        }
    }
});