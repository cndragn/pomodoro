$(document).ready(function() {

    //Time display
    var sessionTime = 25;
    var breakTime = 5;
    var oper = ""; //operator to increment by plus or minus
    var displayTime = 0;

    //get data when timer buttons are clicked
    document.getElementById("setTime").addEventListener("click", getIncrement);

    function getIncrement(t) {
        var lessMore = t.target.id;
        compute(lessMore);
    }

    function convertFrom(milliseconds) {
        var totalSeconds = Math.floor(milliseconds / 1000);
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds - minutes * 60;

    }

    function convertTo(milliseconds) {
        var seconds = milliseconds * 60;
        var milliseconds = milliseconds * 1000;
        console.log("ms: " + milliseconds);
        document.getElementById("displayTime").innerHTML = sessionTime + "m " + "00s";
    }

    //display times
    function displayIt(display, func) {
        if (func == "minus") {
            if (display == "sessionLess") {
                sessionTime -= 1;
                convertTo(sessionTime);
            }
            if (display == "breakLess") {
                breakTime -= 1;
                convertTo(sessionTime);
            }
        }
        if (func == "plus") {
            if (display == "sessionMore") {
                sessionTime += 1;
                convertTo(sessionTime);
            }
            if (display == "breakMore") {
                breakTime += 1;
                convertTo(sessionTime);
            }
        }

        document.getElementById("work").innerHTML = sessionTime + "m";
        document.getElementById("rest").innerHTML = breakTime + "m";
    }

    //Button functions
    function compute(data) {
        if (data == "sessionLess" || data == "breakLess") {
            oper = "minus";
        }
        if (data == "sessionMore" || data == "breakMore") {
            oper = "plus";
        }
        displayIt(data, oper);
    }

    document.getElementById("start").onclick = function() {

        //Timer Bar

        var elem = document.getElementById("timer-bar");
        var width = 1;
        var intTime = 1000;
        var id = setInterval(frame, intTime); //1 second = 1000 milliseconds
        var intTimeCalc = intTime;


        //Timer movement
        function frame() {


            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;

                elem.style.width = width + '%';
            }
            intTimeCalc -= 10;

        }
    }


});