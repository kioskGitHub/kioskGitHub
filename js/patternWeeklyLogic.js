function patternLogic(detailsInstructor, courseName, courseTime, locationBuilding, locationRoom, weeklyPattern, hourOfDay, dayOfWeek) {
    var weeklyList = new Array(5);
    if (weeklyPattern.getAttribute('Pattern_Weekly_M') == "X") {
        weeklyList[0] = true;
    }
    else {
        weeklyList[0] = false;
    }
    if (weeklyPattern.getAttribute('Pattern_Weekly_T') == "X") {
        weeklyList[1] = true;
    }
    else {
        weeklyList[1] = false;
    }
    if (weeklyPattern.getAttribute('Pattern_Weekly_W') == "X") {
        weeklyList[2] = true;
    }
    else {
        weeklyList[2] = false;
    }
    if (weeklyPattern.getAttribute('Pattern_Weekly_TH') == "X") {
        weeklyList[3] = true;
    }
    else {
        weeklyList[3] = false;
    }
    if (weeklyPattern.getAttribute('Pattern_Weekly_F') == "X") {
        weeklyList[4] = true;
    }
    else {
        weeklyList[4] = false;
    }


    /*####################################
    ###############TESTING################
    ####################################
    //8am = 1
    //9am = 2
    //10am = 3
    //11am = 4
    //1pm = 5
    //2pm = 6
    //3pm = 7
    //4pm = 8
    var courseTimeNumber = 0;
    if (courseTime == "8:00:00") {
        courseTimeNumber = 1;
    }
    else if (courseTime == "9:00:00") {
        courseTimeNumber = 2;
    }
    else if (courseTime == "10:00:00") {
        courseTimeNumber = 3;
    }
    else if (courseTime == "11:00:00") {
        courseTimeNumber = 4;
    }
    else if (courseTime == "1:00:00") {
        courseTimeNumber = 5;
    }
    else if (courseTime == "2:00:00") {
        courseTimeNumber = 6;
    }
    else if (courseTime == "3:00:00") {
        courseTimeNumber = 7;
    }
    else if (courseTime == "4:00:00") {
        courseTimeNumber = 8;
    }

    var dayNow = 0;
    if (dayOfWeek == "Monday") {
        dayNow = 1;
    }
    else if (dayOfWeek == "Tuesday") {
        dayNow = 2;
    }
    else if (dayOfWeek == "Wednesday") {
        dayNow = 3;
    }
    else if (dayOfWeek == "Thursday") {
        dayNow = 4;
    }
    else if (dayOfWeek == "Friday") {
        dayNow = 5;
    }

    var hourNow = 0;
    if (hourOfDay == 8) {
        hourNow = 1;
    }
    else if (hourOfDay == 9) {
        hourNow = 2;
    }
    else if (hourOfDay == 10) {
        hourNow = 3;
    }
    else if (hourOfDay == 11) {
        hourNow = 4;
    }
    else if (hourOfDay == 1) {
        hourNow = 5;
    }
    else if (hourOfDay == 2) {
        hourNow = 6;
    }
    else if (hourOfDay == 3) {
        hourNow = 7;
    }
    else if (hourOfDay == 4) {
        hourNow = 8;
    }

    for (d = 0; d < 5; d++) {
        if (weeklyList[d] === true) {
            var d2 = d + 1;
            for (p = 1; p <= 8; p++) {
                if (courseTimeNumber == p) {
                    var p2, pBefore, pAfter = "";
                    switch (p) {
                        case 1:
                            p2 = "one";
                            pAfter = "two";
                            break;
                        case 2:
                            pBefore = "one";
                            p2 = "two";
                            pAfter = "three";
                            break;
                        case 3:
                            pBefore = "two";
                            p2 = "three";
                            pAfter = "four";
                            break;
                        case 4:
                            pBefore = "three";
                            p2 = "four";
                            pAfter = "five";
                            break;
                        case 5:
                            pBefore = "four";
                            p2 = "five";
                            pAfter = "six";
                            break;
                        case 6:
                            pBefore = "five";
                            p2 = "six";
                            pAfter = "seven";
                            break;
                        case 7:
                            pBefore = "six";
                            p2 = "seven";
                            pAfter = "eight";
                            break;
                        case 8:
                            pBefore = "seven";
                            p2 = "eight";
                            break;
                        default:
                            break;
                    }
                    document.getElementById("course" + p.toString() + d2.toString()).innerHTML = courseName;
                    document.getElementById("course" + p.toString() + d2.toString()).style.textAlign = "left";
                    document.getElementById("course" + p.toString() + d2.toString()).style.margin = "2.4%";
                    document.getElementById("instructor" + p.toString() + d2.toString()).innerHTML = detailsInstructor;
                    document.getElementById("instructor" + p.toString() + d2.toString()).style.textAlign = "left";
                    document.getElementById("instructor" + p.toString() + d2.toString()).style.margin = "2.4%";
                    document.getElementById("room" + p.toString() + d2.toString()).innerHTML = "Room: " + locationRoom;
                    document.getElementById("room" + p.toString() + d2.toString()).style.textAlign = "left";
                    document.getElementById("room" + p.toString() + d2.toString()).style.margin = "2.4%";
                    document.getElementById(p2.toString() + d2.toString()).style.backgroundColor = "#2670B8";
                    document.getElementById("building" + p.toString() + d2.toString()).style.textAlign = "left";
                    document.getElementById("building" + p.toString() + d2.toString()).style.margin = "2.4%";
                    if (locationBuilding == "Main") {
                        document.getElementById("building" + p.toString() + d2.toString()).innerHTML = "Old Building";
                    }
                    else if (locationBuilding == "New") {
                        document.getElementById("building" + p.toString() + d2.toString()).innerHTML = "New Building";
                    }
                    for (t = 1; t <= 5; t++) {
                        if (dayNow == t) {
                            for (w = 1; w <= 8; w++) {
                                if (hourNow == w) {
                                    if (hourNow == 1) {
                                        document.getElementById(p2.toString() + d2.toString()).style.borderColor = "#78F000";
                                        document.getElementById(p2.toString() + d2.toString()).style.borderWidth = "thick";
                                        document.getElementById(p2.toString() + d2.toString()).style.margin = "-4px";
                                        document.getElementById(pAfter.toString() + d2.toString()).style.borderColor = "#FFFF00";
                                        document.getElementById(pAfter.toString() + d2.toString()).style.borderWidth = "thick";
                                        document.getElementById(pAfter.toString() + d2.toString()).style.margin = "-4px";
                                    }
                                    else if ((hourNow > 1) && (hourNow < 8)) {
                                        console.log(pBefore.toString() + d2.toString());
                                        document.getElementById(pBefore.toString() + d2.toString()).style.borderColor = "Red";
                                        document.getElementById(pBefore.toString() + d2.toString()).style.borderWidth = "thick";
                                        document.getElementById(pBefore.toString() + d2.toString()).style.margin = "-4px";
                                        document.getElementById(p2.toString() + d2.toString()).style.borderColor = "#78F000";
                                        document.getElementById(p2.toString() + d2.toString()).style.borderWidth = "thick";
                                        document.getElementById(p2.toString() + d2.toString()).style.margin = "-4px";
                                        document.getElementById(pAfter.toString() + d2.toString()).style.borderColor = "#FFFF00";
                                        document.getElementById(pAfter.toString() + d2.toString()).style.borderWidth = "thick";
                                        document.getElementById(pAfter.toString() + d2.toString()).style.margin = "-4px";
                                    }
                                    else if (hourNow == 8) {
                                        document.getElementById(pBefore.toString() + d2.toString()).style.borderColor = "Red";
                                        document.getElementById(pBefore.toString() + d2.toString()).style.borderWidth = "thick";
                                        document.getElementById(pBefore.toString() + d2.toString()).style.margin = "-4px";
                                        document.getElementById(p2.toString() + d2.toString()).style.borderColor = "#78F000";
                                        document.getElementById(p2.toString() + d2.toString()).style.borderWidth = "thick";
                                        document.getElementById(p2.toString() + d2.toString()).style.margin = "-4px";
                                    }
                                }
                            }
                        }
                    }
                    if (courseName == "Break") {
                        document.getElementById("course" + p.toString() + d2.toString()).style.textAlign("center");
                        document.getElementById("course" + p.toString() + d2.toString()).style.margin("4px");
                    }
                }
            }
        }
    }*/


    //******
    //MONDAY
    //******



    if (weeklyList[0] === true) {
        if (courseTime == "8:00:00") {
            document.getElementById("course11").style.textAlign = "left";
            document.getElementById("course11").style.margin = "2.4%";
            document.getElementById("instructor11").style.textAlign = "left";
            document.getElementById("instructor11").style.margin = "2.4%";
            document.getElementById("room11").style.textAlign = "left";
            document.getElementById("room11").style.margin = "2.4%";
            document.getElementById("building11").style.textAlign = "left";
            document.getElementById("building11").style.margin = "2.4%";
            document.getElementById("course11").innerHTML = courseName;
            document.getElementById("instructor11").innerHTML = detailsInstructor;
            document.getElementById("room11").innerHTML = "Room: " + locationRoom;
            document.getElementById("one1").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building11").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building11").innerHTML = "New Building";
            }
            if (dayOfWeek == "Monday") {
                if (hourOfDay == 8) {
                    document.getElementById("one1").style.borderColor = "#78F000";
                    document.getElementById("one1").style.borderWidth = "thick";
                    document.getElementById("one1").style.margin = "-4px";
                    document.getElementById("two1").style.borderColor = "#FFFF00";
                    document.getElementById("two1").style.borderWidth = "thick";
                    document.getElementById("two1").style.margin = "-4px";
                }
            }
            if (courseName == "Break") {
                document.getElementById("course11").style.textAlign("center");
                document.getElementById("course11").style.margin("4px");
            }
        }
        if (courseTime == "9:00:00") {
            document.getElementById("course21").style.textAlign = "left";
            document.getElementById("course21").style.margin = "2.4%";
            document.getElementById("instructor21").style.textAlign = "left";
            document.getElementById("instructor21").style.margin = "2.4%";
            document.getElementById("room21").style.textAlign = "left";
            document.getElementById("room21").style.margin = "2.4%";
            document.getElementById("building21").style.textAlign = "left";
            document.getElementById("building21").style.margin = "2.4%";
            document.getElementById("course21").innerHTML = courseName;
            document.getElementById("instructor21").innerHTML = detailsInstructor;
            document.getElementById("room21").innerHTML = "Room: " + locationRoom;
            document.getElementById("two1").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building21").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building21").innerHTML = "New Building";
            }
            if (dayOfWeek == "Monday") {
                if (hourOfDay == 9) {
                    document.getElementById("one1").style.borderColor = "Red";
                    document.getElementById("one1").style.borderWidth = "thick";
                    document.getElementById("one1").style.margin = "-4px";
                    document.getElementById("two1").style.borderColor = "#78F000";
                    document.getElementById("two1").style.borderWidth = "thick";
                    document.getElementById("two1").style.margin = "-4px";
                    document.getElementById("three1").style.borderColor = "#FFFF00";
                    document.getElementById("three1").style.borderWidth = "thick";
                    document.getElementById("three1").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "10:00:00") {
            document.getElementById("course31").style.textAlign = "left";
            document.getElementById("course31").style.margin = "2.4%";
            document.getElementById("instructor31").style.textAlign = "left";
            document.getElementById("instructor31").style.margin = "2.4%";
            document.getElementById("room31").style.textAlign = "left";
            document.getElementById("room31").style.margin = "2.4%";
            document.getElementById("building31").style.textAlign = "left";
            document.getElementById("building31").style.margin = "2.4%";
            document.getElementById("course31").innerHTML = courseName;
            document.getElementById("course31").style.textAlign = "left";
            document.getElementById("instructor31").innerHTML = detailsInstructor;
            document.getElementById("room31").innerHTML = "Room: " + locationRoom;
            document.getElementById("three1").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building31").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building31").innerHTML = "New Building";
            }
            if (dayOfWeek == "Monday") {
                if (hourOfDay == 10) {
                    document.getElementById("two1").style.borderColor = "Red";
                    document.getElementById("two1").style.borderWidth = "thick";
                    document.getElementById("two1").style.margin = "-4px";
                    document.getElementById("three1").style.borderColor = "#78F000";
                    document.getElementById("three1").style.borderWidth = "thick";
                    document.getElementById("three1").style.margin = "-4px";
                    document.getElementById("four1").style.borderColor = "#FFFF00";
                    document.getElementById("four1").style.borderWidth = "thick";
                    document.getElementById("four1").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "11:00:00") {
            document.getElementById("course41").style.textAlign = "left";
            document.getElementById("course41").style.margin = "2.4%";
            document.getElementById("instructor41").style.textAlign = "left";
            document.getElementById("instructor41").style.margin = "2.4%";
            document.getElementById("room41").style.textAlign = "left";
            document.getElementById("room41").style.margin = "2.4%";
            document.getElementById("building41").style.textAlign = "left";
            document.getElementById("building41").style.margin = "2.4%";
            document.getElementById("course41").innerHTML = courseName;
            document.getElementById("instructor41").innerHTML = detailsInstructor;
            document.getElementById("room41").innerHTML = "Room: " + locationRoom;
            document.getElementById("four1").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building41").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building41").innerHTML = "New Building";
            }
            if (dayOfWeek == "Monday") {
                if (hourOfDay == 11) {
                    document.getElementById("three1").style.borderColor = "Red";
                    document.getElementById("three1").style.borderWidth = "thick";
                    document.getElementById("three1").style.margin = "-4px";
                    document.getElementById("four1").style.borderColor = "#78F000";
                    document.getElementById("four1").style.borderWidth = "thick";
                    document.getElementById("four1").style.margin = "-4px";
                    document.getElementById("five1").style.borderColor = "#FFFF00";
                    document.getElementById("five1").style.borderWidth = "thick";
                    document.getElementById("five1").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "1:00:00") {
            document.getElementById("course51").style.textAlign = "left";
            document.getElementById("course51").style.margin = "2.4%";
            document.getElementById("instructor51").style.textAlign = "left";
            document.getElementById("instructor51").style.margin = "2.4%";
            document.getElementById("room51").style.textAlign = "left";
            document.getElementById("room51").style.margin = "2.4%";
            document.getElementById("building51").style.textAlign = "left";
            document.getElementById("building51").style.margin = "2.4%";
            document.getElementById("course51").innerHTML = courseName;
            document.getElementById("instructor51").innerHTML = detailsInstructor;
            document.getElementById("room51").innerHTML = "Room: " + locationRoom;
            document.getElementById("five1").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building51").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building51").innerHTML = "New Building";
            }
            if (dayOfWeek == "Monday") {
                if (hourOfDay == 1) {
                    document.getElementById("four1").style.borderColor = "Red";
                    document.getElementById("four1").style.borderWidth = "thick";
                    document.getElementById("four1").style.margin = "-4px";
                    document.getElementById("five1").style.borderColor = "#78F000";
                    document.getElementById("five1").style.borderWidth = "thick";
                    document.getElementById("five1").style.margin = "-4px";
                    document.getElementById("six1").style.borderColor = "#FFFF00";
                    document.getElementById("six1").style.borderWidth = "thick";
                    document.getElementById("six1").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "2:00:00") {
            document.getElementById("course61").style.textAlign = "left";
            document.getElementById("course61").style.margin = "2.4%";
            document.getElementById("instructor61").style.textAlign = "left";
            document.getElementById("instructor61").style.margin = "2.4%";
            document.getElementById("room61").style.textAlign = "left";
            document.getElementById("room61").style.margin = "2.4%";
            document.getElementById("building61").style.textAlign = "left";
            document.getElementById("building61").style.margin = "2.4%";
            document.getElementById("course61").innerHTML = courseName;
            document.getElementById("instructor61").innerHTML = detailsInstructor;
            document.getElementById("room61").innerHTML = "Room: " + locationRoom;
            document.getElementById("six1").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building61").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building61").innerHTML = "New Building";
            }
            if (dayOfWeek == "Monday") {
                if (hourOfDay == 2) {
                    document.getElementById("five1").style.borderColor = "Red";
                    document.getElementById("five1").style.borderWidth = "thick";
                    document.getElementById("five1").style.margin = "-4px";
                    document.getElementById("six1").style.borderColor = "#78F000";
                    document.getElementById("six1").style.borderWidth = "thick";
                    document.getElementById("six1").style.margin = "-4px";
                    document.getElementById("seven1").style.borderColor = "#FFFF00";
                    document.getElementById("seven1").style.borderWidth = "thick";
                    document.getElementById("seven1").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "3:00:00") {
            document.getElementById("course71").style.textAlign = "left";
            document.getElementById("course71").style.margin = "2.4%";
            document.getElementById("instructor71").style.textAlign = "left";
            document.getElementById("instructor71").style.margin = "2.4%";
            document.getElementById("room71").style.textAlign = "left";
            document.getElementById("room71").style.margin = "2.4%";
            document.getElementById("building71").style.textAlign = "left";
            document.getElementById("building71").style.margin = "2.4%";
            document.getElementById("course71").innerHTML = courseName;
            document.getElementById("instructor71").innerHTML = detailsInstructor;
            document.getElementById("room71").innerHTML = "Room: " + locationRoom;
            document.getElementById("seven1").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building71").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building71").innerHTML = "New Building";
            }
            if (dayOfWeek == "Monday") {
                if (hourOfDay == 3) {
                    document.getElementById("six1").style.borderColor = "Red";
                    document.getElementById("six1").style.borderWidth = "thick";
                    document.getElementById("six1").style.margin = "-4px";
                    document.getElementById("seven1").style.borderColor = "#78F000";
                    document.getElementById("seven1").style.borderWidth = "thick";
                    document.getElementById("seven1").style.margin = "-4px";
                    document.getElementById("eight1").style.borderColor = "#FFFF00";
                    document.getElementById("eight1").style.borderWidth = "thick";
                    document.getElementById("eight1").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "4:00:00") {
            document.getElementById("course81").style.textAlign = "left";
            document.getElementById("course81").style.margin = "2.4%";
            document.getElementById("instructor81").style.textAlign = "left";
            document.getElementById("instructor81").style.margin = "2.4%";
            document.getElementById("room81").style.textAlign = "left";
            document.getElementById("room81").style.margin = "2.4%";
            document.getElementById("building81").style.textAlign = "left";
            document.getElementById("building81").style.margin = "2.4%";
            document.getElementById("course81").innerHTML = courseName;
            document.getElementById("instructor81").innerHTML = detailsInstructor;
            document.getElementById("room81").innerHTML = "Room: " + locationRoom;
            document.getElementById("eight1").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building81").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building81").innerHTML = "New Building";
            }
            if (dayOfWeek == "Monday") {
                if (hourOfDay == 4) {
                    document.getElementById("seven1").style.borderColor = "Red";
                    document.getElementById("seven1").style.borderWidth = "thick";
                    document.getElementById("seven1").style.margin = "-4px";
                    document.getElementById("eight1").style.borderColor = "#78F000";
                    document.getElementById("eight1").style.borderWidth = "thick";
                    document.getElementById("eight1").style.margin = "-4px";
                }
            }
        }
    }

    //*******
    //TUESDAY
    //*******
    if (weeklyList[1] === true) {
        if (courseTime == "8:00:00") {
            document.getElementById("course12").style.textAlign = "left";
            document.getElementById("course12").style.margin = "2.4%";
            document.getElementById("instructor12").style.textAlign = "left";
            document.getElementById("instructor12").style.margin = "2.4%";
            document.getElementById("room12").style.textAlign = "left";
            document.getElementById("room12").style.margin = "2.4%";
            document.getElementById("building12").style.textAlign = "left";
            document.getElementById("building12").style.margin = "2.4%";
            document.getElementById("course12").innerHTML = courseName;
            document.getElementById("instructor12").innerHTML = detailsInstructor;
            document.getElementById("room12").innerHTML = "Room: " + locationRoom;
            document.getElementById("one2").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building12").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building12").innerHTML = "New Building";
            }
            if (dayOfWeek == "Tuesday") {
                if (hourOfDay == 8) {
                    document.getElementById("one2").style.borderColor = "#78F000";
                    document.getElementById("one2").style.borderWidth = "thick";
                    document.getElementById("one2").style.margin = "-4px";
                    document.getElementById("two2").style.borderColor = "#FFFF00";
                    document.getElementById("two2").style.borderWidth = "thick";
                    document.getElementById("two2").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "9:00:00") {
            document.getElementById("course22").style.textAlign = "left";
            document.getElementById("course22").style.margin = "2.4%";
            document.getElementById("instructor22").style.textAlign = "left";
            document.getElementById("instructor22").style.margin = "2.4%";
            document.getElementById("room22").style.textAlign = "left";
            document.getElementById("room22").style.margin = "2.4%";
            document.getElementById("building22").style.textAlign = "left";
            document.getElementById("building22").style.margin = "2.4%";
            document.getElementById("course22").innerHTML = courseName;
            document.getElementById("instructor22").innerHTML = detailsInstructor;
            document.getElementById("room22").innerHTML = "Room: " + locationRoom;
            document.getElementById("two2").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building22").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building22").innerHTML = "New Building";
            }
            if (dayOfWeek == "Tuesday") {
                if (hourOfDay == 9) {
                    document.getElementById("one2").style.borderColor = "Red";
                    document.getElementById("one2").style.borderWidth = "thick";
                    document.getElementById("one2").style.margin = "-4px";
                    document.getElementById("two2").style.borderColor = "#78F000";
                    document.getElementById("two2").style.borderWidth = "thick";
                    document.getElementById("two2").style.margin = "-4px";
                    document.getElementById("three2").style.borderColor = "#FFFF00";
                    document.getElementById("three2").style.borderWidth = "thick";
                    document.getElementById("three2").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "10:00:00") {
            document.getElementById("course32").style.textAlign = "left";
            document.getElementById("course32").style.margin = "2.4%";
            document.getElementById("instructor32").style.textAlign = "left";
            document.getElementById("instructor32").style.margin = "2.4%";
            document.getElementById("room32").style.textAlign = "left";
            document.getElementById("room32").style.margin = "2.4%";
            document.getElementById("building32").style.textAlign = "left";
            document.getElementById("building32").style.margin = "2.4%";
            document.getElementById("course32").innerHTML = courseName;
            document.getElementById("instructor32").innerHTML = detailsInstructor;
            document.getElementById("room32").innerHTML = "Room: " + locationRoom;
            document.getElementById("three2").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building32").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building32").innerHTML = "New Building";
            }
            if (dayOfWeek == "Tuesday") {
                if (hourOfDay == 10) {
                    document.getElementById("two2").style.borderColor = "Red";
                    document.getElementById("two2").style.borderWidth = "thick";
                    document.getElementById("two2").style.margin = "-4px";
                    document.getElementById("three2").style.borderColor = "#78F000";
                    document.getElementById("three2").style.borderWidth = "thick";
                    document.getElementById("three2").style.margin = "-4px";
                    document.getElementById("four2").style.borderColor = "#FFFF00";
                    document.getElementById("four2").style.borderWidth = "thick";
                    document.getElementById("four2").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "11:00:00") {
            document.getElementById("course42").style.textAlign = "left";
            document.getElementById("course42").style.margin = "2.4%";
            document.getElementById("instructor42").style.textAlign = "left";
            document.getElementById("instructor42").style.margin = "2.4%";
            document.getElementById("room42").style.textAlign = "left";
            document.getElementById("room42").style.margin = "2.4%";
            document.getElementById("building42").style.textAlign = "left";
            document.getElementById("building42").style.margin = "2.4%";
            document.getElementById("course42").innerHTML = courseName;
            document.getElementById("instructor42").innerHTML = detailsInstructor;
            document.getElementById("room42").innerHTML = "Room: " + locationRoom;
            document.getElementById("four2").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building42").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building42").innerHTML = "New Building";
            }
            if (dayOfWeek == "Tuesday") {
                if (hourOfDay == 11) {
                    document.getElementById("three2").style.borderColor = "Red";
                    document.getElementById("three2").style.borderWidth = "thick";
                    document.getElementById("three2").style.margin = "-4px";
                    document.getElementById("four2").style.borderColor = "#78F000";
                    document.getElementById("four2").style.borderWidth = "thick";
                    document.getElementById("four2").style.margin = "-4px";
                    document.getElementById("five2").style.borderColor = "#FFFF00";
                    document.getElementById("five2").style.borderWidth = "thick";
                    document.getElementById("five2").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "1:00:00") {
            document.getElementById("course52").style.textAlign = "left";
            document.getElementById("course52").style.margin = "2.4%";
            document.getElementById("instructor52").style.textAlign = "left";
            document.getElementById("instructor52").style.margin = "2.4%";
            document.getElementById("room52").style.textAlign = "left";
            document.getElementById("room52").style.margin = "2.4%";
            document.getElementById("building52").style.textAlign = "left";
            document.getElementById("building52").style.margin = "2.4%";
            document.getElementById("course52").innerHTML = courseName;
            document.getElementById("instructor52").innerHTML = detailsInstructor;
            document.getElementById("room52").innerHTML = "Room: " + locationRoom;
            document.getElementById("five2").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building52").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building52").innerHTML = "New Building";
            }
            if (dayOfWeek == "Tuesday") {
                if (hourOfDay == 1) {
                    document.getElementById("four2").style.borderColor = "Red";
                    document.getElementById("four2").style.borderWidth = "thick";
                    document.getElementById("four2").style.margin = "-4px";
                    document.getElementById("five2").style.borderColor = "#78F000";
                    document.getElementById("five2").style.borderWidth = "thick";
                    document.getElementById("five2").style.margin = "-4px";
                    document.getElementById("six2").style.borderColor = "#FFFF00";
                    document.getElementById("six2").style.borderWidth = "thick";
                    document.getElementById("six2").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "2:00:00") {
            document.getElementById("course62").style.textAlign = "left";
            document.getElementById("course62").style.margin = "2.4%";
            document.getElementById("instructor62").style.textAlign = "left";
            document.getElementById("instructor62").style.margin = "2.4%";
            document.getElementById("room62").style.textAlign = "left";
            document.getElementById("room62").style.margin = "2.4%";
            document.getElementById("building62").style.textAlign = "left";
            document.getElementById("building62").style.margin = "2.4%";
            document.getElementById("course62").innerHTML = courseName;
            document.getElementById("instructor62").innerHTML = detailsInstructor;
            document.getElementById("room62").innerHTML = "Room: " + locationRoom;
            document.getElementById("six2").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building62").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building62").innerHTML = "New Building";
            }
            if (dayOfWeek == "Tuesday") {
                if (hourOfDay == 2) {
                    document.getElementById("five2").style.borderColor = "Red";
                    document.getElementById("five2").style.borderWidth = "thick";
                    document.getElementById("five2").style.margin = "-4px";
                    document.getElementById("six2").style.borderColor = "#78F000";
                    document.getElementById("six2").style.borderWidth = "thick";
                    document.getElementById("six2").style.margin = "-4px";
                    document.getElementById("seven2").style.borderColor = "#FFFF00";
                    document.getElementById("seven2").style.borderWidth = "thick";
                    document.getElementById("seven2").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "3:00:00") {
            document.getElementById("course72").style.textAlign = "left";
            document.getElementById("course72").style.margin = "2.4%";
            document.getElementById("instructor72").style.textAlign = "left";
            document.getElementById("instructor72").style.margin = "2.4%";
            document.getElementById("room72").style.textAlign = "left";
            document.getElementById("room72").style.margin = "2.4%";
            document.getElementById("building72").style.textAlign = "left";
            document.getElementById("building72").style.margin = "2.4%";
            document.getElementById("course72").innerHTML = courseName;
            document.getElementById("instructor72").innerHTML = detailsInstructor;
            document.getElementById("room72").innerHTML = "Room: " + locationRoom;
            document.getElementById("seven2").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building72").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building72").innerHTML = "New Building";
            }
            if (dayOfWeek == "Tuesday") {
                if (hourOfDay == 3) {
                    document.getElementById("six2").style.borderColor = "Red";
                    document.getElementById("six2").style.borderWidth = "thick";
                    document.getElementById("six2").style.margin = "-4px";
                    document.getElementById("seven2").style.borderColor = "#78F000";
                    document.getElementById("seven2").style.borderWidth = "thick";
                    document.getElementById("seven2").style.margin = "-4px";
                    document.getElementById("eight2").style.borderColor = "#FFFF00";
                    document.getElementById("eight2").style.borderWidth = "thick";
                    document.getElementById("eight2").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "4:00:00") {
            document.getElementById("course82").style.textAlign = "left";
            document.getElementById("course82").style.margin = "2.4%";
            document.getElementById("instructor82").style.textAlign = "left";
            document.getElementById("instructor82").style.margin = "2.4%";
            document.getElementById("room82").style.textAlign = "left";
            document.getElementById("room82").style.margin = "2.4%";
            document.getElementById("building82").style.textAlign = "left";
            document.getElementById("building82").style.margin = "2.4%";
            document.getElementById("course82").innerHTML = courseName;
            document.getElementById("instructor82").innerHTML = detailsInstructor;
            document.getElementById("room82").innerHTML = "Room: " + locationRoom;
            document.getElementById("eight2").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building82").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building82").innerHTML = "New Building";
            }
            if (dayOfWeek == "Tuesday") {
                if (hourOfDay == 4) {
                    document.getElementById("seven2").style.borderColor = "Red";
                    document.getElementById("seven2").style.borderWidth = "thick";
                    document.getElementById("seven2").style.margin = "-4px";
                    document.getElementById("eight2").style.borderColor = "#78F000";
                    document.getElementById("eight2").style.borderWidth = "thick";
                    document.getElementById("eight2").style.margin = "-4px";
                }
            }
        }
    }

    //*********
    //WEDNESDAY
    //*********
    if (weeklyList[2] === true) {
        if (courseTime == "8:00:00") {
            document.getElementById("course13").style.textAlign = "left";
            document.getElementById("course13").style.margin = "2.4%";
            document.getElementById("instructor13").style.textAlign = "left";
            document.getElementById("instructor13").style.margin = "2.4%";
            document.getElementById("room13").style.textAlign = "left";
            document.getElementById("room13").style.margin = "2.4%";
            document.getElementById("building13").style.textAlign = "left";
            document.getElementById("building13").style.margin = "2.4%";
            document.getElementById("course13").innerHTML = courseName;
            document.getElementById("instructor13").innerHTML = detailsInstructor;
            document.getElementById("room13").innerHTML = "Room: " + locationRoom;
            document.getElementById("one3").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building13").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building13").innerHTML = "New Building";
            }
            if (dayOfWeek == "Wednesday") {
                if (hourOfDay == 8) {
                    document.getElementById("one3").style.borderColor = "#78F000";
                    document.getElementById("one3").style.borderWidth = "thick";
                    document.getElementById("one3").style.margin = "-4px";
                    document.getElementById("two3").style.borderColor = "#FFFF00";
                    document.getElementById("two3").style.borderWidth = "thick";
                    document.getElementById("two3").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "9:00:00") {
            document.getElementById("course23").style.textAlign = "left";
            document.getElementById("course23").style.margin = "2.4%";
            document.getElementById("instructor23").style.textAlign = "left";
            document.getElementById("instructor23").style.margin = "2.4%";
            document.getElementById("room23").style.textAlign = "left";
            document.getElementById("room23").style.margin = "2.4%";
            document.getElementById("building23").style.textAlign = "left";
            document.getElementById("building23").style.margin = "2.4%";
            document.getElementById("course23").innerHTML = courseName;
            document.getElementById("instructor23").innerHTML = detailsInstructor;
            document.getElementById("room23").innerHTML = "Room: " + locationRoom;
            document.getElementById("two3").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building23").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building23").innerHTML = "New Building";
            }
            if (dayOfWeek == "Wednesday") {
                if (hourOfDay == 9) {
                    document.getElementById("one3").style.borderColor = "Red";
                    document.getElementById("one3").style.borderWidth = "thick";
                    document.getElementById("one3").style.margin = "-4px";
                    document.getElementById("two3").style.borderColor = "#78F000";
                    document.getElementById("two3").style.borderWidth = "thick";
                    document.getElementById("two3").style.margin = "-4px";
                    document.getElementById("three3").style.borderColor = "#FFFF00";
                    document.getElementById("three3").style.borderWidth = "thick";
                    document.getElementById("three3").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "10:00:00") {
            document.getElementById("course33").style.textAlign = "left";
            document.getElementById("course33").style.margin = "2.4%";
            document.getElementById("instructor33").style.textAlign = "left";
            document.getElementById("instructor33").style.margin = "2.4%";
            document.getElementById("room33").style.textAlign = "left";
            document.getElementById("room33").style.margin = "2.4%";
            document.getElementById("building33").style.textAlign = "left";
            document.getElementById("building33").style.margin = "2.4%";
            document.getElementById("course33").innerHTML = courseName;
            document.getElementById("instructor33").innerHTML = detailsInstructor;
            document.getElementById("room33").innerHTML = "Room: " + locationRoom;
            document.getElementById("three3").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building33").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building33").innerHTML = "New Building";
            }
            if (dayOfWeek == "Wednesday") {
                if (hourOfDay == 10) {
                    document.getElementById("two3").style.borderColor = "Red";
                    document.getElementById("two3").style.borderWidth = "thick";
                    document.getElementById("two3").style.margin = "-4px";
                    document.getElementById("three3").style.borderColor = "#78F000";
                    document.getElementById("three3").style.borderWidth = "thick";
                    document.getElementById("three3").style.margin = "-4px";
                    document.getElementById("four3").style.borderColor = "#FFFF00";
                    document.getElementById("four3").style.borderWidth = "thick";
                    document.getElementById("four3").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "11:00:00") {
            document.getElementById("course43").style.textAlign = "left";
            document.getElementById("course43").style.margin = "2.4%";
            document.getElementById("instructor43").style.textAlign = "left";
            document.getElementById("instructor43").style.margin = "2.4%";
            document.getElementById("room43").style.textAlign = "left";
            document.getElementById("room43").style.margin = "2.4%";
            document.getElementById("building43").style.textAlign = "left";
            document.getElementById("building43").style.margin = "2.4%";
            document.getElementById("course43").innerHTML = courseName;
            document.getElementById("instructor43").innerHTML = detailsInstructor;
            document.getElementById("room43").innerHTML = "Room: " + locationRoom;
            document.getElementById("four3").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building43").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building43").innerHTML = "New Building";
            }
            if (dayOfWeek == "Wednesday") {
                if (hourOfDay == 11) {
                    document.getElementById("three3").style.borderColor = "Red";
                    document.getElementById("three3").style.borderWidth = "thick";
                    document.getElementById("three3").style.margin = "-4px";
                    document.getElementById("four3").style.borderColor = "#78F000";
                    document.getElementById("four3").style.borderWidth = "thick";
                    document.getElementById("four3").style.margin = "-4px";
                    document.getElementById("five3").style.borderColor = "#FFFF00";
                    document.getElementById("five3").style.borderWidth = "thick";
                    document.getElementById("five3").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "1:00:00") {
            document.getElementById("course53").style.textAlign = "left";
            document.getElementById("course53").style.margin = "2.4%";
            document.getElementById("instructor53").style.textAlign = "left";
            document.getElementById("instructor53").style.margin = "2.4%";
            document.getElementById("room53").style.textAlign = "left";
            document.getElementById("room53").style.margin = "2.4%";
            document.getElementById("building53").style.textAlign = "left";
            document.getElementById("building53").style.margin = "2.4%";
            document.getElementById("course53").innerHTML = courseName;
            document.getElementById("instructor53").innerHTML = detailsInstructor;
            document.getElementById("room53").innerHTML = "Room: " + locationRoom;
            document.getElementById("five3").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building53").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building53").innerHTML = "New Building";
            }
            if (dayOfWeek == "Wednesday") {
                if (hourOfDay == 1) {
                    document.getElementById("four3").style.borderColor = "Red";
                    document.getElementById("four3").style.borderWidth = "thick";
                    document.getElementById("four3").style.margin = "-4px";
                    document.getElementById("five3").style.borderColor = "#78F000";
                    document.getElementById("five3").style.borderWidth = "thick";
                    document.getElementById("five3").style.margin = "-4px";
                    document.getElementById("six3").style.borderColor = "#FFFF00";
                    document.getElementById("six3").style.borderWidth = "thick";
                    document.getElementById("six3").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "2:00:00") {
            document.getElementById("course63").style.textAlign = "left";
            document.getElementById("course63").style.margin = "2.4%";
            document.getElementById("instructor63").style.textAlign = "left";
            document.getElementById("instructor63").style.margin = "2.4%";
            document.getElementById("room63").style.textAlign = "left";
            document.getElementById("room63").style.margin = "2.4%";
            document.getElementById("building63").style.textAlign = "left";
            document.getElementById("building63").style.margin = "2.4%";
            document.getElementById("course63").innerHTML = courseName;
            document.getElementById("instructor63").innerHTML = detailsInstructor;
            document.getElementById("room63").innerHTML = "Room: " + locationRoom;
            document.getElementById("six3").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building63").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building63").innerHTML = "New Building";
            }
            if (dayOfWeek == "Wednesday") {
                if (hourOfDay == 2) {
                    document.getElementById("five3").style.borderColor = "Red";
                    document.getElementById("five3").style.borderWidth = "thick";
                    document.getElementById("five3").style.margin = "-4px";
                    document.getElementById("six3").style.borderColor = "#78F000";
                    document.getElementById("six3").style.borderWidth = "thick";
                    document.getElementById("six3").style.margin = "-4px";
                    document.getElementById("seven3").style.borderColor = "#FFFF00";
                    document.getElementById("seven3").style.borderWidth = "thick";
                    document.getElementById("seven3").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "3:00:00") {
            document.getElementById("course73").style.textAlign = "left";
            document.getElementById("course73").style.margin = "2.4%";
            document.getElementById("instructor73").style.textAlign = "left";
            document.getElementById("instructor73").style.margin = "2.4%";
            document.getElementById("room73").style.textAlign = "left";
            document.getElementById("room73").style.margin = "2.4%";
            document.getElementById("building73").style.textAlign = "left";
            document.getElementById("building73").style.margin = "2.4%";
            document.getElementById("course73").innerHTML = courseName;
            document.getElementById("instructor73").innerHTML = detailsInstructor;
            document.getElementById("room73").innerHTML = "Room: " + locationRoom;
            document.getElementById("seven3").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building73").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building73").innerHTML = "New Building";
            }
            if (dayOfWeek == "Wednesday") {
                if (hourOfDay == 3) {
                    document.getElementById("six3").style.borderColor = "Red";
                    document.getElementById("six3").style.borderWidth = "thick";
                    document.getElementById("six3").style.margin = "-4px";
                    document.getElementById("seven3").style.borderColor = "#78F000";
                    document.getElementById("seven3").style.borderWidth = "thick";
                    document.getElementById("seven3").style.margin = "-4px";
                    document.getElementById("eight3").style.borderColor = "#FFFF00";
                    document.getElementById("eight3").style.borderWidth = "thick";
                    document.getElementById("eight3").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "4:00:00") {
            document.getElementById("course83").style.textAlign = "left";
            document.getElementById("course83").style.margin = "2.4%";
            document.getElementById("instructor83").style.textAlign = "left";
            document.getElementById("instructor83").style.margin = "2.4%";
            document.getElementById("room83").style.textAlign = "left";
            document.getElementById("room83").style.margin = "2.4%";
            document.getElementById("building83").style.textAlign = "left";
            document.getElementById("building83").style.margin = "2.4%";
            document.getElementById("course83").innerHTML = courseName;
            document.getElementById("instructor83").innerHTML = detailsInstructor;
            document.getElementById("room83").innerHTML = "Room: " + locationRoom;
            document.getElementById("eight3").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building83").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building83").innerHTML = "New Building";
            }
            if (dayOfWeek == "Wednesday") {
                if (hourOfDay == 4) {
                    document.getElementById("seven3").style.borderColor = "Red";
                    document.getElementById("seven3").style.borderWidth = "thick";
                    document.getElementById("seven3").style.margin = "-4px";
                    document.getElementById("eight3").style.borderColor = "#78F000";
                    document.getElementById("eight3").style.borderWidth = "thick";
                    document.getElementById("eight3").style.margin = "-4px";
                }
            }
        }
    }

    //********
    //THURSDAY
    //********
    if (weeklyList[3] === true) {
        if (courseTime == "8:00:00") {
            document.getElementById("course14").style.textAlign = "left";
            document.getElementById("course14").style.margin = "2.4%";
            document.getElementById("instructor14").style.textAlign = "left";
            document.getElementById("instructor14").style.margin = "2.4%";
            document.getElementById("room14").style.textAlign = "left";
            document.getElementById("room14").style.margin = "2.4%";
            document.getElementById("building14").style.textAlign = "left";
            document.getElementById("building14").style.margin = "2.4%";
            document.getElementById("course14").innerHTML = courseName;
            document.getElementById("instructor14").innerHTML = detailsInstructor;
            document.getElementById("room14").innerHTML = "Room: " + locationRoom;
            document.getElementById("one4").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building14").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building14").innerHTML = "New Building";
            }
            if (dayOfWeek == "Thursday") {
                if (hourOfDay == 8) {
                    document.getElementById("one4").style.borderColor = "#78F000";
                    document.getElementById("one4").style.borderWidth = "thick";
                    document.getElementById("one4").style.margin = "-4px";
                    document.getElementById("two4").style.borderColor = "#FFFF00";
                    document.getElementById("two4").style.borderWidth = "thick";
                    document.getElementById("two4").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "9:00:00") {
            document.getElementById("course24").style.textAlign = "left";
            document.getElementById("course24").style.margin = "2.4%";
            document.getElementById("instructor24").style.textAlign = "left";
            document.getElementById("instructor24").style.margin = "2.4%";
            document.getElementById("room24").style.textAlign = "left";
            document.getElementById("room24").style.margin = "2.4%";
            document.getElementById("building24").style.textAlign = "left";
            document.getElementById("building24").style.margin = "2.4%";
            document.getElementById("course24").innerHTML = courseName;
            document.getElementById("instructor24").innerHTML = detailsInstructor;
            document.getElementById("room24").innerHTML = "Room: " + locationRoom;
            document.getElementById("two4").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building24").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building24").innerHTML = "New Building";
            }
            if (dayOfWeek == "Thursday") {
                if (hourOfDay == 9) {
                    document.getElementById("one4").style.borderColor = "Red";
                    document.getElementById("one4").style.borderWidth = "thick";
                    document.getElementById("one4").style.margin = "-4px";
                    document.getElementById("two4").style.borderColor = "#78F000";
                    document.getElementById("two4").style.borderWidth = "thick";
                    document.getElementById("two4").style.margin = "-4px";
                    document.getElementById("three4").style.borderColor = "#FFFF00";
                    document.getElementById("three4").style.borderWidth = "thick";
                    document.getElementById("three4").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "10:00:00") {
            document.getElementById("course34").style.textAlign = "left";
            document.getElementById("course34").style.margin = "2.4%";
            document.getElementById("instructor34").style.textAlign = "left";
            document.getElementById("instructor34").style.margin = "2.4%";
            document.getElementById("room34").style.textAlign = "left";
            document.getElementById("room34").style.margin = "2.4%";
            document.getElementById("building34").style.textAlign = "left";
            document.getElementById("building34").style.margin = "2.4%";
            document.getElementById("course34").innerHTML = courseName;
            document.getElementById("instructor34").innerHTML = detailsInstructor;
            document.getElementById("room34").innerHTML = "Room: " + locationRoom;
            document.getElementById("three4").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building34").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building34").innerHTML = "New Building";
            }
            if (dayOfWeek == "Thursday") {
                if (hourOfDay == 10) {
                    document.getElementById("two4").style.borderColor = "Red";
                    document.getElementById("two4").style.borderWidth = "thick";
                    document.getElementById("two4").style.margin = "-4px";
                    document.getElementById("three4").style.borderColor = "#78F000";
                    document.getElementById("three4").style.borderWidth = "thick";
                    document.getElementById("three4").style.margin = "-4px";
                    document.getElementById("four4").style.borderColor = "#FFFF00";
                    document.getElementById("four4").style.borderWidth = "thick";
                    document.getElementById("four4").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "11:00:00") {
            document.getElementById("course44").style.textAlign = "left";
            document.getElementById("course44").style.margin = "2.4%";
            document.getElementById("instructor44").style.textAlign = "left";
            document.getElementById("instructor44").style.margin = "2.4%";
            document.getElementById("room44").style.textAlign = "left";
            document.getElementById("room44").style.margin = "2.4%";
            document.getElementById("building44").style.textAlign = "left";
            document.getElementById("building44").style.margin = "2.4%";
            document.getElementById("course44").innerHTML = courseName;
            document.getElementById("instructor44").innerHTML = detailsInstructor;
            document.getElementById("room44").innerHTML = "Room: " + locationRoom;
            document.getElementById("four4").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building44").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building44").innerHTML = "New Building";
            }
            if (dayOfWeek == "Thursday") {
                if (hourOfDay == 11) {
                    document.getElementById("three4").style.borderColor = "Red";
                    document.getElementById("three4").style.borderWidth = "thick";
                    document.getElementById("three4").style.margin = "-4px";
                    document.getElementById("four4").style.borderColor = "#78F000";
                    document.getElementById("four4").style.borderWidth = "thick";
                    document.getElementById("four4").style.margin = "-4px";
                    document.getElementById("five4").style.borderColor = "#FFFF00";
                    document.getElementById("five4").style.borderWidth = "thick";
                    document.getElementById("five4").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "1:00:00") {
            document.getElementById("course54").style.textAlign = "left";
            document.getElementById("course54").style.margin = "2.4%";
            document.getElementById("instructor54").style.textAlign = "left";
            document.getElementById("instructor54").style.margin = "2.4%";
            document.getElementById("room54").style.textAlign = "left";
            document.getElementById("room54").style.margin = "2.4%";
            document.getElementById("building54").style.textAlign = "left";
            document.getElementById("building54").style.margin = "2.4%";
            document.getElementById("course54").innerHTML = courseName;
            document.getElementById("instructor54").innerHTML = detailsInstructor;
            document.getElementById("room54").innerHTML = "Room: " + locationRoom;
            document.getElementById("five4").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building54").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building54").innerHTML = "New Building";
            }
            if (dayOfWeek == "Thursday") {
                if (hourOfDay == 1) {
                    document.getElementById("four4").style.borderColor = "Red";
                    document.getElementById("four4").style.borderWidth = "thick";
                    document.getElementById("four4").style.margin = "-4px";
                    document.getElementById("five4").style.borderColor = "#78F000";
                    document.getElementById("five4").style.borderWidth = "thick";
                    document.getElementById("five4").style.margin = "-4px";
                    document.getElementById("six4").style.borderColor = "#FFFF00";
                    document.getElementById("six4").style.borderWidth = "thick";
                    document.getElementById("six4").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "2:00:00") {
            document.getElementById("course64").style.textAlign = "left";
            document.getElementById("course64").style.margin = "2.4%";
            document.getElementById("instructor64").style.textAlign = "left";
            document.getElementById("instructor64").style.margin = "2.4%";
            document.getElementById("room64").style.textAlign = "left";
            document.getElementById("room64").style.margin = "2.4%";
            document.getElementById("building64").style.textAlign = "left";
            document.getElementById("building64").style.margin = "2.4%";
            document.getElementById("course64").innerHTML = courseName;
            document.getElementById("instructor64").innerHTML = detailsInstructor;
            document.getElementById("room64").innerHTML = "Room: " + locationRoom;
            document.getElementById("six4").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building64").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building64").innerHTML = "New Building";
            }
            if (dayOfWeek == "Thursday") {
                if (hourOfDay == 2) {
                    document.getElementById("five4").style.borderColor = "Red";
                    document.getElementById("five4").style.borderWidth = "thick";
                    document.getElementById("five4").style.margin = "-4px";
                    document.getElementById("six4").style.borderColor = "#78F000";
                    document.getElementById("six4").style.borderWidth = "thick";
                    document.getElementById("six4").style.margin = "-4px";
                    document.getElementById("seven4").style.borderColor = "#FFFF00";
                    document.getElementById("seven4").style.borderWidth = "thick";
                    document.getElementById("seven4").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "3:00:00") {
            document.getElementById("course74").style.textAlign = "left";
            document.getElementById("course74").style.margin = "2.4%";
            document.getElementById("instructor74").style.textAlign = "left";
            document.getElementById("instructor74").style.margin = "2.4%";
            document.getElementById("room74").style.textAlign = "left";
            document.getElementById("room74").style.margin = "2.4%";
            document.getElementById("building74").style.textAlign = "left";
            document.getElementById("building74").style.margin = "2.4%";
            document.getElementById("course74").innerHTML = courseName;
            document.getElementById("instructor74").innerHTML = detailsInstructor;
            document.getElementById("room74").innerHTML = "Room: " + locationRoom;
            document.getElementById("seven4").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building74").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building74").innerHTML = "New Building";
            }
            if (dayOfWeek == "Thursday") {
                if (hourOfDay == 3) {
                    document.getElementById("six4").style.borderColor = "Red";
                    document.getElementById("six4").style.borderWidth = "thick";
                    document.getElementById("six4").style.margin = "-4px";
                    document.getElementById("seven4").style.borderColor = "#78F000";
                    document.getElementById("seven4").style.borderWidth = "thick";
                    document.getElementById("seven4").style.margin = "-4px";
                    document.getElementById("eight4").style.borderColor = "#FFFF00";
                    document.getElementById("eight4").style.borderWidth = "thick";
                    document.getElementById("eight4").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "4:00:00") {
            document.getElementById("course84").style.textAlign = "left";
            document.getElementById("course84").style.margin = "2.4%";
            document.getElementById("instructor84").style.textAlign = "left";
            document.getElementById("instructor84").style.margin = "2.4%";
            document.getElementById("room84").style.textAlign = "left";
            document.getElementById("room84").style.margin = "2.4%";
            document.getElementById("building84").style.textAlign = "left";
            document.getElementById("building84").style.margin = "2.4%";
            document.getElementById("course84").innerHTML = courseName;
            document.getElementById("instructor84").innerHTML = detailsInstructor;
            document.getElementById("room84").innerHTML = "Room: " + locationRoom;
            document.getElementById("eight4").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building84").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building84").innerHTML = "New Building";
            }
            if (dayOfWeek == "Thursday") {
                if (hourOfDay == 4) {
                    document.getElementById("seven4").style.borderColor = "Red";
                    document.getElementById("seven4").style.borderWidth = "thick";
                    document.getElementById("seven4").style.margin = "-4px";
                    document.getElementById("eight4").style.borderColor = "#78F000";
                    document.getElementById("eight4").style.borderWidth = "thick";
                    document.getElementById("eight4").style.margin = "-4px";
                }
            }
        }
    }

    //******
    //FRIDAY
    //******
    if (weeklyList[4] === true) {
        if (courseTime == "8:00:00") {
            document.getElementById("course15").style.textAlign = "left";
            document.getElementById("course15").style.margin = "2.4%";
            document.getElementById("instructor15").style.textAlign = "left";
            document.getElementById("instructor15").style.margin = "2.4%";
            document.getElementById("room15").style.textAlign = "left";
            document.getElementById("room15").style.margin = "2.4%";
            document.getElementById("building15").style.textAlign = "left";
            document.getElementById("building15").style.margin = "2.4%";
            document.getElementById("course15").innerHTML = courseName;
            document.getElementById("instructor15").innerHTML = detailsInstructor;
            document.getElementById("room15").innerHTML = "Room: " + locationRoom;
            document.getElementById("one5").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building15").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building15").innerHTML = "New Building";
            }
            if (dayOfWeek == "Friday") {
                if (hourOfDay == 8) {
                    document.getElementById("one5").style.borderColor = "#78F000";
                    document.getElementById("one5").style.borderWidth = "thick";
                    document.getElementById("one5").style.margin = "-4px";
                    document.getElementById("two5").style.borderColor = "#FFFF00";
                    document.getElementById("two5").style.borderWidth = "thick";
                    document.getElementById("two5").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "9:00:00") {
            document.getElementById("course25").style.textAlign = "left";
            document.getElementById("course25").style.margin = "2.4%";
            document.getElementById("instructor25").style.textAlign = "left";
            document.getElementById("instructor25").style.margin = "2.4%";
            document.getElementById("room25").style.textAlign = "left";
            document.getElementById("room25").style.margin = "2.4%";
            document.getElementById("building25").style.textAlign = "left";
            document.getElementById("building25").style.margin = "2.4%";
            document.getElementById("course25").innerHTML = courseName;
            document.getElementById("instructor25").innerHTML = detailsInstructor;
            document.getElementById("room25").innerHTML = "Room: " + locationRoom;
            document.getElementById("two5").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building25").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building25").innerHTML = "New Building";
            }
            if (dayOfWeek == "Friday") {
                if (hourOfDay == 9) {
                    document.getElementById("one5").style.borderColor = "Red";
                    document.getElementById("one5").style.borderWidth = "thick";
                    document.getElementById("one5").style.margin = "-4px";
                    document.getElementById("two5").style.borderColor = "#78F000";
                    document.getElementById("two5").style.borderWidth = "thick";
                    document.getElementById("two5").style.margin = "-4px";
                    document.getElementById("three5").style.borderColor = "#FFFF00";
                    document.getElementById("three5").style.borderWidth = "thick";
                    document.getElementById("three5").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "10:00:00") {
            document.getElementById("course35").style.textAlign = "left";
            document.getElementById("course35").style.margin = "2.4%";
            document.getElementById("instructor35").style.textAlign = "left";
            document.getElementById("instructor35").style.margin = "2.4%";
            document.getElementById("room35").style.textAlign = "left";
            document.getElementById("room35").style.margin = "2.4%";
            document.getElementById("building35").style.textAlign = "left";
            document.getElementById("building35").style.margin = "2.4%";
            document.getElementById("course35").innerHTML = courseName;
            document.getElementById("instructor35").innerHTML = detailsInstructor;
            document.getElementById("room35").innerHTML = "Room: " + locationRoom;
            document.getElementById("three5").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building35").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building35").innerHTML = "New Building";
            }
            if (dayOfWeek == "Friday") {
                if (hourOfDay == 10) {
                    document.getElementById("two5").style.borderColor = "Red";
                    document.getElementById("two5").style.borderWidth = "thick";
                    document.getElementById("two5").style.margin = "-4px";
                    document.getElementById("three5").style.borderColor = "#78F000";
                    document.getElementById("three5").style.borderWidth = "thick";
                    document.getElementById("three5").style.margin = "-4px";
                    document.getElementById("four5").style.borderColor = "#FFFF00";
                    document.getElementById("four5").style.borderWidth = "thick";
                    document.getElementById("four5").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "11:00:00") {
            document.getElementById("course45").style.textAlign = "left";
            document.getElementById("course45").style.margin = "2.4%";
            document.getElementById("instructor45").style.textAlign = "left";
            document.getElementById("instructor45").style.margin = "2.4%";
            document.getElementById("room45").style.textAlign = "left";
            document.getElementById("room45").style.margin = "2.4%";
            document.getElementById("building45").style.textAlign = "left";
            document.getElementById("building45").style.margin = "2.4%";
            document.getElementById("course45").innerHTML = courseName;
            document.getElementById("instructor45").innerHTML = detailsInstructor;
            document.getElementById("room45").innerHTML = "Room: " + locationRoom;
            document.getElementById("four5").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building45").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building45").innerHTML = "New Building";
            }
            if (dayOfWeek == "Friday") {
                if (hourOfDay == 11) {
                    document.getElementById("three5").style.borderColor = "Red";
                    document.getElementById("three5").style.borderWidth = "thick";
                    document.getElementById("three5").style.margin = "-4px";
                    document.getElementById("four5").style.borderColor = "#78F000";
                    document.getElementById("four5").style.borderWidth = "thick";
                    document.getElementById("four5").style.margin = "-4px";
                    document.getElementById("five5").style.borderColor = "#FFFF00";
                    document.getElementById("five5").style.borderWidth = "thick";
                    document.getElementById("five5").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "1:00:00") {
            document.getElementById("course55").style.textAlign = "left";
            document.getElementById("course55").style.margin = "2.4%";
            document.getElementById("instructor55").style.textAlign = "left";
            document.getElementById("instructor55").style.margin = "2.4%";
            document.getElementById("room55").style.textAlign = "left";
            document.getElementById("room55").style.margin = "2.4%";
            document.getElementById("building55").style.textAlign = "left";
            document.getElementById("building55").style.margin = "2.4%";
            document.getElementById("course55").innerHTML = courseName;
            document.getElementById("instructor55").innerHTML = detailsInstructor;
            document.getElementById("room55").innerHTML = "Room: " + locationRoom;
            document.getElementById("five5").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building55").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building55").innerHTML = "New Building";
            }
            if (dayOfWeek == "Friday") {
                if (hourOfDay == 1) {
                    document.getElementById("four5").style.borderColor = "Red";
                    document.getElementById("four5").style.borderWidth = "thick";
                    document.getElementById("four5").style.margin = "-4px";
                    document.getElementById("five5").style.borderColor = "#78F000";
                    document.getElementById("five5").style.borderWidth = "thick";
                    document.getElementById("five5").style.margin = "-4px";
                    document.getElementById("six5").style.borderColor = "#FFFF00";
                    document.getElementById("six5").style.borderWidth = "thick";
                    document.getElementById("six5").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "2:00:00") {
            document.getElementById("course65").style.textAlign = "left";
            document.getElementById("course65").style.margin = "2.4%";
            document.getElementById("instructor65").style.textAlign = "left";
            document.getElementById("instructor65").style.margin = "2.4%";
            document.getElementById("room65").style.textAlign = "left";
            document.getElementById("room65").style.margin = "2.4%";
            document.getElementById("building65").style.textAlign = "left";
            document.getElementById("building65").style.margin = "2.4%";
            document.getElementById("course65").innerHTML = courseName;
            document.getElementById("instructor65").innerHTML = detailsInstructor;
            document.getElementById("room65").innerHTML = "Room: " + locationRoom;
            document.getElementById("six5").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building65").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building65").innerHTML = "New Building";
            }
            if (dayOfWeek == "Friday") {
                if (hourOfDay == 2) {
                    document.getElementById("five5").style.borderColor = "Red";
                    document.getElementById("five5").style.borderWidth = "thick";
                    document.getElementById("five5").style.margin = "-4px";
                    document.getElementById("six5").style.borderColor = "#78F000";
                    document.getElementById("six5").style.borderWidth = "thick";
                    document.getElementById("six5").style.margin = "-4px";
                    document.getElementById("seven5").style.borderColor = "#FFFF00";
                    document.getElementById("seven5").style.borderWidth = "thick";
                    document.getElementById("seven5").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "3:00:00") {
            document.getElementById("course75").style.textAlign = "left";
            document.getElementById("course75").style.margin = "2.4%";
            document.getElementById("instructor75").style.textAlign = "left";
            document.getElementById("instructor75").style.margin = "2.4%";
            document.getElementById("room75").style.textAlign = "left";
            document.getElementById("room75").style.margin = "2.4%";
            document.getElementById("building75").style.textAlign = "left";
            document.getElementById("building75").style.margin = "2.4%";
            document.getElementById("course75").innerHTML = courseName;
            document.getElementById("instructor75").innerHTML = detailsInstructor;
            document.getElementById("room75").innerHTML = "Room: " + locationRoom;
            document.getElementById("seven5").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building75").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building75").innerHTML = "New Building";
            }
            if (dayOfWeek == "Friday") {
                if (hourOfDay == 3) {
                    document.getElementById("six5").style.borderColor = "Red";
                    document.getElementById("six5").style.borderWidth = "thick";
                    document.getElementById("six5").style.margin = "-4px";
                    document.getElementById("seven5").style.borderColor = "#78F000";
                    document.getElementById("seven5").style.borderWidth = "thick";
                    document.getElementById("seven5").style.margin = "-4px";
                    document.getElementById("eight5").style.borderColor = "#FFFF00";
                    document.getElementById("eight5").style.borderWidth = "thick";
                    document.getElementById("eight5").style.margin = "-4px";
                }
            }
        }
        if (courseTime == "4:00:00") {
            document.getElementById("course85").style.textAlign = "left";
            document.getElementById("course85").style.margin = "2.4%";
            document.getElementById("instructor85").style.textAlign = "left";
            document.getElementById("instructor85").style.margin = "2.4%";
            document.getElementById("room85").style.textAlign = "left";
            document.getElementById("room85").style.margin = "2.4%";
            document.getElementById("building85").style.textAlign = "left";
            document.getElementById("building85").style.margin = "2.4%";
            document.getElementById("course85").innerHTML = courseName;
            document.getElementById("instructor85").innerHTML = detailsInstructor;
            document.getElementById("room85").innerHTML = "Room: " + locationRoom;
            document.getElementById("eight5").style.backgroundColor = "#2670B8";
            if (locationBuilding == "Main") {
                document.getElementById("building85").innerHTML = "Old Building";
            }
            else if (locationBuilding == "New") {
                document.getElementById("building85").innerHTML = "New Building";
            }
            if (dayOfWeek == "Friday") {
                if (hourOfDay == 4) {
                    document.getElementById("seven5").style.borderColor = "Red";
                    document.getElementById("seven5").style.borderWidth = "thick";
                    document.getElementById("seven5").style.margin = "-4px";
                    document.getElementById("eight5").style.borderColor = "#78F000";
                    document.getElementById("eight5").style.borderWidth = "thick";
                    document.getElementById("eight5").style.margin = "-4px";
                }
            }
        }
    }
}
