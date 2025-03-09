const searchInput = document.getElementById('search-fetch-input') as HTMLInputElement
const searchBtn = document.getElementById('search-fetch-button') as HTMLButtonElement
const weatherTemp = document.getElementById('weather-temp') as HTMLSpanElement
const weatherDesc = document.getElementById('weather-description') as HTMLParagraphElement
const weatherIcon = document.getElementById('weather-icon') as HTMLImageElement
const WeatherHumidity = document.getElementById('humidity') as HTMLSpanElement
const WindSpeed = document.getElementById('wind-speed') as HTMLSpanElement

function fetchWeather(): void {
  const city = searchInput.value.trim()

  if (!city) {
    alert('Hey Champ \nSeems you gotta type in a city, street, or country')
    return
  }

  fetch(`/weather?city=${city}`)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data: any) => {
      const temp = data.current.temp_c
      const description = data.current.condition.text
      const humidity = data.current.humidity
      const windSpeed = data.current.wind_mph

      if (description.includes('rain') || temp < 15) {
        weatherIcon.src = 'img/storm.png'
      } else if (description.includes('rain') || temp >= 15) {
        weatherIcon.src = 'img/sunny.png'
      } else {
        weatherIcon.src = 'img/cloud.png'
      }

      weatherTemp.innerHTML = `${temp}°C`
      weatherDesc.innerHTML = description
      WeatherHumidity.innerHTML = `${humidity}%`
      WindSpeed.innerHTML = `${windSpeed} Km/H`

      const footer = document.querySelector('footer') as HTMLElement
      footer.style.visibility = 'visible'
    })
    .catch((error: Error) => {
      console.error(error)

      weatherDesc.innerHTML =
        'Typo or Invalid Location. Seems there\'s no Street, City, State, or County that matches your search.'
      weatherIcon.src = ''
      weatherTemp.innerHTML = ''
      WeatherHumidity.innerHTML = ''
      WindSpeed.innerHTML = ''

      const footer = document.querySelector('footer') as HTMLElement
      footer.style.visibility = 'hidden'
    })

  searchInput.value = ''
}

searchInput.addEventListener('keypress', (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    fetchWeather()
  }
})

searchBtn.addEventListener('click', fetchWeather)