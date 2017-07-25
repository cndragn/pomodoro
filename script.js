$(document).ready(function() {
    var sessionTime = 25;
    var breakTime = 5;
    var countdown = 25000;

    document.getElementById("getTime").addEventListener("click", getIncrement);

    function getIncrement(t) {
        var lessMore = t.target.id;
        compute(lessMore);
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
            }
            if (func == "plus") {
                sessionTime += 1;
            }

        }
        if (status == "breakLess" || status == "breakMore") {
            if (func == "minus" && breakTime > 1) {
                breakTime -= 1;
            }
            if (func == "plus") {
                breakTime += 1;
            }
        }

        document.getElementById("work").innerHTML = sessionTime + "m";
        document.getElementById("rest").innerHTML = breakTime + "m";
    }

document.getElementById("start").onclick = function() {
    timer(sessionTime);
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