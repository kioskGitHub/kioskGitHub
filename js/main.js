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
  Date.prototype.today = function()
    {
      return (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" +
        ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" +
        this.getFullYear();
    };
    //the time now
  Date.prototype.timeNow = function()
  {
    return ((this.getHours() < 10) ? "0" : "") +
      ((this.getHours() > 12) ? (this.getHours() - 12) : this.getHours()) + ":" +
      ((this.getMinutes() < 10) ? "0" : "") +
      this.getMinutes() +
      ((this.getHours() > 12) ? ('PM') : 'AM');
  };
  datetime = currentDate.timeNow();
  today = currentDate.today();
  document.getElementById("day").innerHTML = today;
  document.getElementById("time").innerHTML = datetime;
}
dateAndTime();
