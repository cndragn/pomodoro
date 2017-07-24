$(document).ready(function() {
    var sessionTime = 25;
    var breakTime = 5;

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

        if ((status == "sessionLess" || status == "sessionMore") && sessionTime > 0) {
            if (func == "minus") {
                sessionTime -= 1;
                //convertTo(status, sessionTime);
            }
            if (func == "plus") {
                sessionTime += 1;
                //convertTo(status, sessionTime);
            }

        }
        if ((status == "breakLess" || status == "breakMore") && breakTime > 0) {
            if (func == "minus") {
                breakTime -= 1;
                //convertTo(status, breakTime);
            }
            if (func == "plus") {
                breakTime += 1;
                //convertTo(status, breakTime);
            }
        }


        counter = sessionTime;

        document.getElementById("work").innerHTML = sessionTime + "m";
        document.getElementById("rest").innerHTML = breakTime + "m";
        document.getElementById("displayTime").innerHTML = counter + "m";
    }

});