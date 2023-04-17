# Weather App README

## Overview
This Weather App is a web-based application that displays the current weather data for a given city. It was developed using HTML, CSS, and JavaScript, and it utilizes the OpenWeatherMap API to retrieve weather data.

## HTML
The HTML structure of the app includes a container that holds the weather data. The container includes a form with an input field and a submit button. The weather data is displayed in a div element with the id "weather-data". The weather data div includes an icon, temperature, description, and details.

## CSS
The CSS styles for the app are written in the "style.css" file. The styles include setting the font family and background color for the body, and styling the container with a white background, box shadow, margin, and padding. The form is styled with flexbox and the input fields are styled with padding, font size, and border radius. The submit button is styled with a blue background color, white text, and a hover effect. The weather icon is styled with a width and height of 100px and the temperature and description are styled with font size and margin. The weather details are styled with flexbox, padding, margin, and background color. The media query is used to change the form layout on smaller screens.

## JavaScript
The JavaScript code for the app includes an API key, which is used to fetch weather data from the OpenWeatherMap API. The weather data is displayed in the HTML elements using JavaScript. The form submission event listener prevents the default form submission behavior and calls the getWeatherData function with the city value from the input field. The getWeatherData function fetches weather data from the API using the city value and API key. If the response is not ok, an error is thrown. If the response is ok, the weather data is displayed in the HTML elements using JavaScript. If an error occurs, an error message is displayed in the weather data div.

### Code Breakdown[HTML]
1. `<!DOCTYPE html>`: Indicates the type of document being used.
2. `<html lang="en">`: Defines the start of the HTML code and sets the language to English.
3. `<head>`: Contains information about the document, including metadata and links to stylesheets and scripts.
4. `<meta charset="UTF-8">`: Sets the character encoding for the document to UTF-8.
5. `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: Sets the document mode to be compatible with the latest version of Internet Explorer.
6. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Sets the viewport to the device width and initial scale of 1.0.
7. `<title>Weather App</title>`: Sets the title of the page to "Weather App".
8. `<link rel="stylesheet" href="style.css">`: Links the stylesheet named "style.css" to the HTML document.
9. `<body>`: Contains the visible content of the page.
10. `<div class="container">`: A container div that contains all the content of the page.
11. `<h1>Weather App</h1>`: Displays the title "Weather App" as an h1 heading.
12. `<form>`: Creates a form element that will allow the user to input a city name and submit the form to retrieve weather data.
13. `<input type="text" id="city-input" placeholder="Enter city">`: Creates a text input field with the ID "city-input" and a placeholder text of "Enter city".
14. `<input type="submit" value="Get weather">`: Creates a submit button with the value "Get weather".
15. `<div id="weather-data">`: Used to display the weather data once it's retrieved from the API.
16. `<div class="icon">`: Used to display the weather icon.
17. `<!--<img src="http://openweathermap.org/img/wn/01d.png" alt="Weather Icon">-->`: A commented out code that would have displayed the weather icon if uncommented.
18. `<div class="temperature"></div>`: Used to display the temperature data.
19. `<div class="description"></div>`: Used to display the weather description.
20. `<div class="details">`: Used to display additional weather details such as feels like, humidity, and wind speed.
21. `<!--<div>Feels like:22°C</div>`
    `<div>Humidity: 40%</div>`
    `<div>Wind speed: 5 m/s</div>-->`: Commented out code that would have displayed additional weather details if uncommented.
22. `<script src="index.js"></script>`: Links the JavaScript file named "index.js" to the HTML document.

