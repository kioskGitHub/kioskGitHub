function submitFunction()
{
  var request = new XMLHttpRequest();
  var address = 'http://api.openweathermap.org/data/2.5/weather?appid=aedc259c337db937cead97ffcb2b6015&units=imperial&zip=16602,us';


  request.open('GET', address, true);


  request.onload = function()
  {

    if (request.status >= 200 && request.status < 1000)
    {
      // Success!
      var data = JSON.parse(request.responseText);
      var icon = data.weather[0].icon;
      document.getElementById("description").innerHTML = data.weather[0].description; //****
      document.getElementById("temp").innerHTML = data.main.temp + '°F'; //****
      document.getElementById("city").innerHTML = data.name; //****
      document.getElementById("sunUp").innerHTML = "Sunrise: " + time(data.sys.sunrise); //****
      document.getElementById("sunDown").innerHTML = "Sunset: " + time(data.sys.sunset); //****
      document.getElementById("asof").innerHTML = ('AS OF ' + time(data.dt)); //****
      document.getElementById("icon").setAttribute('src', 'http://openweathermap.org/img/w/' + icon + '.png'); //****
    }
    else
    {
      // We reached our target server, but it returned an error
      document.getElementById("color").innerHTML = "ERROR";
    }


    if (data.main.temp < 32)
    {
      document.getElementById("color").setAttribute("style", "background-color:blue;");
    }
    else if ((data.main.temp >= 32) && (data.main.temp < 50))
    {
      document.getElementById("color").setAttribute("style", "background-color:turquoise;");
    }
    else if ((data.main.temp >= 50) && (data.main.temp < 70))
    {
      document.getElementById("color").setAttribute("style", "background-color:yellow;");
    }
    else if ((data.main.temp >= 70) && (data.main.temp < 90))
    {
      document.getElementById("color").setAttribute("style", "background-color:orange;");
    }
    else if (data.main.temp >= 90)
    {
      document.getElementById("color").setAttribute("style", "background-color:red;");
    }
    else
    {
      document.getElementById("color").innerHTML = "ERROR";
    }


  };

  request.onerror = function()
  {
    // There was a connection error of some sort
    alert("ERROR2")
  };

  //send
  request.send();

}

function time(unixTime)
{
  var date = new Date(unixTime * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Will display time in 10:30:23 format
  if (hours > 11)
  {
    var formattedTime = hours + '' + minutes.substr(-2);
  }
  else
  {
    var formattedTime = hours + ':' + minutes.substr(-2);
  }

  var hours24 = parseInt(formattedTime.substring(0, 2));
  var hour = ((hours24 + 11) % 12) + 1;
  var amPm = hours24 > 11 ? 'pm' : 'am';
  var minute = formattedTime.substring(2);
  return hour + ':' + minute + amPm;
}
