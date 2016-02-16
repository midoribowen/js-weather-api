var apiKey = "ae8b792f4392d464a71655c1d0aa69d6";

$(function() {
  $("#humidity").click(function() {
    var city = $("#location").val();
    $("#location").val("");
    $.get("http://api.openweathermap.org/data/2.5/weather/?q=" + city + "&appid=" + apiKey, function(response) {
      var queryResponse = response;
      if (queryResponse.cod !== 200) {
        $(".showWeather").text(queryResponse.message);
      } else {
        $(".showWeather").append("<p>The humidity in " + city + " is " + queryResponse.main.humidity + "%</p>");
      }
    });
  });
});
