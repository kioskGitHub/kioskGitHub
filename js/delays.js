//####
//time
//####
var time;
var dayOfWeek;
var today;
var timeNoAMPM;

function dateAndTime() {
    var currentDate = new Date();
    // For todays date;
    Date.prototype.today = function() {
        return (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" +
            ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" +
            this.getFullYear();
    };
    //the time now
    Date.prototype.timeNow = function() {
        return ((this.getHours() < 10) ? "0" : "") +
            ((this.getHours() > 12) ? (this.getHours() - 12) : this.getHours()) + ":" +
            ((this.getMinutes() < 10) ? "0" : "") +
            this.getMinutes();
    };

    time = currentDate.timeNow();
    today = currentDate.today();
    //To get day of the week
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    dayOfWeek = weekday[currentDate.getDay()];
}
dateAndTime();

function normalHours() {
    location.reload();
}

function twoHourDelay() {
    document.getElementById("lunch0").innerHTML = "";
    document.getElementById("lunch1").className = "";
    document.getElementById("lunch1").innerHTML = "";
    document.getElementById("lunch2").className = "";
    document.getElementById("lunch2").innerHTML = "";
    document.getElementById("lunch3").className = "";
    document.getElementById("lunch3").innerHTML = "";
    document.getElementById("lunch4").className = "";
    document.getElementById("lunch4").innerHTML = "";
    document.getElementById("lunch5").className = "";
    document.getElementById("lunch5").innerHTML = "";
    document.getElementById("lunch0delay").innerHTML = "&nbsp;";
    document.getElementById("lunch1delay").className = "span_1_of_5 col";
    document.getElementById("lunch1delay").innerHTML = "Common Hour";
    document.getElementById("lunch2delay").className = "span_1_of_5 col";
    document.getElementById("lunch2delay").innerHTML = "Common Hour";
    document.getElementById("lunch3delay").className = "span_1_of_5 col";
    document.getElementById("lunch3delay").innerHTML = "Common Hour";
    document.getElementById("lunch4delay").className = "span_1_of_5 col";
    document.getElementById("lunch4delay").innerHTML = "Common Hour";
    document.getElementById("lunch5delay").className = "span_1_of_5 col";
    document.getElementById("lunch5delay").innerHTML = "Common Hour";
    document.getElementById("period1first").innerHTML = "10:00am";
    document.getElementById("period1second").innerHTML = "10:40am";
    document.getElementById("period2first").innerHTML = "10:45am";
    document.getElementById("period2second").innerHTML = "11:25am";
    document.getElementById("period3first").innerHTML = "11:30am";
    document.getElementById("period3second").innerHTML = "12:10pm";
    document.getElementById("period4first").innerHTML = "12:40pm";
    document.getElementById("period4second").innerHTML = "1:20pm";
    document.getElementById("period5first").innerHTML = "1:25pm";
    document.getElementById("period5second").innerHTML = "2:05pm";
    document.getElementById("period6first").innerHTML = "2:10pm";
    document.getElementById("period6second").innerHTML = "2:50pm";
    document.getElementById("period7first").innerHTML = "2:55pm";
    document.getElementById("period7second").innerHTML = "3:35pm";
    document.getElementById("period8first").innerHTML = "3:40pm";
    document.getElementById("period8second").innerHTML = "4:20pm";
    document.getElementById("period1").style.color = "#FFA500";
    document.getElementById("period2").style.color = "#FFA500";
    document.getElementById("period3").style.color = "#FFA500";
    document.getElementById("period4").style.color = "#FFA500";
    document.getElementById("period5").style.color = "#FFA500";
    document.getElementById("period6").style.color = "#FFA500";
    document.getElementById("period7").style.color = "#FFA500";
    document.getElementById("period8").style.color = "#FFA500";
    var hour = time.split(":")[0];
    var minutes = time.split(":")[1];

    if (dayOfWeek == "Monday") {
        //1st period
        if ((hour == 10) && (minutes < 40)) {
            document.getElementById("one1").style.borderColor = "#78F000";
            document.getElementById("one1").style.borderWidth = "thick";
            document.getElementById("one1").style.margin = "-4px";
            document.getElementById("two1").style.borderColor = "#FFFF00";
            document.getElementById("two1").style.borderWidth = "thick";
            document.getElementById("two1").style.margin = "-4px";
            document.getElementById("three1").style.borderColor = "";
            document.getElementById("three1").style.borderWidth = "thin";
            document.getElementById("three1").style.margin = "";
            document.getElementById("four1").style.borderColor = "";
            document.getElementById("four1").style.borderWidth = "thin";
            document.getElementById("four1").style.margin = "";
        }
        //2nd period
        else if ((hour == 10) && (minutes >= 40)) {
            document.getElementById("one1").style.borderColor = "#FF0000";
            document.getElementById("one1").style.borderWidth = "thick";
            document.getElementById("one1").style.margin = "-4px";
            document.getElementById("two1").style.borderColor = "#78F000";
            document.getElementById("two1").style.borderWidth = "thick";
            document.getElementById("two1").style.margin = "-4px";
            document.getElementById("three1").style.borderColor = "#FFFF00";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "";
            document.getElementById("four1").style.borderWidth = "thin";
            document.getElementById("four1").style.margin = "";
        } else if ((hour == 11) && (minutes < 25)) {
            document.getElementById("one1").style.borderColor = "#FF0000";
            document.getElementById("one1").style.borderWidth = "thick";
            document.getElementById("one1").style.margin = "-4px";
            document.getElementById("two1").style.borderColor = "#78F000";
            document.getElementById("two1").style.borderWidth = "thick";
            document.getElementById("two1").style.margin = "-4px";
            document.getElementById("three1").style.borderColor = "#FFFF00";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "";
            document.getElementById("four1").style.borderWidth = "thin";
            document.getElementById("four1").style.margin = "";
            document.getElementById("five1").style.borderColor = "";
            document.getElementById("five1").style.borderWidth = "thin";
            document.getElementById("five1").style.margin = "";
            document.getElementById("six1").style.borderColor = "";
            document.getElementById("six1").style.borderWidth = "thin";
            document.getElementById("six1").style.margin = "";
        }
        //3rd period
        else if (((hour == 11) && (minutes >= 25)) || ((hour == 12) && (minutes < 10))) {
            document.getElementById("two1").style.borderColor = "#FF0000";
            document.getElementById("two1").style.borderWidth = "thick";
            document.getElementById("two1").style.margin = "-4px";
            document.getElementById("three1").style.borderColor = "#78F000";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "#FFFF00";
            document.getElementById("four1").style.borderWidth = "thick";
            document.getElementById("four1").style.margin = "-4px";
            document.getElementById("five1").style.borderColor = "";
            document.getElementById("five1").style.borderWidth = "thin";
            document.getElementById("five1").style.margin = "";
        }
        //Common Hour
        else if ((hour == 12) && (minutes >= 10) && (minutes < 40)) {
            document.getElementById("lunch1delay").style.borderColor = "#78F000";
            document.getElementById("lunch1delay").style.borderWidth = "thick";
            document.getElementById("lunch1delay").style.margin = "-4px";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 40)) {
            document.getElementById("three1").style.borderColor = "#FF0000";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "#78F000";
            document.getElementById("four1").style.borderWidth = "thick";
            document.getElementById("four1").style.margin = "-4px";
            document.getElementById("five1").style.borderColor = "#FFFF00";
            document.getElementById("five1").style.borderWidth = "thick";
            document.getElementById("five1").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 20)) {
            document.getElementById("three1").style.borderColor = "#FF0000";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "#78F000";
            document.getElementById("four1").style.borderWidth = "thick";
            document.getElementById("four1").style.margin = "-4px";
            document.getElementById("five1").style.borderColor = "#FFFF00";
            document.getElementById("five1").style.borderWidth = "thick";
            document.getElementById("five1").style.margin = "-4px";
            document.getElementById("six1").style.borderColor = "";
            document.getElementById("six1").style.borderWidth = "thin";
            document.getElementById("six1").style.margin = "";
        }
        //5th period
        else if ((hour == 2) && (minutes < 5)) {
            document.getElementById("four1").style.borderColor = "#FF0000";
            document.getElementById("four1").style.borderWidth = "thick";
            document.getElementById("four1").style.margin = "-4px";
            document.getElementById("five1").style.borderColor = "#78F000";
            document.getElementById("five1").style.borderWidth = "thick";
            document.getElementById("five1").style.margin = "-4px";
            document.getElementById("six1").style.borderColor = "#FFFF00";
            document.getElementById("six1").style.borderWidth = "thick";
            document.getElementById("six1").style.margin = "-4px";
            document.getElementById("seven1").style.borderColor = "";
            document.getElementById("seven1").style.borderWidth = "thin";
            document.getElementById("seven1").style.margin = "";
        }
        //7th period
        else if ((hour == 2) && (minutes >= 50)) {
            document.getElementById("five1").style.borderColor = "";
            document.getElementById("five1").style.borderWidth = "thin";
            document.getElementById("five1").style.margin = "";
            document.getElementById("six1").style.borderColor = "#FF0000";
            document.getElementById("six1").style.borderWidth = "thick";
            document.getElementById("six1").style.margin = "-4px";
            document.getElementById("seven1").style.borderColor = "#78F000";
            document.getElementById("seven1").style.borderWidth = "thick";
            document.getElementById("seven1").style.margin = "-4px";
            document.getElementById("eight1").style.borderColor = "#FFFF00";
            document.getElementById("eight1").style.borderWidth = "thick";
            document.getElementById("eight1").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 40)) {
            document.getElementById("six1").style.borderColor = "";
            document.getElementById("six1").style.borderWidth = "thin";
            document.getElementById("six1").style.margin = "";
            document.getElementById("seven1").style.borderColor = "#FF0000";
            document.getElementById("seven1").style.borderWidth = "thick";
            document.getElementById("seven1").style.margin = "-4px";
            document.getElementById("eight1").style.borderColor = "#78F000";
            document.getElementById("eight1").style.borderWidth = "thick";
            document.getElementById("eight1").style.margin = "-4px";
        }
    } else if (dayOfWeek == "Tuesday") {
        //1st period
        if ((hour == 10) && (minutes < 40)) {
            document.getElementById("one2").style.borderColor = "#78F000";
            document.getElementById("one2").style.borderWidth = "thick";
            document.getElementById("one2").style.margin = "-4px";
            document.getElementById("two2").style.borderColor = "#FFFF00";
            document.getElementById("two2").style.borderWidth = "thick";
            document.getElementById("two2").style.margin = "-4px";
            document.getElementById("three2").style.borderColor = "";
            document.getElementById("three2").style.borderWidth = "thin";
            document.getElementById("three2").style.margin = "";
            document.getElementById("four2").style.borderColor = "";
            document.getElementById("four2").style.borderWidth = "thin";
            document.getElementById("four2").style.margin = "";
        }
        //2nd period
        else if ((hour == 10) && (minutes >= 40)) {
            document.getElementById("one2").style.borderColor = "#FF0000";
            document.getElementById("one2").style.borderWidth = "thick";
            document.getElementById("one2").style.margin = "-4px";
            document.getElementById("two2").style.borderColor = "#78F000";
            document.getElementById("two2").style.borderWidth = "thick";
            document.getElementById("two2").style.margin = "-4px";
            document.getElementById("three2").style.borderColor = "#FFFF00";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "";
            document.getElementById("four2").style.borderWidth = "thin";
            document.getElementById("four2").style.margin = "";
        } else if ((hour == 11) && (minutes < 25)) {
            document.getElementById("one2").style.borderColor = "#FF0000";
            document.getElementById("one2").style.borderWidth = "thick";
            document.getElementById("one2").style.margin = "-4px";
            document.getElementById("two2").style.borderColor = "#78F000";
            document.getElementById("two2").style.borderWidth = "thick";
            document.getElementById("two2").style.margin = "-4px";
            document.getElementById("three2").style.borderColor = "#FFFF00";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "";
            document.getElementById("four2").style.borderWidth = "thin";
            document.getElementById("four2").style.margin = "";
            document.getElementById("five2").style.borderColor = "";
            document.getElementById("five2").style.borderWidth = "thin";
            document.getElementById("five2").style.margin = "";
            document.getElementById("six2").style.borderColor = "";
            document.getElementById("six2").style.borderWidth = "thin";
            document.getElementById("six2").style.margin = "";
        }
        //3rd period
        else if (((hour == 11) && (minutes >= 25)) || ((hour == 12) && (minutes < 10))) {
            document.getElementById("two2").style.borderColor = "#FF0000";
            document.getElementById("two2").style.borderWidth = "thick";
            document.getElementById("two2").style.margin = "-4px";
            document.getElementById("three2").style.borderColor = "#78F000";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "#FFFF00";
            document.getElementById("four2").style.borderWidth = "thick";
            document.getElementById("four2").style.margin = "-4px";
            document.getElementById("five2").style.borderColor = "";
            document.getElementById("five2").style.borderWidth = "thin";
            document.getElementById("five2").style.margin = "";
        }
        //Common Hour
        else if ((hour == 12) && (minutes >= 10) && (minutes < 40)) {
            document.getElementById("lunch2delay").style.borderColor = "#78F000";
            document.getElementById("lunch2delay").style.borderWidth = "thick";
            document.getElementById("lunch2delay").style.margin = "-4px";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 40)) {
            document.getElementById("three2").style.borderColor = "#FF0000";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "#78F000";
            document.getElementById("four2").style.borderWidth = "thick";
            document.getElementById("four2").style.margin = "-4px";
            document.getElementById("five2").style.borderColor = "#FFFF00";
            document.getElementById("five2").style.borderWidth = "thick";
            document.getElementById("five2").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 20)) {
            document.getElementById("three2").style.borderColor = "#FF0000";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "#78F000";
            document.getElementById("four2").style.borderWidth = "thick";
            document.getElementById("four2").style.margin = "-4px";
            document.getElementById("five2").style.borderColor = "#FFFF00";
            document.getElementById("five2").style.borderWidth = "thick";
            document.getElementById("five2").style.margin = "-4px";
            document.getElementById("six2").style.borderColor = "";
            document.getElementById("six2").style.borderWidth = "thin";
            document.getElementById("six2").style.margin = "";
        }
        //5th period
        else if ((hour == 2) && (minutes < 5)) {
            document.getElementById("four2").style.borderColor = "#FF0000";
            document.getElementById("four2").style.borderWidth = "thick";
            document.getElementById("four2").style.margin = "-4px";
            document.getElementById("five2").style.borderColor = "#78F000";
            document.getElementById("five2").style.borderWidth = "thick";
            document.getElementById("five2").style.margin = "-4px";
            document.getElementById("six2").style.borderColor = "#FFFF00";
            document.getElementById("six2").style.borderWidth = "thick";
            document.getElementById("six2").style.margin = "-4px";
            document.getElementById("seven2").style.borderColor = "";
            document.getElementById("seven2").style.borderWidth = "thin";
            document.getElementById("seven2").style.margin = "";
        }
        //7th period
        else if ((hour == 2) && (minutes >= 50)) {
            document.getElementById("five2").style.borderColor = "";
            document.getElementById("five2").style.borderWidth = "thin";
            document.getElementById("five2").style.margin = "";
            document.getElementById("six2").style.borderColor = "#FF0000";
            document.getElementById("six2").style.borderWidth = "thick";
            document.getElementById("six2").style.margin = "-4px";
            document.getElementById("seven2").style.borderColor = "#78F000";
            document.getElementById("seven2").style.borderWidth = "thick";
            document.getElementById("seven2").style.margin = "-4px";
            document.getElementById("eight2").style.borderColor = "#FFFF00";
            document.getElementById("eight2").style.borderWidth = "thick";
            document.getElementById("eight2").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 40)) {
            document.getElementById("six2").style.borderColor = "";
            document.getElementById("six2").style.borderWidth = "thin";
            document.getElementById("six2").style.margin = "";
            document.getElementById("seven2").style.borderColor = "#FF0000";
            document.getElementById("seven2").style.borderWidth = "thick";
            document.getElementById("seven2").style.margin = "-4px";
            document.getElementById("eight2").style.borderColor = "#78F000";
            document.getElementById("eight2").style.borderWidth = "thick";
            document.getElementById("eight2").style.margin = "-4px";
        }
    } else if (dayOfWeek == "Wednesday") {
        //1st period
        if ((hour == 10) && (minutes < 40)) {
            document.getElementById("one3").style.borderColor = "#78F000";
            document.getElementById("one3").style.borderWidth = "thick";
            document.getElementById("one3").style.margin = "-4px";
            document.getElementById("two3").style.borderColor = "#FFFF00";
            document.getElementById("two3").style.borderWidth = "thick";
            document.getElementById("two3").style.margin = "-4px";
            document.getElementById("three3").style.borderColor = "";
            document.getElementById("three3").style.borderWidth = "thin";
            document.getElementById("three3").style.margin = "";
            document.getElementById("four3").style.borderColor = "";
            document.getElementById("four3").style.borderWidth = "thin";
            document.getElementById("four3").style.margin = "";
        }
        //2nd period
        else if ((hour == 10) && (minutes >= 40)) {
            document.getElementById("one3").style.borderColor = "#FF0000";
            document.getElementById("one3").style.borderWidth = "thick";
            document.getElementById("one3").style.margin = "-4px";
            document.getElementById("two3").style.borderColor = "#78F000";
            document.getElementById("two3").style.borderWidth = "thick";
            document.getElementById("two3").style.margin = "-4px";
            document.getElementById("three3").style.borderColor = "#FFFF00";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "";
            document.getElementById("four3").style.borderWidth = "thin";
            document.getElementById("four3").style.margin = "";
        } else if ((hour == 11) && (minutes < 25)) {
            document.getElementById("one3").style.borderColor = "#FF0000";
            document.getElementById("one3").style.borderWidth = "thick";
            document.getElementById("one3").style.margin = "-4px";
            document.getElementById("two3").style.borderColor = "#78F000";
            document.getElementById("two3").style.borderWidth = "thick";
            document.getElementById("two3").style.margin = "-4px";
            document.getElementById("three3").style.borderColor = "#FFFF00";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "";
            document.getElementById("four3").style.borderWidth = "thin";
            document.getElementById("four3").style.margin = "";
            document.getElementById("five3").style.borderColor = "";
            document.getElementById("five3").style.borderWidth = "thin";
            document.getElementById("five3").style.margin = "";
            document.getElementById("six3").style.borderColor = "";
            document.getElementById("six3").style.borderWidth = "thin";
            document.getElementById("six3").style.margin = "";
        }
        //3rd period
        else if (((hour == 11) && (minutes >= 25)) || ((hour == 12) && (minutes < 10))) {
            document.getElementById("two3").style.borderColor = "#FF0000";
            document.getElementById("two3").style.borderWidth = "thick";
            document.getElementById("two3").style.margin = "-4px";
            document.getElementById("three3").style.borderColor = "#78F000";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "#FFFF00";
            document.getElementById("four3").style.borderWidth = "thick";
            document.getElementById("four3").style.margin = "-4px";
            document.getElementById("five3").style.borderColor = "";
            document.getElementById("five3").style.borderWidth = "thin";
            document.getElementById("five3").style.margin = "";
        }
        //Common Hour
        else if ((hour == 12) && (minutes >= 10) && (minutes < 40)) {
            document.getElementById("lunch3delay").style.borderColor = "#78F000";
            document.getElementById("lunch3delay").style.borderWidth = "thick";
            document.getElementById("lunch3delay").style.margin = "-4px";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 40)) {
            document.getElementById("three3").style.borderColor = "#FF0000";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "#78F000";
            document.getElementById("four3").style.borderWidth = "thick";
            document.getElementById("four3").style.margin = "-4px";
            document.getElementById("five3").style.borderColor = "#FFFF00";
            document.getElementById("five3").style.borderWidth = "thick";
            document.getElementById("five3").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 20)) {
            document.getElementById("three3").style.borderColor = "#FF0000";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "#78F000";
            document.getElementById("four3").style.borderWidth = "thick";
            document.getElementById("four3").style.margin = "-4px";
            document.getElementById("five3").style.borderColor = "#FFFF00";
            document.getElementById("five3").style.borderWidth = "thick";
            document.getElementById("five3").style.margin = "-4px";
            document.getElementById("six3").style.borderColor = "";
            document.getElementById("six3").style.borderWidth = "thin";
            document.getElementById("six3").style.margin = "";
        }
        //5th period
        else if ((hour == 2) && (minutes < 5)) {
            document.getElementById("four3").style.borderColor = "#FF0000";
            document.getElementById("four3").style.borderWidth = "thick";
            document.getElementById("four3").style.margin = "-4px";
            document.getElementById("five3").style.borderColor = "#78F000";
            document.getElementById("five3").style.borderWidth = "thick";
            document.getElementById("five3").style.margin = "-4px";
            document.getElementById("six3").style.borderColor = "#FFFF00";
            document.getElementById("six3").style.borderWidth = "thick";
            document.getElementById("six3").style.margin = "-4px";
            document.getElementById("seven3").style.borderColor = "";
            document.getElementById("seven3").style.borderWidth = "thin";
            document.getElementById("seven3").style.margin = "";
        }
        //7th period
        else if ((hour == 2) && (minutes >= 50)) {
            document.getElementById("five3").style.borderColor = "";
            document.getElementById("five3").style.borderWidth = "thin";
            document.getElementById("five3").style.margin = "";
            document.getElementById("six3").style.borderColor = "#FF0000";
            document.getElementById("six3").style.borderWidth = "thick";
            document.getElementById("six3").style.margin = "-4px";
            document.getElementById("seven3").style.borderColor = "#78F000";
            document.getElementById("seven3").style.borderWidth = "thick";
            document.getElementById("seven3").style.margin = "-4px";
            document.getElementById("eight3").style.borderColor = "#FFFF00";
            document.getElementById("eight3").style.borderWidth = "thick";
            document.getElementById("eight3").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 40)) {
            document.getElementById("six3").style.borderColor = "";
            document.getElementById("six3").style.borderWidth = "thin";
            document.getElementById("six3").style.margin = "";
            document.getElementById("seven3").style.borderColor = "#FF0000";
            document.getElementById("seven3").style.borderWidth = "thick";
            document.getElementById("seven3").style.margin = "-4px";
            document.getElementById("eight3").style.borderColor = "#78F000";
            document.getElementById("eight3").style.borderWidth = "thick";
            document.getElementById("eight3").style.margin = "-4px";
        }
    } else if (dayOfWeek == "Thursday") {
        //1st period
        if ((hour == 10) && (minutes < 40)) {
            document.getElementById("one4").style.borderColor = "#78F000";
            document.getElementById("one4").style.borderWidth = "thick";
            document.getElementById("one4").style.margin = "-4px";
            document.getElementById("two4").style.borderColor = "#FFFF00";
            document.getElementById("two4").style.borderWidth = "thick";
            document.getElementById("two4").style.margin = "-4px";
            document.getElementById("three4").style.borderColor = "";
            document.getElementById("three4").style.borderWidth = "thin";
            document.getElementById("three4").style.margin = "";
            document.getElementById("four4").style.borderColor = "";
            document.getElementById("four4").style.borderWidth = "thin";
            document.getElementById("four4").style.margin = "";
        }
        //2nd period
        else if ((hour == 10) && (minutes >= 40)) {
            document.getElementById("one4").style.borderColor = "#FF0000";
            document.getElementById("one4").style.borderWidth = "thick";
            document.getElementById("one4").style.margin = "-4px";
            document.getElementById("two4").style.borderColor = "#78F000";
            document.getElementById("two4").style.borderWidth = "thick";
            document.getElementById("two4").style.margin = "-4px";
            document.getElementById("three4").style.borderColor = "#FFFF00";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "";
            document.getElementById("four4").style.borderWidth = "thin";
            document.getElementById("four4").style.margin = "";
        } else if ((hour == 11) && (minutes < 25)) {
            document.getElementById("one4").style.borderColor = "#FF0000";
            document.getElementById("one4").style.borderWidth = "thick";
            document.getElementById("one4").style.margin = "-4px";
            document.getElementById("two4").style.borderColor = "#78F000";
            document.getElementById("two4").style.borderWidth = "thick";
            document.getElementById("two4").style.margin = "-4px";
            document.getElementById("three4").style.borderColor = "#FFFF00";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "";
            document.getElementById("four4").style.borderWidth = "thin";
            document.getElementById("four4").style.margin = "";
            document.getElementById("five4").style.borderColor = "";
            document.getElementById("five4").style.borderWidth = "thin";
            document.getElementById("five4").style.margin = "";
            document.getElementById("six4").style.borderColor = "";
            document.getElementById("six4").style.borderWidth = "thin";
            document.getElementById("six4").style.margin = "";
        }
        //3rd period
        else if (((hour == 11) && (minutes >= 25)) || ((hour == 12) && (minutes < 10))) {
            document.getElementById("two4").style.borderColor = "#FF0000";
            document.getElementById("two4").style.borderWidth = "thick";
            document.getElementById("two4").style.margin = "-4px";
            document.getElementById("three4").style.borderColor = "#78F000";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "#FFFF00";
            document.getElementById("four4").style.borderWidth = "thick";
            document.getElementById("four4").style.margin = "-4px";
            document.getElementById("five4").style.borderColor = "";
            document.getElementById("five4").style.borderWidth = "thin";
            document.getElementById("five4").style.margin = "";
        }
        //Common Hour
        else if ((hour == 12) && (minutes >= 10) && (minutes < 40)) {
            document.getElementById("lunch4delay").style.borderColor = "#78F000";
            document.getElementById("lunch4delay").style.borderWidth = "thick";
            document.getElementById("lunch4delay").style.margin = "-4px";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 40)) {
            document.getElementById("three4").style.borderColor = "#FF0000";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "#78F000";
            document.getElementById("four4").style.borderWidth = "thick";
            document.getElementById("four4").style.margin = "-4px";
            document.getElementById("five4").style.borderColor = "#FFFF00";
            document.getElementById("five4").style.borderWidth = "thick";
            document.getElementById("five4").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 20)) {
            document.getElementById("three4").style.borderColor = "#FF0000";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "#78F000";
            document.getElementById("four4").style.borderWidth = "thick";
            document.getElementById("four4").style.margin = "-4px";
            document.getElementById("five4").style.borderColor = "#FFFF00";
            document.getElementById("five4").style.borderWidth = "thick";
            document.getElementById("five4").style.margin = "-4px";
            document.getElementById("six4").style.borderColor = "";
            document.getElementById("six4").style.borderWidth = "thin";
            document.getElementById("six4").style.margin = "";
        }
        //5th period
        else if ((hour == 2) && (minutes < 5)) {
            document.getElementById("four4").style.borderColor = "#FF0000";
            document.getElementById("four4").style.borderWidth = "thick";
            document.getElementById("four4").style.margin = "-4px";
            document.getElementById("five4").style.borderColor = "#78F000";
            document.getElementById("five4").style.borderWidth = "thick";
            document.getElementById("five4").style.margin = "-4px";
            document.getElementById("six4").style.borderColor = "#FFFF00";
            document.getElementById("six4").style.borderWidth = "thick";
            document.getElementById("six4").style.margin = "-4px";
            document.getElementById("seven4").style.borderColor = "";
            document.getElementById("seven4").style.borderWidth = "thin";
            document.getElementById("seven4").style.margin = "";
        }
        //7th period
        else if ((hour == 2) && (minutes >= 50)) {
            document.getElementById("five4").style.borderColor = "";
            document.getElementById("five4").style.borderWidth = "thin";
            document.getElementById("five4").style.margin = "";
            document.getElementById("six4").style.borderColor = "#FF0000";
            document.getElementById("six4").style.borderWidth = "thick";
            document.getElementById("six4").style.margin = "-4px";
            document.getElementById("seven4").style.borderColor = "#78F000";
            document.getElementById("seven4").style.borderWidth = "thick";
            document.getElementById("seven4").style.margin = "-4px";
            document.getElementById("eight4").style.borderColor = "#FFFF00";
            document.getElementById("eight4").style.borderWidth = "thick";
            document.getElementById("eight4").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 40)) {
            document.getElementById("six4").style.borderColor = "";
            document.getElementById("six4").style.borderWidth = "thin";
            document.getElementById("six4").style.margin = "";
            document.getElementById("seven4").style.borderColor = "#FF0000";
            document.getElementById("seven4").style.borderWidth = "thick";
            document.getElementById("seven4").style.margin = "-4px";
            document.getElementById("eight4").style.borderColor = "#78F000";
            document.getElementById("eight4").style.borderWidth = "thick";
            document.getElementById("eight4").style.margin = "-4px";
        }
    } else if (dayOfWeek == "Friday") {
        //1st period
        if ((hour == 10) && (minutes < 40)) {
            document.getElementById("one5").style.borderColor = "#78F000";
            document.getElementById("one5").style.borderWidth = "thick";
            document.getElementById("one5").style.margin = "-4px";
            document.getElementById("two5").style.borderColor = "#FFFF00";
            document.getElementById("two5").style.borderWidth = "thick";
            document.getElementById("two5").style.margin = "-4px";
            document.getElementById("three5").style.borderColor = "";
            document.getElementById("three5").style.borderWidth = "thin";
            document.getElementById("three5").style.margin = "";
            document.getElementById("four5").style.borderColor = "";
            document.getElementById("four5").style.borderWidth = "thin";
            document.getElementById("four5").style.margin = "";
        }
        //2nd period
        else if ((hour == 10) && (minutes >= 40)) {
            document.getElementById("one5").style.borderColor = "#FF0000";
            document.getElementById("one5").style.borderWidth = "thick";
            document.getElementById("one5").style.margin = "-4px";
            document.getElementById("two5").style.borderColor = "#78F000";
            document.getElementById("two5").style.borderWidth = "thick";
            document.getElementById("two5").style.margin = "-4px";
            document.getElementById("three5").style.borderColor = "#FFFF00";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "";
            document.getElementById("four5").style.borderWidth = "thin";
            document.getElementById("four5").style.margin = "";
        } else if ((hour == 11) && (minutes < 25)) {
            document.getElementById("one5").style.borderColor = "#FF0000";
            document.getElementById("one5").style.borderWidth = "thick";
            document.getElementById("one5").style.margin = "-4px";
            document.getElementById("two5").style.borderColor = "#78F000";
            document.getElementById("two5").style.borderWidth = "thick";
            document.getElementById("two5").style.margin = "-4px";
            document.getElementById("three5").style.borderColor = "#FFFF00";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "";
            document.getElementById("four5").style.borderWidth = "thin";
            document.getElementById("four5").style.margin = "";
            document.getElementById("five5").style.borderColor = "";
            document.getElementById("five5").style.borderWidth = "thin";
            document.getElementById("five5").style.margin = "";
            document.getElementById("six5").style.borderColor = "";
            document.getElementById("six5").style.borderWidth = "thin";
            document.getElementById("six5").style.margin = "";
        }
        //3rd period
        else if (((hour == 11) && (minutes >= 25)) || ((hour == 12) && (minutes < 10))) {
            document.getElementById("two5").style.borderColor = "#FF0000";
            document.getElementById("two5").style.borderWidth = "thick";
            document.getElementById("two5").style.margin = "-4px";
            document.getElementById("three5").style.borderColor = "#78F000";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "#FFFF00";
            document.getElementById("four5").style.borderWidth = "thick";
            document.getElementById("four5").style.margin = "-4px";
            document.getElementById("five5").style.borderColor = "";
            document.getElementById("five5").style.borderWidth = "thin";
            document.getElementById("five5").style.margin = "";
        }
        //Common Hour
        else if ((hour == 12) && (minutes >= 10) && (minutes < 40)) {
            document.getElementById("lunch5delay").style.borderColor = "#78F000";
            document.getElementById("lunch5delay").style.borderWidth = "thick";
            document.getElementById("lunch5delay").style.margin = "-4px";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 40)) {
            document.getElementById("three5").style.borderColor = "#FF0000";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "#78F000";
            document.getElementById("four5").style.borderWidth = "thick";
            document.getElementById("four5").style.margin = "-4px";
            document.getElementById("five5").style.borderColor = "#FFFF00";
            document.getElementById("five5").style.borderWidth = "thick";
            document.getElementById("five5").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 20)) {
            document.getElementById("three5").style.borderColor = "#FF0000";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "#78F000";
            document.getElementById("four5").style.borderWidth = "thick";
            document.getElementById("four5").style.margin = "-4px";
            document.getElementById("five5").style.borderColor = "#FFFF00";
            document.getElementById("five5").style.borderWidth = "thick";
            document.getElementById("five5").style.margin = "-4px";
            document.getElementById("six5").style.borderColor = "";
            document.getElementById("six5").style.borderWidth = "thin";
            document.getElementById("six5").style.margin = "";
        }
        //5th period
        else if ((hour == 2) && (minutes < 5)) {
            document.getElementById("four5").style.borderColor = "#FF0000";
            document.getElementById("four5").style.borderWidth = "thick";
            document.getElementById("four5").style.margin = "-4px";
            document.getElementById("five5").style.borderColor = "#78F000";
            document.getElementById("five5").style.borderWidth = "thick";
            document.getElementById("five5").style.margin = "-4px";
            document.getElementById("six5").style.borderColor = "#FFFF00";
            document.getElementById("six5").style.borderWidth = "thick";
            document.getElementById("six5").style.margin = "-4px";
            document.getElementById("seven5").style.borderColor = "";
            document.getElementById("seven5").style.borderWidth = "thin";
            document.getElementById("seven5").style.margin = "";
        }
        //7th period
        else if ((hour == 2) && (minutes >= 50)) {
            document.getElementById("five5").style.borderColor = "";
            document.getElementById("five5").style.borderWidth = "thin";
            document.getElementById("five5").style.margin = "";
            document.getElementById("six5").style.borderColor = "#FF0000";
            document.getElementById("six5").style.borderWidth = "thick";
            document.getElementById("six5").style.margin = "-4px";
            document.getElementById("seven5").style.borderColor = "#78F000";
            document.getElementById("seven5").style.borderWidth = "thick";
            document.getElementById("seven5").style.margin = "-4px";
            document.getElementById("eight5").style.borderColor = "#FFFF00";
            document.getElementById("eight5").style.borderWidth = "thick";
            document.getElementById("eight5").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 40)) {
            document.getElementById("six5").style.borderColor = "";
            document.getElementById("six5").style.borderWidth = "thin";
            document.getElementById("six5").style.margin = "";
            document.getElementById("seven5").style.borderColor = "#FF0000";
            document.getElementById("seven5").style.borderWidth = "thick";
            document.getElementById("seven5").style.margin = "-4px";
            document.getElementById("eight5").style.borderColor = "#78F000";
            document.getElementById("eight5").style.borderWidth = "thick";
            document.getElementById("eight5").style.margin = "-4px";
        }
    }
}

function threeHourDelay() {
    document.getElementById("lunch0").innerHTML = "";
    document.getElementById("lunch1").className = "";
    document.getElementById("lunch1").innerHTML = "";
    document.getElementById("lunch2").className = "";
    document.getElementById("lunch2").innerHTML = "";
    document.getElementById("lunch3").className = "";
    document.getElementById("lunch3").innerHTML = "";
    document.getElementById("lunch4").className = "";
    document.getElementById("lunch4").innerHTML = "";
    document.getElementById("lunch5").className = "";
    document.getElementById("lunch5").innerHTML = "";
    document.getElementById("lunch0delay").innerHTML = "";
    document.getElementById("lunch1delay").className = "";
    document.getElementById("lunch1delay").innerHTML = "";
    document.getElementById("lunch2delay").className = "";
    document.getElementById("lunch2delay").innerHTML = "";
    document.getElementById("lunch3delay").className = "";
    document.getElementById("lunch3delay").innerHTML = "";
    document.getElementById("lunch4delay").className = "";
    document.getElementById("lunch4delay").innerHTML = "";
    document.getElementById("lunch5delay").className = "";
    document.getElementById("lunch5delay").innerHTML = "";
    document.getElementById("period1first").innerHTML = "11:00am";
    document.getElementById("period1second").innerHTML = "11:35am";
    document.getElementById("period2first").innerHTML = "11:40am";
    document.getElementById("period2second").innerHTML = "12:15am";
    document.getElementById("period3first").innerHTML = "12:20am";
    document.getElementById("period3second").innerHTML = "12:55pm";
    document.getElementById("period4first").innerHTML = "1:00pm";
    document.getElementById("period4second").innerHTML = "1:35pm";
    document.getElementById("period5first").innerHTML = "1:40pm";
    document.getElementById("period5second").innerHTML = "2:15pm";
    document.getElementById("period6first").innerHTML = "2:20pm";
    document.getElementById("period6second").innerHTML = "2:55pm";
    document.getElementById("period7first").innerHTML = "3:00pm";
    document.getElementById("period7second").innerHTML = "3:35pm";
    document.getElementById("period8first").innerHTML = "3:40pm";
    document.getElementById("period8second").innerHTML = "4:15pm";
    document.getElementById("period1").style.color = "#FFFF00";
    document.getElementById("period2").style.color = "#FFFF00";
    document.getElementById("period3").style.color = "#FFFF00";
    document.getElementById("period4").style.color = "#FFFF00";
    document.getElementById("period5").style.color = "#FFFF00";
    document.getElementById("period6").style.color = "#FFFF00";
    document.getElementById("period7").style.color = "#FFFF00";
    document.getElementById("period8").style.color = "#FFFF00";
    var hour = time.split(":")[0];
    var minutes = time.split(":")[1];
    if (dayOfWeek == "Monday") {
        //1st period
        if ((hour == 11) && (minutes < 35)) {
            document.getElementById("one1").style.borderColor = "#78F000";
            document.getElementById("one1").style.borderWidth = "thick";
            document.getElementById("one1").style.margin = "-4px";
            document.getElementById("two1").style.borderColor = "#FFFF00";
            document.getElementById("two1").style.borderWidth = "thick";
            document.getElementById("two1").style.margin = "-4px";
            document.getElementById("three1").style.borderColor = "";
            document.getElementById("three1").style.borderWidth = "thin";
            document.getElementById("three1").style.margin = "";
            document.getElementById("four1").style.borderColor = "";
            document.getElementById("four1").style.borderWidth = "thin";
            document.getElementById("four1").style.margin = "";
            document.getElementById("five1").style.borderColor = "";
            document.getElementById("five1").style.borderWidth = "thin";
            document.getElementById("five1").style.margin = "";
        }
        //2nd period
        else if ((hour == 11) && (minutes >= 35)) {
            document.getElementById("one1").style.borderColor = "#FF0000";
            document.getElementById("one1").style.borderWidth = "thick";
            document.getElementById("one1").style.margin = "-4px";
            document.getElementById("two1").style.borderColor = "#78F000";
            document.getElementById("two1").style.borderWidth = "thick";
            document.getElementById("two1").style.margin = "-4px";
            document.getElementById("three1").style.borderColor = "#FFFF00";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "";
            document.getElementById("four1").style.borderWidth = "thin";
            document.getElementById("four1").style.margin = "";
            document.getElementById("five1").style.borderColor = "";
            document.getElementById("five1").style.borderWidth = "thin";
            document.getElementById("five1").style.margin = "";
        } else if ((hour == 12) && (minutes < 15)) {
            document.getElementById("one1").style.borderColor = "#FF0000";
            document.getElementById("one1").style.borderWidth = "thick";
            document.getElementById("one1").style.margin = "-4px";
            document.getElementById("two1").style.borderColor = "#78F000";
            document.getElementById("two1").style.borderWidth = "thick";
            document.getElementById("two1").style.margin = "-4px";
            document.getElementById("three1").style.borderColor = "#FFFF00";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "";
            document.getElementById("four1").style.borderWidth = "thin";
            document.getElementById("four1").style.margin = "";
            document.getElementById("five1").style.borderColor = "";
            document.getElementById("five1").style.borderWidth = "thin";
            document.getElementById("five1").style.margin = "";
            document.getElementById("six1").style.borderColor = "";
            document.getElementById("six1").style.borderWidth = "thin";
            document.getElementById("six1").style.margin = "";
        }
        //3rd period
        else if (((hour == 12) && (minutes >= 15)) || ((hour == 12) && (minutes < 55))) {
            document.getElementById("two1").style.borderColor = "#FF0000";
            document.getElementById("two1").style.borderWidth = "thick";
            document.getElementById("two1").style.margin = "-4px";
            document.getElementById("three1").style.borderColor = "#78F000";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "#FFFF00";
            document.getElementById("four1").style.borderWidth = "thick";
            document.getElementById("four1").style.margin = "-4px";
            document.getElementById("five1").style.borderColor = "";
            document.getElementById("five1").style.borderWidth = "thin";
            document.getElementById("five1").style.margin = "";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 55)) {
            document.getElementById("three1").style.borderColor = "#FF0000";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "#78F000";
            document.getElementById("four1").style.borderWidth = "thick";
            document.getElementById("four1").style.margin = "-4px";
            document.getElementById("five1").style.borderColor = "#FFFF00";
            document.getElementById("five1").style.borderWidth = "thick";
            document.getElementById("five1").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 35)) {
            document.getElementById("three1").style.borderColor = "#FF0000";
            document.getElementById("three1").style.borderWidth = "thick";
            document.getElementById("three1").style.margin = "-4px";
            document.getElementById("four1").style.borderColor = "#78F000";
            document.getElementById("four1").style.borderWidth = "thick";
            document.getElementById("four1").style.margin = "-4px";
            document.getElementById("five1").style.borderColor = "#FFFF00";
            document.getElementById("five1").style.borderWidth = "thick";
            document.getElementById("five1").style.margin = "-4px";
            document.getElementById("six1").style.borderColor = "";
            document.getElementById("six1").style.borderWidth = "thin";
            document.getElementById("six1").style.margin = "";
        }
        //5th period
        else if (((hour == 1) && (minutes >= 35)) || ((hour == 2) && (minutes < 15))) {
            document.getElementById("four1").style.borderColor = "#FF0000";
            document.getElementById("four1").style.borderWidth = "thick";
            document.getElementById("four1").style.margin = "-4px";
            document.getElementById("five1").style.borderColor = "#78F000";
            document.getElementById("five1").style.borderWidth = "thick";
            document.getElementById("five1").style.margin = "-4px";
            document.getElementById("six1").style.borderColor = "#FFFF00";
            document.getElementById("six1").style.borderWidth = "thick";
            document.getElementById("six1").style.margin = "-4px";
            document.getElementById("seven1").style.borderColor = "";
            document.getElementById("seven1").style.borderWidth = "thin";
            document.getElementById("seven1").style.margin = "";
        }
        //6th period
        else if (((hour == 2) && (minutes >= 15)) || ((hour == 2) && (minutes < 55))) {
            document.getElementById("four1").style.borderColor = "";
            document.getElementById("four1").style.borderWidth = "thin";
            document.getElementById("four1").style.margin = "";
            document.getElementById("five1").style.borderColor = "#FF0000";
            document.getElementById("five1").style.borderWidth = "thick";
            document.getElementById("five1").style.margin = "-4px";
            document.getElementById("six1").style.borderColor = "#78F000";
            document.getElementById("six1").style.borderWidth = "thick";
            document.getElementById("six1").style.margin = "-4px";
            document.getElementById("seven1").style.borderColor = "#FFFF00";
            document.getElementById("seven1").style.borderWidth = "thick";
            document.getElementById("seven1").style.margin = "-4px";
        }
        //7th period
        else if (((hour == 2) && (minutes >= 55)) || ((hour == 3) && (minutes < 35))) {
            document.getElementById("five1").style.borderColor = "";
            document.getElementById("five1").style.borderWidth = "thin";
            document.getElementById("five1").style.margin = "";
            document.getElementById("six1").style.borderColor = "#FF0000";
            document.getElementById("six1").style.borderWidth = "thick";
            document.getElementById("six1").style.margin = "-4px";
            document.getElementById("seven1").style.borderColor = "#78F000";
            document.getElementById("seven1").style.borderWidth = "thick";
            document.getElementById("seven1").style.margin = "-4px";
            document.getElementById("eight1").style.borderColor = "#FFFF00";
            document.getElementById("eight1").style.borderWidth = "thick";
            document.getElementById("eight1").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 35)) {
            document.getElementById("six1").style.borderColor = "";
            document.getElementById("six1").style.borderWidth = "thin";
            document.getElementById("six1").style.margin = "";
            document.getElementById("seven1").style.borderColor = "#FF0000";
            document.getElementById("seven1").style.borderWidth = "thick";
            document.getElementById("seven1").style.margin = "-4px";
            document.getElementById("eight1").style.borderColor = "#78F000";
            document.getElementById("eight1").style.borderWidth = "thick";
            document.getElementById("eight1").style.margin = "-4px";
        }
    }
    if (dayOfWeek == "Tuesday") {
        //1st period
        if ((hour == 11) && (minutes < 35)) {
            document.getElementById("one2").style.borderColor = "#78F000";
            document.getElementById("one2").style.borderWidth = "thick";
            document.getElementById("one2").style.margin = "-4px";
            document.getElementById("two2").style.borderColor = "#FFFF00";
            document.getElementById("two2").style.borderWidth = "thick";
            document.getElementById("two2").style.margin = "-4px";
            document.getElementById("three2").style.borderColor = "";
            document.getElementById("three2").style.borderWidth = "thin";
            document.getElementById("three2").style.margin = "";
            document.getElementById("four2").style.borderColor = "";
            document.getElementById("four2").style.borderWidth = "thin";
            document.getElementById("four2").style.margin = "";
            document.getElementById("five2").style.borderColor = "";
            document.getElementById("five2").style.borderWidth = "thin";
            document.getElementById("five2").style.margin = "";
        }
        //2nd period
        else if ((hour == 11) && (minutes >= 35)) {
            document.getElementById("one2").style.borderColor = "#FF0000";
            document.getElementById("one2").style.borderWidth = "thick";
            document.getElementById("one2").style.margin = "-4px";
            document.getElementById("two2").style.borderColor = "#78F000";
            document.getElementById("two2").style.borderWidth = "thick";
            document.getElementById("two2").style.margin = "-4px";
            document.getElementById("three2").style.borderColor = "#FFFF00";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "";
            document.getElementById("four2").style.borderWidth = "thin";
            document.getElementById("four2").style.margin = "";
            document.getElementById("five2").style.borderColor = "";
            document.getElementById("five2").style.borderWidth = "thin";
            document.getElementById("five2").style.margin = "";
        } else if ((hour == 12) && (minutes < 15)) {
            document.getElementById("one2").style.borderColor = "#FF0000";
            document.getElementById("one2").style.borderWidth = "thick";
            document.getElementById("one2").style.margin = "-4px";
            document.getElementById("two2").style.borderColor = "#78F000";
            document.getElementById("two2").style.borderWidth = "thick";
            document.getElementById("two2").style.margin = "-4px";
            document.getElementById("three2").style.borderColor = "#FFFF00";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "";
            document.getElementById("four2").style.borderWidth = "thin";
            document.getElementById("four2").style.margin = "";
            document.getElementById("five2").style.borderColor = "";
            document.getElementById("five2").style.borderWidth = "thin";
            document.getElementById("five2").style.margin = "";
            document.getElementById("six2").style.borderColor = "";
            document.getElementById("six2").style.borderWidth = "thin";
            document.getElementById("six2").style.margin = "";
        }
        //3rd period
        else if (((hour == 12) && (minutes >= 15)) || ((hour == 12) && (minutes < 55))) {
            document.getElementById("two2").style.borderColor = "#FF0000";
            document.getElementById("two2").style.borderWidth = "thick";
            document.getElementById("two2").style.margin = "-4px";
            document.getElementById("three2").style.borderColor = "#78F000";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "#FFFF00";
            document.getElementById("four2").style.borderWidth = "thick";
            document.getElementById("four2").style.margin = "-4px";
            document.getElementById("five2").style.borderColor = "";
            document.getElementById("five2").style.borderWidth = "thin";
            document.getElementById("five2").style.margin = "";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 55)) {
            document.getElementById("three2").style.borderColor = "#FF0000";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "#78F000";
            document.getElementById("four2").style.borderWidth = "thick";
            document.getElementById("four2").style.margin = "-4px";
            document.getElementById("five2").style.borderColor = "#FFFF00";
            document.getElementById("five2").style.borderWidth = "thick";
            document.getElementById("five2").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 35)) {
            document.getElementById("three2").style.borderColor = "#FF0000";
            document.getElementById("three2").style.borderWidth = "thick";
            document.getElementById("three2").style.margin = "-4px";
            document.getElementById("four2").style.borderColor = "#78F000";
            document.getElementById("four2").style.borderWidth = "thick";
            document.getElementById("four2").style.margin = "-4px";
            document.getElementById("five2").style.borderColor = "#FFFF00";
            document.getElementById("five2").style.borderWidth = "thick";
            document.getElementById("five2").style.margin = "-4px";
            document.getElementById("six2").style.borderColor = "";
            document.getElementById("six2").style.borderWidth = "thin";
            document.getElementById("six2").style.margin = "";
        }
        //5th period
        else if (((hour == 1) && (minutes >= 35)) || ((hour == 2) && (minutes < 15))) {
            document.getElementById("four2").style.borderColor = "#FF0000";
            document.getElementById("four2").style.borderWidth = "thick";
            document.getElementById("four2").style.margin = "-4px";
            document.getElementById("five2").style.borderColor = "#78F000";
            document.getElementById("five2").style.borderWidth = "thick";
            document.getElementById("five2").style.margin = "-4px";
            document.getElementById("six2").style.borderColor = "#FFFF00";
            document.getElementById("six2").style.borderWidth = "thick";
            document.getElementById("six2").style.margin = "-4px";
            document.getElementById("seven2").style.borderColor = "";
            document.getElementById("seven2").style.borderWidth = "thin";
            document.getElementById("seven2").style.margin = "";
        }
        //6th period
        else if (((hour == 2) && (minutes >= 15)) || ((hour == 2) && (minutes < 55))) {
            document.getElementById("four2").style.borderColor = "";
            document.getElementById("four2").style.borderWidth = "thin";
            document.getElementById("four2").style.margin = "";
            document.getElementById("five2").style.borderColor = "#FF0000";
            document.getElementById("five2").style.borderWidth = "thick";
            document.getElementById("five2").style.margin = "-4px";
            document.getElementById("six2").style.borderColor = "#78F000";
            document.getElementById("six2").style.borderWidth = "thick";
            document.getElementById("six2").style.margin = "-4px";
            document.getElementById("seven2").style.borderColor = "#FFFF00";
            document.getElementById("seven2").style.borderWidth = "thick";
            document.getElementById("seven2").style.margin = "-4px";
        }
        //7th period
        else if (((hour == 2) && (minutes >= 55)) || ((hour == 3) && (minutes < 35))) {
            document.getElementById("five2").style.borderColor = "";
            document.getElementById("five2").style.borderWidth = "thin";
            document.getElementById("five2").style.margin = "";
            document.getElementById("six2").style.borderColor = "#FF0000";
            document.getElementById("six2").style.borderWidth = "thick";
            document.getElementById("six2").style.margin = "-4px";
            document.getElementById("seven2").style.borderColor = "#78F000";
            document.getElementById("seven2").style.borderWidth = "thick";
            document.getElementById("seven2").style.margin = "-4px";
            document.getElementById("eight2").style.borderColor = "#FFFF00";
            document.getElementById("eight2").style.borderWidth = "thick";
            document.getElementById("eight2").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 35)) {
            document.getElementById("six2").style.borderColor = "";
            document.getElementById("six2").style.borderWidth = "thin";
            document.getElementById("six2").style.margin = "";
            document.getElementById("seven2").style.borderColor = "#FF0000";
            document.getElementById("seven2").style.borderWidth = "thick";
            document.getElementById("seven2").style.margin = "-4px";
            document.getElementById("eight2").style.borderColor = "#78F000";
            document.getElementById("eight2").style.borderWidth = "thick";
            document.getElementById("eight2").style.margin = "-4px";
        }
    }
    if (dayOfWeek == "Wednesday") {
        //1st period
        if ((hour == 11) && (minutes < 35)) {
            document.getElementById("one3").style.borderColor = "#78F000";
            document.getElementById("one3").style.borderWidth = "thick";
            document.getElementById("one3").style.margin = "-4px";
            document.getElementById("two3").style.borderColor = "#FFFF00";
            document.getElementById("two3").style.borderWidth = "thick";
            document.getElementById("two3").style.margin = "-4px";
            document.getElementById("three3").style.borderColor = "";
            document.getElementById("three3").style.borderWidth = "thin";
            document.getElementById("three3").style.margin = "";
            document.getElementById("four3").style.borderColor = "";
            document.getElementById("four3").style.borderWidth = "thin";
            document.getElementById("four3").style.margin = "";
            document.getElementById("five3").style.borderColor = "";
            document.getElementById("five3").style.borderWidth = "thin";
            document.getElementById("five3").style.margin = "";
        }
        //2nd period
        else if ((hour == 11) && (minutes >= 35)) {
            document.getElementById("one3").style.borderColor = "#FF0000";
            document.getElementById("one3").style.borderWidth = "thick";
            document.getElementById("one3").style.margin = "-4px";
            document.getElementById("two3").style.borderColor = "#78F000";
            document.getElementById("two3").style.borderWidth = "thick";
            document.getElementById("two3").style.margin = "-4px";
            document.getElementById("three3").style.borderColor = "#FFFF00";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "";
            document.getElementById("four3").style.borderWidth = "thin";
            document.getElementById("four3").style.margin = "";
            document.getElementById("five3").style.borderColor = "";
            document.getElementById("five3").style.borderWidth = "thin";
            document.getElementById("five3").style.margin = "";
        } else if ((hour == 12) && (minutes < 15)) {
            document.getElementById("one3").style.borderColor = "#FF0000";
            document.getElementById("one3").style.borderWidth = "thick";
            document.getElementById("one3").style.margin = "-4px";
            document.getElementById("two3").style.borderColor = "#78F000";
            document.getElementById("two3").style.borderWidth = "thick";
            document.getElementById("two3").style.margin = "-4px";
            document.getElementById("three3").style.borderColor = "#FFFF00";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "";
            document.getElementById("four3").style.borderWidth = "thin";
            document.getElementById("four3").style.margin = "";
            document.getElementById("five3").style.borderColor = "";
            document.getElementById("five3").style.borderWidth = "thin";
            document.getElementById("five3").style.margin = "";
            document.getElementById("six3").style.borderColor = "";
            document.getElementById("six3").style.borderWidth = "thin";
            document.getElementById("six3").style.margin = "";
        }
        //3rd period
        else if (((hour == 12) && (minutes >= 15)) || ((hour == 12) && (minutes < 55))) {
            document.getElementById("two3").style.borderColor = "#FF0000";
            document.getElementById("two3").style.borderWidth = "thick";
            document.getElementById("two3").style.margin = "-4px";
            document.getElementById("three3").style.borderColor = "#78F000";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "#FFFF00";
            document.getElementById("four3").style.borderWidth = "thick";
            document.getElementById("four3").style.margin = "-4px";
            document.getElementById("five3").style.borderColor = "";
            document.getElementById("five3").style.borderWidth = "thin";
            document.getElementById("five3").style.margin = "";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 55)) {
            document.getElementById("three3").style.borderColor = "#FF0000";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "#78F000";
            document.getElementById("four3").style.borderWidth = "thick";
            document.getElementById("four3").style.margin = "-4px";
            document.getElementById("five3").style.borderColor = "#FFFF00";
            document.getElementById("five3").style.borderWidth = "thick";
            document.getElementById("five3").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 35)) {
            document.getElementById("three3").style.borderColor = "#FF0000";
            document.getElementById("three3").style.borderWidth = "thick";
            document.getElementById("three3").style.margin = "-4px";
            document.getElementById("four3").style.borderColor = "#78F000";
            document.getElementById("four3").style.borderWidth = "thick";
            document.getElementById("four3").style.margin = "-4px";
            document.getElementById("five3").style.borderColor = "#FFFF00";
            document.getElementById("five3").style.borderWidth = "thick";
            document.getElementById("five3").style.margin = "-4px";
            document.getElementById("six3").style.borderColor = "";
            document.getElementById("six3").style.borderWidth = "thin";
            document.getElementById("six3").style.margin = "";
        }
        //5th period
        else if (((hour == 1) && (minutes >= 35)) || ((hour == 2) && (minutes < 15))) {
            document.getElementById("four3").style.borderColor = "#FF0000";
            document.getElementById("four3").style.borderWidth = "thick";
            document.getElementById("four3").style.margin = "-4px";
            document.getElementById("five3").style.borderColor = "#78F000";
            document.getElementById("five3").style.borderWidth = "thick";
            document.getElementById("five3").style.margin = "-4px";
            document.getElementById("six3").style.borderColor = "#FFFF00";
            document.getElementById("six3").style.borderWidth = "thick";
            document.getElementById("six3").style.margin = "-4px";
            document.getElementById("seven3").style.borderColor = "";
            document.getElementById("seven3").style.borderWidth = "thin";
            document.getElementById("seven3").style.margin = "";
        }
        //6th period
        else if (((hour == 2) && (minutes >= 15)) || ((hour == 2) && (minutes < 55))) {
            document.getElementById("four3").style.borderColor = "";
            document.getElementById("four3").style.borderWidth = "thin";
            document.getElementById("four3").style.margin = "";
            document.getElementById("five3").style.borderColor = "#FF0000";
            document.getElementById("five3").style.borderWidth = "thick";
            document.getElementById("five3").style.margin = "-4px";
            document.getElementById("six3").style.borderColor = "#78F000";
            document.getElementById("six3").style.borderWidth = "thick";
            document.getElementById("six3").style.margin = "-4px";
            document.getElementById("seven3").style.borderColor = "#FFFF00";
            document.getElementById("seven3").style.borderWidth = "thick";
            document.getElementById("seven3").style.margin = "-4px";
        }
        //7th period
        else if (((hour == 2) && (minutes >= 55)) || ((hour == 3) && (minutes < 35))) {
            document.getElementById("five3").style.borderColor = "";
            document.getElementById("five3").style.borderWidth = "thin";
            document.getElementById("five3").style.margin = "";
            document.getElementById("six3").style.borderColor = "#FF0000";
            document.getElementById("six3").style.borderWidth = "thick";
            document.getElementById("six3").style.margin = "-4px";
            document.getElementById("seven3").style.borderColor = "#78F000";
            document.getElementById("seven3").style.borderWidth = "thick";
            document.getElementById("seven3").style.margin = "-4px";
            document.getElementById("eight3").style.borderColor = "#FFFF00";
            document.getElementById("eight3").style.borderWidth = "thick";
            document.getElementById("eight3").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 35)) {
            document.getElementById("six3").style.borderColor = "";
            document.getElementById("six3").style.borderWidth = "thin";
            document.getElementById("six3").style.margin = "";
            document.getElementById("seven3").style.borderColor = "#FF0000";
            document.getElementById("seven3").style.borderWidth = "thick";
            document.getElementById("seven3").style.margin = "-4px";
            document.getElementById("eight3").style.borderColor = "#78F000";
            document.getElementById("eight3").style.borderWidth = "thick";
            document.getElementById("eight3").style.margin = "-4px";
        }
    }
    if (dayOfWeek == "Thursday") {
        //1st period
        if ((hour == 11) && (minutes < 35)) {
            document.getElementById("one4").style.borderColor = "#78F000";
            document.getElementById("one4").style.borderWidth = "thick";
            document.getElementById("one4").style.margin = "-4px";
            document.getElementById("two4").style.borderColor = "#FFFF00";
            document.getElementById("two4").style.borderWidth = "thick";
            document.getElementById("two4").style.margin = "-4px";
            document.getElementById("three4").style.borderColor = "";
            document.getElementById("three4").style.borderWidth = "thin";
            document.getElementById("three4").style.margin = "";
            document.getElementById("four4").style.borderColor = "";
            document.getElementById("four4").style.borderWidth = "thin";
            document.getElementById("four4").style.margin = "";
            document.getElementById("five4").style.borderColor = "";
            document.getElementById("five4").style.borderWidth = "thin";
            document.getElementById("five4").style.margin = "";
        }
        //2nd period
        else if ((hour == 11) && (minutes >= 35)) {
            document.getElementById("one4").style.borderColor = "#FF0000";
            document.getElementById("one4").style.borderWidth = "thick";
            document.getElementById("one4").style.margin = "-4px";
            document.getElementById("two4").style.borderColor = "#78F000";
            document.getElementById("two4").style.borderWidth = "thick";
            document.getElementById("two4").style.margin = "-4px";
            document.getElementById("three4").style.borderColor = "#FFFF00";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "";
            document.getElementById("four4").style.borderWidth = "thin";
            document.getElementById("four4").style.margin = "";
            document.getElementById("five4").style.borderColor = "";
            document.getElementById("five4").style.borderWidth = "thin";
            document.getElementById("five4").style.margin = "";
        } else if ((hour == 12) && (minutes < 15)) {
            document.getElementById("one4").style.borderColor = "#FF0000";
            document.getElementById("one4").style.borderWidth = "thick";
            document.getElementById("one4").style.margin = "-4px";
            document.getElementById("two4").style.borderColor = "#78F000";
            document.getElementById("two4").style.borderWidth = "thick";
            document.getElementById("two4").style.margin = "-4px";
            document.getElementById("three4").style.borderColor = "#FFFF00";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "";
            document.getElementById("four4").style.borderWidth = "thin";
            document.getElementById("four4").style.margin = "";
            document.getElementById("five4").style.borderColor = "";
            document.getElementById("five4").style.borderWidth = "thin";
            document.getElementById("five4").style.margin = "";
            document.getElementById("six4").style.borderColor = "";
            document.getElementById("six4").style.borderWidth = "thin";
            document.getElementById("six4").style.margin = "";
        }
        //3rd period
        else if (((hour == 12) && (minutes >= 15)) || ((hour == 12) && (minutes < 55))) {
            document.getElementById("two4").style.borderColor = "#FF0000";
            document.getElementById("two4").style.borderWidth = "thick";
            document.getElementById("two4").style.margin = "-4px";
            document.getElementById("three4").style.borderColor = "#78F000";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "#FFFF00";
            document.getElementById("four4").style.borderWidth = "thick";
            document.getElementById("four4").style.margin = "-4px";
            document.getElementById("five4").style.borderColor = "";
            document.getElementById("five4").style.borderWidth = "thin";
            document.getElementById("five4").style.margin = "";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 55)) {
            document.getElementById("three4").style.borderColor = "#FF0000";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "#78F000";
            document.getElementById("four4").style.borderWidth = "thick";
            document.getElementById("four4").style.margin = "-4px";
            document.getElementById("five4").style.borderColor = "#FFFF00";
            document.getElementById("five4").style.borderWidth = "thick";
            document.getElementById("five4").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 35)) {
            document.getElementById("three4").style.borderColor = "#FF0000";
            document.getElementById("three4").style.borderWidth = "thick";
            document.getElementById("three4").style.margin = "-4px";
            document.getElementById("four4").style.borderColor = "#78F000";
            document.getElementById("four4").style.borderWidth = "thick";
            document.getElementById("four4").style.margin = "-4px";
            document.getElementById("five4").style.borderColor = "#FFFF00";
            document.getElementById("five4").style.borderWidth = "thick";
            document.getElementById("five4").style.margin = "-4px";
            document.getElementById("six4").style.borderColor = "";
            document.getElementById("six4").style.borderWidth = "thin";
            document.getElementById("six4").style.margin = "";
        }
        //5th period
        else if (((hour == 1) && (minutes >= 35)) || ((hour == 2) && (minutes < 15))) {
            document.getElementById("four4").style.borderColor = "#FF0000";
            document.getElementById("four4").style.borderWidth = "thick";
            document.getElementById("four4").style.margin = "-4px";
            document.getElementById("five4").style.borderColor = "#78F000";
            document.getElementById("five4").style.borderWidth = "thick";
            document.getElementById("five4").style.margin = "-4px";
            document.getElementById("six4").style.borderColor = "#FFFF00";
            document.getElementById("six4").style.borderWidth = "thick";
            document.getElementById("six4").style.margin = "-4px";
            document.getElementById("seven4").style.borderColor = "";
            document.getElementById("seven4").style.borderWidth = "thin";
            document.getElementById("seven4").style.margin = "";
        }
        //6th period
        else if (((hour == 2) && (minutes >= 15)) || ((hour == 2) && (minutes < 55))) {
            document.getElementById("four4").style.borderColor = "";
            document.getElementById("four4").style.borderWidth = "thin";
            document.getElementById("four4").style.margin = "";
            document.getElementById("five4").style.borderColor = "#FF0000";
            document.getElementById("five4").style.borderWidth = "thick";
            document.getElementById("five4").style.margin = "-4px";
            document.getElementById("six4").style.borderColor = "#78F000";
            document.getElementById("six4").style.borderWidth = "thick";
            document.getElementById("six4").style.margin = "-4px";
            document.getElementById("seven4").style.borderColor = "#FFFF00";
            document.getElementById("seven4").style.borderWidth = "thick";
            document.getElementById("seven4").style.margin = "-4px";
        }
        //7th period
        else if (((hour == 2) && (minutes >= 55)) || ((hour == 3) && (minutes < 35))) {
            document.getElementById("five4").style.borderColor = "";
            document.getElementById("five4").style.borderWidth = "thin";
            document.getElementById("five4").style.margin = "";
            document.getElementById("six4").style.borderColor = "#FF0000";
            document.getElementById("six4").style.borderWidth = "thick";
            document.getElementById("six4").style.margin = "-4px";
            document.getElementById("seven4").style.borderColor = "#78F000";
            document.getElementById("seven4").style.borderWidth = "thick";
            document.getElementById("seven4").style.margin = "-4px";
            document.getElementById("eight4").style.borderColor = "#FFFF00";
            document.getElementById("eight4").style.borderWidth = "thick";
            document.getElementById("eight4").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 35)) {
            document.getElementById("six4").style.borderColor = "";
            document.getElementById("six4").style.borderWidth = "thin";
            document.getElementById("six4").style.margin = "";
            document.getElementById("seven4").style.borderColor = "#FF0000";
            document.getElementById("seven4").style.borderWidth = "thick";
            document.getElementById("seven4").style.margin = "-4px";
            document.getElementById("eight4").style.borderColor = "#78F000";
            document.getElementById("eight4").style.borderWidth = "thick";
            document.getElementById("eight4").style.margin = "-4px";
        }
    }
    if (dayOfWeek == "Friday") {
        //1st period
        if ((hour == 11) && (minutes < 35)) {
            document.getElementById("one5").style.borderColor = "#78F000";
            document.getElementById("one5").style.borderWidth = "thick";
            document.getElementById("one5").style.margin = "-4px";
            document.getElementById("two5").style.borderColor = "#FFFF00";
            document.getElementById("two5").style.borderWidth = "thick";
            document.getElementById("two5").style.margin = "-4px";
            document.getElementById("three5").style.borderColor = "";
            document.getElementById("three5").style.borderWidth = "thin";
            document.getElementById("three5").style.margin = "";
            document.getElementById("four5").style.borderColor = "";
            document.getElementById("four5").style.borderWidth = "thin";
            document.getElementById("four5").style.margin = "";
            document.getElementById("five5").style.borderColor = "";
            document.getElementById("five5").style.borderWidth = "thin";
            document.getElementById("five5").style.margin = "";
        }
        //2nd period
        else if ((hour == 11) && (minutes >= 35)) {
            document.getElementById("one5").style.borderColor = "#FF0000";
            document.getElementById("one5").style.borderWidth = "thick";
            document.getElementById("one5").style.margin = "-4px";
            document.getElementById("two5").style.borderColor = "#78F000";
            document.getElementById("two5").style.borderWidth = "thick";
            document.getElementById("two5").style.margin = "-4px";
            document.getElementById("three5").style.borderColor = "#FFFF00";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "";
            document.getElementById("four5").style.borderWidth = "thin";
            document.getElementById("four5").style.margin = "";
            document.getElementById("five5").style.borderColor = "";
            document.getElementById("five5").style.borderWidth = "thin";
            document.getElementById("five5").style.margin = "";
        } else if ((hour == 12) && (minutes < 15)) {
            document.getElementById("one5").style.borderColor = "#FF0000";
            document.getElementById("one5").style.borderWidth = "thick";
            document.getElementById("one5").style.margin = "-4px";
            document.getElementById("two5").style.borderColor = "#78F000";
            document.getElementById("two5").style.borderWidth = "thick";
            document.getElementById("two5").style.margin = "-4px";
            document.getElementById("three5").style.borderColor = "#FFFF00";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "";
            document.getElementById("four5").style.borderWidth = "thin";
            document.getElementById("four5").style.margin = "";
            document.getElementById("five5").style.borderColor = "";
            document.getElementById("five5").style.borderWidth = "thin";
            document.getElementById("five5").style.margin = "";
            document.getElementById("six5").style.borderColor = "";
            document.getElementById("six5").style.borderWidth = "thin";
            document.getElementById("six5").style.margin = "";
        }
        //3rd period
        else if (((hour == 12) && (minutes >= 15)) || ((hour == 12) && (minutes < 55))) {
            document.getElementById("two5").style.borderColor = "#FF0000";
            document.getElementById("two5").style.borderWidth = "thick";
            document.getElementById("two5").style.margin = "-4px";
            document.getElementById("three5").style.borderColor = "#78F000";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "#FFFF00";
            document.getElementById("four5").style.borderWidth = "thick";
            document.getElementById("four5").style.margin = "-4px";
            document.getElementById("five5").style.borderColor = "";
            document.getElementById("five5").style.borderWidth = "thin";
            document.getElementById("five5").style.margin = "";
        }
        //4th period
        else if ((hour == 12) && (minutes >= 55)) {
            document.getElementById("three5").style.borderColor = "#FF0000";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "#78F000";
            document.getElementById("four5").style.borderWidth = "thick";
            document.getElementById("four5").style.margin = "-4px";
            document.getElementById("five5").style.borderColor = "#FFFF00";
            document.getElementById("five5").style.borderWidth = "thick";
            document.getElementById("five5").style.margin = "-4px";
        } else if ((hour == 1) && (minutes < 35)) {
            document.getElementById("three5").style.borderColor = "#FF0000";
            document.getElementById("three5").style.borderWidth = "thick";
            document.getElementById("three5").style.margin = "-4px";
            document.getElementById("four5").style.borderColor = "#78F000";
            document.getElementById("four5").style.borderWidth = "thick";
            document.getElementById("four5").style.margin = "-4px";
            document.getElementById("five5").style.borderColor = "#FFFF00";
            document.getElementById("five5").style.borderWidth = "thick";
            document.getElementById("five5").style.margin = "-4px";
            document.getElementById("six5").style.borderColor = "";
            document.getElementById("six5").style.borderWidth = "thin";
            document.getElementById("six5").style.margin = "";
        }
        //5th period
        else if (((hour == 1) && (minutes >= 35)) || ((hour == 2) && (minutes < 15))) {
            document.getElementById("four5").style.borderColor = "#FF0000";
            document.getElementById("four5").style.borderWidth = "thick";
            document.getElementById("four5").style.margin = "-4px";
            document.getElementById("five5").style.borderColor = "#78F000";
            document.getElementById("five5").style.borderWidth = "thick";
            document.getElementById("five5").style.margin = "-4px";
            document.getElementById("six5").style.borderColor = "#FFFF00";
            document.getElementById("six5").style.borderWidth = "thick";
            document.getElementById("six5").style.margin = "-4px";
            document.getElementById("seven5").style.borderColor = "";
            document.getElementById("seven5").style.borderWidth = "thin";
            document.getElementById("seven5").style.margin = "";
        }
        //6th period
        else if (((hour == 2) && (minutes >= 15)) || ((hour == 2) && (minutes < 55))) {
            document.getElementById("four5").style.borderColor = "";
            document.getElementById("four5").style.borderWidth = "thin";
            document.getElementById("four5").style.margin = "";
            document.getElementById("five5").style.borderColor = "#FF0000";
            document.getElementById("five5").style.borderWidth = "thick";
            document.getElementById("five5").style.margin = "-4px";
            document.getElementById("six5").style.borderColor = "#78F000";
            document.getElementById("six5").style.borderWidth = "thick";
            document.getElementById("six5").style.margin = "-4px";
            document.getElementById("seven5").style.borderColor = "#FFFF00";
            document.getElementById("seven5").style.borderWidth = "thick";
            document.getElementById("seven5").style.margin = "-4px";
        }
        //7th period
        else if (((hour == 2) && (minutes >= 55)) || ((hour == 3) && (minutes < 35))) {
            document.getElementById("five5").style.borderColor = "";
            document.getElementById("five5").style.borderWidth = "thin";
            document.getElementById("five5").style.margin = "";
            document.getElementById("six5").style.borderColor = "#FF0000";
            document.getElementById("six5").style.borderWidth = "thick";
            document.getElementById("six5").style.margin = "-4px";
            document.getElementById("seven5").style.borderColor = "#78F000";
            document.getElementById("seven5").style.borderWidth = "thick";
            document.getElementById("seven5").style.margin = "-4px";
            document.getElementById("eight5").style.borderColor = "#FFFF00";
            document.getElementById("eight5").style.borderWidth = "thick";
            document.getElementById("eight5").style.margin = "-4px";
        }
        //8th period
        else if ((hour == 3) && (minutes >= 35)) {
            document.getElementById("six5").style.borderColor = "";
            document.getElementById("six5").style.borderWidth = "thin";
            document.getElementById("six5").style.margin = "";
            document.getElementById("seven5").style.borderColor = "#FF0000";
            document.getElementById("seven5").style.borderWidth = "thick";
            document.getElementById("seven5").style.margin = "-4px";
            document.getElementById("eight5").style.borderColor = "#78F000";
            document.getElementById("eight5").style.borderWidth = "thick";
            document.getElementById("eight5").style.margin = "-4px";
        }
    }
}
