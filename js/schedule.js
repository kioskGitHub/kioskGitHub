var polled = "/localhost/polled.txt";
var UID = "";
var studentID = "";

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("Get", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if ((rawFile.status === 200) || (rawFile.status === 0)) {
                var allText = rawFile.responseText;
                UID = allText;

                UID = UID.split(": ")[(UID.length / 38)];
                UID = (UID.slice(0, 2) + UID.slice(4, 6) + UID.slice(8, 10) + UID.slice(12, 14));

                //Andy
                if (UID == "52656bc2") {
                    studentID = "4769";
                }
                //Paco
                else if (UID == "e2f9462b") {
                    studentID = "4719";
                }
                //Dan
                else if (UID == "3226472b") {
                    studentID = "4368";
                }
            }
        }
    }
    rawFile.send(null);
}
readTextFile(polled);
//####################################
//load the name and id with student id
//####################################
loadXMLDoc(studentID);

function loadXMLDoc(ID) {

    //start xml request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp, ID);
        }
    };

    xhttp.open("GET", "http://localhost/ScheduleData/BulkStudentSchedulesbyTerm.xml", true);
    xhttp.send();

}

//#####################################
//date and time for current destination
//#####################################
var datetime, dayOfWeek, today;

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
            this.getMinutes() +
            ((this.getHours() > 12) ? ('PM') : 'AM');
    };
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

//function to search for specific id
function myFunction(xml, sID) {
    var xmlDoc = xml.responseXML;

    //pick the tag
    var studEID = xmlDoc.getElementsByTagName('Stud_EID');
    var termName, userName;

    //search for the tag
    for (i = 0; i < studEID.length; i++) {
        //cut off the useless data
        var numEID = studEID[i].getAttribute('Textbox1').split(": ")[1];

        //compare student id
        if (numEID == sID) {
            //add to variable
            //STATIC
            var nameHolder = studEID[i].getAttribute('Textbox1').split(" ")[1];
            userName = nameHolder.split("S")[0];
            userName += studEID[i].getAttribute('Textbox1').split(",")[0];
            termName = studEID[i].childNodes[0].childNodes[0].getAttribute('Session_Name3');

            //DYNAMIC
            var detailsInstructor1, courseName1 = "";
            //specific course

            var detailsInfo = studEID[i].childNodes[0].childNodes[0].childNodes[0].childNodes;

            for (k = 0; k < detailsInfo.length; k++) {
                detailsInstructor1 = detailsInfo[k].getAttribute('Instructor');
                courseName1 = detailsInfo[k].getAttribute('Course_Name3').split("|")[0];

                //info about said course

                var groupInfo = detailsInfo[k].childNodes[1].childNodes;

                for (j = 0; j < groupInfo.length; j++) {
                    var course1Time, locationBuilding, locationRoom, weeklyPattern = "";
                    course1Time = groupInfo[j].getAttribute('Textbox4').split(" ")[1];
                    locationBuilding = groupInfo[j].getAttribute('Location').split(" ")[1];
                    locationRoom = groupInfo[j].getAttribute('Location').split(" ")[2];
                    weeklyPattern = groupInfo[j].childNodes[0];

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
    document.getElementById("termName").innerHTML = termName.split(":")[1];
}
