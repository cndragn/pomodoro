$(document).ready(function() {

    //Time display
    var sessionTime = "25m";
    var breakTime = "5m";

    //Timer Bar
    var elem = document.getElementById("timer-bar");
    var width = 1;
    var id = setInterval(frame, 10);

    //get data when timer buttons are clicked
    document.getElementById("setTime").addEventListener("click", getIncrement);

    function getIncrement(t) {
        var lessMore = t.target.id;
        compute(lessMore);
    }

    //display times
    function displayIt(display, func) {
        document.getElementById("work").innerHTML = sessionTime;
        console.log(sessionTime);
        document.getElementById("rest").innerHTML = breakTime;
    }

    //Button functions
    function compute(data) {
        if (data == "sessionLess") {

            console.log("Less Session Time!")
        }
        if (data == "sessionMore") {

            console.log("More Session Time!")
        }
        if (data == "breakLess") {

            console.log("Less Break Time!")
        }
        if (data == "breakMore") {

            console.log("More Break Time!")
        }

        displayIt(data, data);
    }

    //Timer movement
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }




});