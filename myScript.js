var APIKey = "6adc5c999e3d81602171dd96dbf6ecca";
var cityName =   $(".dreamCity").val();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + APIKey
var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey
console.log (queryURL2);
console.log (cityName);
$.ajax({
    url: queryURL2,
    method: "GET"
  })
  .then(function(response) {
console.log (response);
  })
