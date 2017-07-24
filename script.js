$(document).ready(function() {
    var sessionTime = 25;
    var breakTime = 5;
    var countdown = 0;

    document.getElementById("getTime").addEventListener("click", getIncrement);

    function getIncrement(t) {
        var lessMore = t.target.id;
        compute(lessMore);
    }

    function convertTo(milliseconds) {
        countdown = milliseconds * 1000;

        convertFrom(countdown);
    }

    function convertFrom(milliseconds) {
        var minutes = Math.floor(milliseconds / 1000);
        var seconds = Math.floor((milliseconds / 1000 - minutes) * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        console.log(seconds);


        document.getElementById("displayTime").innerHTML = minutes + "m " + seconds + "s";

    }

    //Button functions
    function compute(data) {
        if (data == "sessionLess" || data == "breakLess") {
            oper = "minus";
        }
        if (data == "sessionMore" || data == "breakMore") {
            oper = "plus";
        }
        statusIt(data, oper);
    }

    //Time
    function statusIt(status, func) {

        if (status == "sessionLess" || status == "sessionMore") {
            if (func == "minus" && sessionTime > 0) {
                sessionTime -= 1;
                //convertTo(status, sessionTime);
            }
            if (func == "plus") {
                sessionTime += 1;
                //convertTo(status, sessionTime);
            }

        }
        if (status == "breakLess" || status == "breakMore") {
            if (func == "minus" && breakTime > 0) {
                breakTime -= 1;
                //convertTo(status, breakTime);
            }
            if (func == "plus") {
                breakTime += 1;
                //convertTo(status, breakTime);
            }
        }


        counter = sessionTime;
        convertTo(counter);

        document.getElementById("work").innerHTML = sessionTime + "m";
        document.getElementById("rest").innerHTML = breakTime + "m";
    }


    var elem = document.getElementById("timer-bar");
    var width = 1;
    var intTime = 1000;
    console.log(intTime);

    var intTimeCalc = intTime;
    var id = setInterval(frame, intTime); //1 second = 1000 milliseconds 

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
});