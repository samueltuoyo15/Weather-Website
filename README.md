# Weather Analysis App

A simple web application to fetch and display current weather conditions for a given city, street, or country.

## Description

This application provides a user-friendly interface to check the current weather. It fetches data from the WeatherAPI and displays temperature, description, humidity, and wind speed.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd weather-app
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Set up environment variables:**

    *   Create a `.env` file in the root directory.
    *   Add your WeatherAPI API key to the `.env` file:

        ```
        API_KEY=YOUR_API_KEY
        ```

## Usage

1.  **Start the server:**

    ```bash
    npm start
    ```

    This will start the server using nodemon, which automatically restarts the server upon file changes.

2.  **Open the application in your browser:**

    Navigate to `http://localhost:3000` (or the port your server is running on).

3.  **Enter a city, street, or country in the search box and click the search button.** The weather information will be displayed below.

## Project Structure

```
weather-app/
├── public/
│   ├── app.js        # Client-side JavaScript for fetching and displaying weather data
│   ├── index.html    # Main HTML file for the user interface
│   ├── img/          # Directory containing weather icons
│   │   ├── cloud.png
│   │   ├── rainy.png
│   │   ├── storm.png
│   │   └── sunny.png
├── server.js       # Node.js server for handling API requests and serving static files
├── package.json    # Project dependencies and scripts
├── package-lock.json # Dependency versions
├── vercel.json     # Configuration file for Vercel deployment
└── README.md       # This file
```

## Technologies Used

*   Node.js
*   Express (implicitly via `http` module in `server.js`)
*   `node-fetch`
*   HTML
*   CSS
*   JavaScript

## Contributing

Contributions are welcome! Here's how you can contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is under the ISC License.

## Badges

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Built with Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)
