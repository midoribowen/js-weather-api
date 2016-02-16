var expect = require("chai").expect;
var Temperature = require("./../js/temperature.js").Temperature;

describe('Temperature', function() {
  it("converts kelvin to celcius", function() {
    var testTemperature = new Temperature(285.91);
    expect(testTemperature.toCelcius().toFixed(2)).to.equal("12.76");
  });
  it("converts kelvin to fahrenheit", function() {
    var testTemperature = new Temperature(285.91);
    expect(testTemperature.toFahrenheit().toFixed(2)).to.equal("54.97");
  });
});
