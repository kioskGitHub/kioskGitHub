//********NEED TO MAKE DYNAMIC FROM THE RFID SCANNER
var studentID = "4719";

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

  xhttp.open("GET", "http://localhost/BulkStudentSchedulesbyTerm.xml", true);
  xhttp.send();

}

//function to search for specific id
function myFunction(xml, sID)
{
  var xmlDoc = xml.responseXML;

  //pick the tag
  var studEID = xmlDoc.getElementsByTagName('Stud_EID');
  var termName;
  var userName;

  //search for the tag
  for (i = 0; i < studEID.length; i++)
  {
    //cut off the useless data
    var numEID = studEID[i].getAttribute('Textbox1').split(": ")[1];

    //compare student id
    if (numEID == sID)
    {
      //add to variable
      //STATIC
      var nameHolder = studEID[i].getAttribute('Textbox1').split(" ")[1];
      userName = nameHolder.split("S")[0];
      userName += studEID[i].getAttribute('Textbox1').split(",")[0];
      termName = studEID[i].childNodes[0].childNodes[0].getAttribute('Session_Name3');

      //DYNAMIC
      var detailsInstructor1 = "";
      var courseName1 = "";
      var classColor;
      //class 1
      for (k = 0; k < studEID[i].childNodes[0].childNodes[0].childNodes[0].childNodes.length; k++)
      {
        detailsInstructor1 = studEID[i].childNodes[0].childNodes[0]
          .childNodes[0].childNodes[k].getAttribute('Instructor');
        courseName1 = studEID[i].childNodes[0].childNodes[0]
          .childNodes[0].childNodes[k].getAttribute('Course_Name3').split("|")[0];

        for (j = 0; j < studEID[i].childNodes[0].childNodes[0].childNodes[0].childNodes[k].childNodes[1].childNodes.length; j++)
        {
          var course1Time = "";
          var locationBuilding = "",
            locationRoom = "";
          var weeklyPattern = "";
          course1Time = studEID[i].childNodes[0].childNodes[0]
            .childNodes[0].childNodes[k]
            .childNodes[1].childNodes[j].getAttribute('Textbox4').split(" ")[1];
          locationBuilding = studEID[i].childNodes[0].childNodes[0]
            .childNodes[0].childNodes[k]
            .childNodes[1].childNodes[j].getAttribute('Location').split(" ")[1];
          locationRoom = studEID[i].childNodes[0].childNodes[0]
            .childNodes[0].childNodes[k]
            .childNodes[1].childNodes[j].getAttribute('Location').split(" ")[2];
          weeklyPattern = studEID[i].childNodes[0].childNodes[0]
            .childNodes[0].childNodes[k]
            .childNodes[1].childNodes[j]
            .childNodes[0];
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
          var hourOfDay = datetime.split(":")[0];
          patternLogic(detailsInstructor1, courseName1,
            course1Time, locationBuilding,
            locationRoom, weeklyPattern,
            hourOfDay, dayOfWeek);
        }
      }
    }
  }

  //add to html
  document.getElementById("userName").innerHTML = userName;
  document.getElementById("termName").innerHTML = termName;
}
