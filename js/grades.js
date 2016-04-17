//********NEED TO MAKE DYNAMIC FROM THE RFID SCANNER
var studentID = "1850";

//####################################
//load the name and id with student id
//####################################
loadXMLDoc(studentID);

function loadXMLDoc(ID)
{

  //start xml request
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (xhttp.readyState == 4 && xhttp.status == 200)
    {
      myFunction(xhttp, ID);
    }
  };

  xhttp.open("GET", "http://localhost/sampleGradesFinal.xml", true);
  xhttp.send();

}
//function to search for specific id
function myFunction(xml, sID)
{
  var xmlDoc = xml.responseXML;

  //pick the tag
  var letterGrade, percentage, programName, studentFName, studentLName, className;
  var m = 0;
  var details = xmlDoc.getElementsByTagName('Details1');
  for (d = 0; d < details.length; d++)
  {
    var studNum = details[d].getAttribute('Student_Number');
    if (studNum == sID)
    {
      letterGrade = details[d].getAttribute('Letter_Grade');
      percentage = details[d].getAttribute('Percentage');
      programName = details[d].getAttribute('Program_Name');
      studentFName = details[d].getAttribute('Student_First_Name');
      studentLName = details[d].getAttribute('Student_Last_Name');
      className = details[d].parentNode.parentNode.parentNode.getAttribute('Textbox25');
      switch (m)
      {
        case 0:
          document.getElementById('class11').innerHTML = className;
          document.getElementById('class12').innerHTML = letterGrade;
          document.getElementById('class13').innerHTML = percentage;
          m++;
          break;
        case 1:
          document.getElementById('class21').innerHTML = className;
          document.getElementById('class22').innerHTML = letterGrade;
          document.getElementById('class23').innerHTML = percentage;
          m++;
          break;
        case 2:
          document.getElementById('class31').innerHTML = className;
          document.getElementById('class32').innerHTML = letterGrade;
          document.getElementById('class33').innerHTML = percentage;
          m++;
          break;
        case 3:
          document.getElementById('class41').innerHTML = className;
          document.getElementById('class42').innerHTML = letterGrade;
          document.getElementById('class43').innerHTML = percentage;
          m++;
          break;
        case 4:
          document.getElementById('class51').innerHTML = className;
          document.getElementById('class52').innerHTML = letterGrade;
          document.getElementById('class53').innerHTML = percentage;
          m++;
          break;
        case 5:
          document.getElementById('class61').innerHTML = className;
          document.getElementById('class62').innerHTML = letterGrade;
          document.getElementById('class63').innerHTML = percentage;
          m++;
          break;
        default:
          break;
      }
    }
  }

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
      }
      //the time now
    Date.prototype.timeNow = function()
    {
      return ((this.getHours() < 10) ? "0" : "") +
        ((this.getHours() > 12) ? (this.getHours() - 12) : this.getHours()) + ":" +
        ((this.getMinutes() < 10) ? "0" : "") +
        this.getMinutes() +
        ((this.getHours() > 12) ? ('PM') : 'AM');
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
}
