$(document).ready(function() {

    //Time display
    var sessionTime = "25";
    var breakTime = "5";
    var oper = ""; //operator to increment by plus or minus

    //get data when timer buttons are clicked
    document.getElementById("setTime").addEventListener("click", getIncrement);

    function getIncrement(t) {
        var lessMore = t.target.id;
        compute(lessMore);
    }

    //display times
    function displayIt(display, func) {
        if (func == "minus") {
            if (display == "sessionLess") {
                console.log(sessionTime);
                sessionTime -= 1;
                console.log(sessionTime);
            }
            if (display == "breakLess") {
                breakTime -= 1;
            }
        }
        if (func == "plus") {
            if (display == "sessionMore") {
                console.log(sessionTime);
                sessionTime += 1;
                console.log(sessionTime);
            }
            if (display == "breakMore") {
                breakTime += 1;
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

     //Timer Bar
    var elem = document.getElementById("timer-bar");
    var width = 1;
    var id = setInterval(frame, 3000); //1 second = 1000 milliseconds

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