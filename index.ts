const express = require("express")
const path = require("path")
const axios = require("axios")
const dotenv = require("dotenv").config()
const API_KEY = process.env.API_KEY


const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))

app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city

    if (!city) {
      res.status(400).json({ error: "City parameter is required" })
      return
    }

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`

    const weatherResponse = await axios.get(apiUrl)
    const weatherData = weatherResponse.data

    res.status(200).json(weatherData)
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : "An unknown error occurred" })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})