window.onload = function() {

    //=====menu bar dropdown=====
    var dropbtn = document.getElementById("dropbtn");
    dropbtn.onclick = displayDropdown;


    function displayDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    //makes dropdown menuu disappear if you click away from it
    window.onclick = function(e) {
      if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
      }
    }

    //=======plan creation========

    $(document).on('change', '.planSelect', function() {
        var planDrop = document.getElementById("planSelect");
        $("#planSelect option").each(function() {
            var hideElem = document.getElementById(this.value);
            if(planDrop.options[planDrop.selectedIndex].value == hideElem.id) {
                $(hideElem).removeClass('hidden');
            }
            else {
                $(hideElem).addClass('hidden');
            }
        });
    });
    $(document).ready(function(){
        $('.planSelect').trigger('change');
    });



    //=======main timer controls======

    var hoursLabel = document.getElementById("hours");
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var millisLabel = document.getElementById("millis");
    var totalMilSecondsStart = 0;
    var totalMilSeconds = 0;
    var startPauseButton = document.getElementById("startPauseButton");
    var restartButton = document.getElementById("restartButton");
    var interval;
    var stopTime = 0;

    startPauseButton.onclick = startOrPause;

    document.body.onkeyup = function(e) {
        if(e.keyCode == 32) {
            var evt = document.createEvent("MouseEvent");
            evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
            startPauseButton.dispatchEvent(evt);
        }

        else if(e.keyCode == 82)
            restart();
        else if(e.keyCode == 13)
            finish();
    }

    function startOrPause() {
        if (interval == null) {
            totalMilSecondsStart = Date.now()-stopTime;
            stopTime = 0;
            interval = setInterval(setTime,10);
        }
        else {
            clearInterval(interval);
            interval = null;
            stopTime = totalMilSeconds
        }
    }

    restartButton.onclick = restart;

    function restart() {
        stopTime = 0;
        clearInterval(interval)
        interval=null;
        millisLabel.innerHTML = pad(0) + "0";
        secondsLabel.innerHTML = pad(0);
        minutesLabel.innerHTML = pad(0);
        hoursLabel.innerHTML = pad(0);
    }

    function setTime()
    {
        totalMilSeconds = Date.now()-totalMilSecondsStart;
        var milSeconds = totalMilSeconds;

        hoursLabel.innerHTML = pad(parseInt(milSeconds/3600000));
        milSeconds = milSeconds%3600000;
        minutesLabel.innerHTML = pad(parseInt(milSeconds/60000));
        milSeconds = milSeconds%60000;
        secondsLabel.innerHTML = pad(parseInt(milSeconds/1000));
        millisLabel.innerHTML = padMil(milSeconds%1000)
    }

    function pad(val)
    {
        var valString = val + "";
        if(valString.length < 2)
        {
            return "0" + valString;
        }
        else
        {
            return valString;
        }
    }

    function padMil(val)
    {
        var valString = val + "";

        if(valString.length < 1)
            return "000";
        else if (valString.length < 2)
            return "00" + valString;
        else if (valString.length < 3)
            return "0" + valString;
        else 
            return valString;
    }

    var finishMillisLabel = document.getElementById("millisFin")
    var finishSecondsLabel = document.getElementById("secondsFin");
    var finishMinutesLabel = document.getElementById("minutesFin");
    var finishHoursLabel = document.getElementById("hoursFin");
    var finishButton = document.getElementById("finishButton");

    finishButton.onclick = finish;

    function finish() {
        clearInterval(interval);
        interval = null;
        stopTime = totalMilSeconds
        var milSeconds = totalMilSeconds;

        finishHoursLabel.innerHTML = pad(parseInt(milSeconds/3600000));
        milSeconds = milSeconds%3600000;
        finishMinutesLabel.innerHTML = pad(parseInt(milSeconds/60000));
        milSeconds = milSeconds%60000;
        finishSecondsLabel.innerHTML = pad(parseInt(milSeconds/1000));
        finishMillisLabel.innerHTML = padMil(milSeconds%1000);
    }
}


