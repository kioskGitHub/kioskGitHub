//********NEED TO MAKE DYNAMIC FROM THE RFID SCANNER
var studentID = "4719";
//#####################################
//date and time for current destination
//#####################################
var datetime;
var dayOfWeek;
var today;
function dateAndTime()
{
    var currentDate = new Date();
    // For todays date;
    Date.prototype.today = function ()
    {
        return (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+
                ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+
                this.getFullYear();
    }
    //the time now
    Date.prototype.timeNow = function()
    {
        return ((this.getHours() < 10)?"0":"") +
                ((this.getHours()>12)?(this.getHours()-12):this.getHours()) +":"+
                ((this.getMinutes() < 10)?"0":"") +
                this.getMinutes() +
                ((this.getHours()>12)?('PM'):'AM');
    }
    datetime = currentDate.timeNow();
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
    document.getElementById("day").innerHTML = today;
    document.getElementById("time").innerHTML = datetime;
  }
  dateAndTime();
