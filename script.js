$(document).ready(function() {
    var sessionTime = 25;
    var breakTime = 5;
    var countdown = 25000;

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
            if (func == "minus" && sessionTime > 1) {
                sessionTime -= 1;
                //convertTo(status, sessionTime);
            }
            if (func == "plus") {
                sessionTime += 1;
                //convertTo(status, sessionTime);
            }

        }
        if (status == "breakLess" || status == "breakMore") {
            if (func == "minus" && breakTime > 1) {
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
document.getElementById("start").onclick = function() {
    timer(2);
}

function timer(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("displayTime");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                timer(mins-1);           
            }
        }
         
    }
    tick();
}



});