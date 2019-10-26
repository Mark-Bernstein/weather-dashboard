$(document).ready(function () {
    var APIKey = "221028cb8f66254e19c65e04a9ab9b51";
    var userCitySearches = [];
    userCitySearches = localStorage.getItem("userInputStorage");
    userCitySearches = JSON.parse(userCitySearches) || [];
    renderSearchHistory()
    var userInput;

    function displayWeatherInfo(cityName) {
        var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
            cityName + "&units=imperial&APPID=" + APIKey;
        var queryURL =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            cityName + "&units=imperial&APPID=" + APIKey;
        //call the weather api
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var cityLat = "lat=" + response.coord.lat;
            var cityLon = "lon=" + response.coord.lon;
            var uvIndexQueryURL =
                "http://api.openweathermap.org/data/2.5/uvi?" +
                "&APPID=" + APIKey + "&" + cityLat + "&" + cityLon;
            //call the UV index api
            $.ajax({
                url: uvIndexQueryURL,
                method: "GET"
            }).then(function (UVresponse) {
                $("#uvIndex").text("UV Index: " + UVresponse.value);
            });
            var cityP = $("<p>").text(response.name + " (Today)");
            var temperatureP = $("<p>").text("Temperature: " + response.main.temp + " ℉");
            var humidityP = $("<p>").text("Humidity: " + response.main.humidity + "%");
            var windSpeedP = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#cityName").empty();
            $("#temperature").empty();
            $("#humidity").empty();
            $("#windSpeed").empty();
            $("#uvIndex").empty();
            $("#cityName").append(cityP);
            $("#temperature").append(temperatureP);
            $("#humidity").append(humidityP);
            $("#windSpeed").append(windSpeedP);
        });
        //call the 5 day forecase api
        $.ajax({
            url: forecastQueryURL,
            method: "GET"
        })
            // We store all of the retrieved data inside of an object called "response"
            .then(function (response) {
                displayWeatherForecast(response);
            });
    }

    function displayWeatherForecast(response) {
        //day 1
        var dateP1 = $("<p>").text(response.list[3].dt_txt);
        var weatherIcon1 = response.list[3].weather[0].icon;
        var weatherIconImg1 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon1 + "@2x.png");
        var temperatureP1 = $("<p>").text("Temp: " + response.list[3].main.temp + " ℉");
        var humidityP1 = $("<p>").text("Humidity: " + response.list[3].main.humidity + "%");
        $(".forecastDate1").empty();
        $(".weatherIcon1").empty();
        $(".tempForecast1").empty();
        $(".humidityForecast1").empty();
        $(".forecastDate1").append(dateP1);
        $(".weatherIcon1").append(weatherIconImg1);
        $(".tempForecast1").append(temperatureP1);
        $(".humidityForecast1").append(humidityP1);

        var weatherIconToday = response.list[3].weather[0].icon;
        var weatherIconTodayImage = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIconToday + "@2x.png"
        );
        $("#weatherIcon").empty();
        $("#weatherIcon").append(weatherIconTodayImage);
        //day 2
        var dateP2 = $("<p>").text(response.list[11].dt_txt);
        var weatherIcon2 = response.list[11].weather[0].icon;
        var weatherIconImg2 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon2 + "@2x.png");
        var temperatureP2 = $("<p>").text("Temp: " + response.list[11].main.temp + " ℉");
        var humidityP2 = $("<p>").text("Humidity: " + response.list[11].main.humidity + "%");
        $(".forecastDate2").empty();
        $(".weatherIcon2").empty();
        $(".tempForecast2").empty();
        $(".humidityForecast2").empty();
        $(".forecastDate2").append(dateP2);
        $(".weatherIcon2").append(weatherIconImg2);
        $(".tempForecast2").append(temperatureP2);
        $(".humidityForecast2").append(humidityP2);
        //day 3
        var dateP3 = $("<p>").text(response.list[19].dt_txt);
        var weatherIcon3 = response.list[19].weather[0].icon;
        var weatherIconImg3 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon3 + "@2x.png");
        var temperatureP3 = $("<p>").text("Temp: " + response.list[19].main.temp + " ℉");
        var humidityP3 = $("<p>").text("Humidity: " + response.list[19].main.humidity + "%");
        $(".forecastDate3").empty();
        $(".weatherIcon3").empty();
        $(".tempForecast3").empty();
        $(".humidityForecast3").empty();
        $(".forecastDate3").append(dateP3);
        $(".weatherIcon3").append(weatherIconImg3);
        $(".tempForecast3").append(temperatureP3);
        $(".humidityForecast3").append(humidityP3);
        //day 4
        var dateP4 = $("<p>").text(response.list[27].dt_txt);
        var weatherIcon4 = response.list[27].weather[0].icon;
        var weatherIconImg4 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon4 + "@2x.png");
        var temperatureP4 = $("<p>").text("Temp: " + response.list[27].main.temp + " ℉");
        var humidityP4 = $("<p>").text("Humidity: " + response.list[27].main.humidity + "%");
        $(".forecastDate4").empty();
        $(".weatherIcon4").empty();
        $(".tempForecast4").empty();
        $(".humidityForecast4").empty();
        $(".forecastDate4").append(dateP4);
        $(".weatherIcon4").append(weatherIconImg4);
        $(".tempForecast4").append(temperatureP4);
        $(".humidityForecast4").append(humidityP4);
        //day 5
        var dateP5 = $("<p>").text(response.list[35].dt_txt);
        var weatherIcon5 = response.list[35].weather[0].icon;
        var weatherIconImg5 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon5 + "@2x.png");
        var temperatureP5 = $("<p>").text("Temp: " + response.list[35].main.temp + " ℉");
        var humidityP5 = $("<p>").text("Humidity: " + response.list[35].main.humidity + "%");
        $(".forecastDate5").empty();
        $(".weatherIcon5").empty();
        $(".tempForecast5").empty();
        $(".humidityForecast5").empty();
        $(".forecastDate5").append(dateP5);
        $(".weatherIcon5").append(weatherIconImg5);
        $(".tempForecast5").append(temperatureP5);
        $(".humidityForecast5").append(humidityP5);
    }

    function addPreviousSearch() {
        var btnPreviousSearch = $("<button>")
        btnPreviousSearch.addClass("search list-group-item list-group-item-action");
        btnPreviousSearch.attr("data-name", userInput);
        btnPreviousSearch.text(userInput);
        $(".previousSearchList").prepend(btnPreviousSearch);
    }

    function renderSearchHistory() {
        console.log(userCitySearches);
        for (var i = 0; i < userCitySearches.length; i++) {
            var button = $("<button>");
            button.addClass("search list-group-item list-group-item-action");
            button.text(userCitySearches[i]);
            $(".previousSearchList").prepend(button);
        }
    }

    $(document).on("click", ".list-group-item-action", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var pastSearchButton = $(this).text();
        displayWeatherInfo(pastSearchButton);
    });

    $(".btn-success").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        userInput = $("#citySearch").val().trim();
        if ((userInput === null) || (userInput === "")) {
            console.log("There was no user input.");
            return;
        } else {
            userCitySearches.push(userInput);
            localStorage.setItem("userInputStorage", JSON.stringify(userCitySearches));
            displayWeatherInfo(userInput);
            addPreviousSearch();
        }
    });

    $(document).on("click", ".search list-group-item list-group-item-action", displayWeatherInfo);
    //clears history (buttons go away!)
    $("#clearBtn").on("click", function (event) {
        localStorage.clear();
    });
});