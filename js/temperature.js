var Temperature = function(kelvin) {
  this.kelvin = kelvin;
};

Temperature.prototype.toCelcius = function() {
  var celcius = (this.kelvin - 273.15).toFixed(2);
  return celcius;
};

Temperature.prototype.toFahrenheit = function() {
  var fahrenheit = (this.kelvin * 1.8 - 459.67).toFixed(2);
  return fahrenheit;
};

exports.Temperature = Temperature;
