
// ==========CLick Function================
$(".submitBt").on("click", function () {
    var cityName = $(".dreamCity").val();
    getWeather(cityName);
    getFiveDay(cityName);
    console.log(cityName);
    $(".cityList").append(cityName);
})
// ==========Open Weather API================
let APIKey = "6adc5c999e3d81602171dd96dbf6ecca";

function getWeather(cityName) {
    let queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey
    console.log(queryURL2);
    $.ajax({
        url: queryURL2,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            $(".cityName").empty();

            // ==========location where current weather data is displayed================     
            $(".currentCity").html(" Current City:</h1>" + "<h1>" + response.name);
            $(".wind-speed").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temperature").text("Temperature (F): " + response.main.temp);
            $(".uv-index").text("UV Index: " + response.main.temp);

        
            let tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".tempF").text("Temperature (Kelvin) " + tempF);

            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);

        })
}
function getFiveDay(cityName) {
    let queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey
    console.log(queryURL3);
    $.ajax({
        url: queryURL3,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
        })

}