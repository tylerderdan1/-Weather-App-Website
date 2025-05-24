function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "5bcacce0e6b9f6dea63ceae404d9f5b3";


  if (!city) {
    alert("Please enter a city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherData = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherData;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "City not found!";
    });
}
