var Temperature = require("./../js/temperature.js").Temperature;
var apiKey = "ae8b792f4392d464a71655c1d0aa69d6";

$(function() {
  $("#temperature").click(function() {
    var city = $("#location").val();
    $("#location").val("");
    $.get("http://api.openweathermap.org/data/2.5/weather/?q=" + city + "&appid=" + apiKey, function(response) {
      var queryResponse = response;
      if (queryResponse.cod !== 200) {
        $(".showWeather").text(queryResponse.message);
      } else {
        var kelvin = new Temperature(queryResponse.main.temp);
        $(".showWeather").append("<p>The temperature in " + city + " is " + kelvin.toCelcius() + " &#8451;</p>");
      }
    });
  });
});
