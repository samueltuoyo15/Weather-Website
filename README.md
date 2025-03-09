# Weather Website ☀️

A simple web application to fetch and display current weather conditions for a given city. Built with Node.js and powered by the WeatherAPI.

## Description 📝

This project provides a straightforward way to retrieve and display current weather information. Just enter a city, and the application will fetch the latest weather conditions using the WeatherAPI. It's perfect for quickly checking the weather in different locations.

## Features ✨

-   **City-Based Weather**: Fetches weather data based on the city you enter.
-   **Simple Interface**: Easy-to-use design for quick weather checks.
-   **Error Handling**: Gracefully handles invalid city inputs and API errors.
-   **Asynchronous Data Fetching**: Uses `axios` to fetch weather data asynchronously.

## Technologies Used 🛠️

| Technology | Description                                       |
| :---------- | :------------------------------------------------ |
| Node.js     | Runtime environment for executing JavaScript code |
| Express     | Web framework for building the server             |
| Axios       | Promise-based HTTP client for making API requests |
| dotenv      | Loads environment variables from a `.env` file   |

## Installation 📦

Follow these steps to get the project up and running on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/samueltuoyo15/Weather-Website.git
    cd Weather-Website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up your environment variables:**

    -   Create a `.env` file in the root directory.
    -   Add your WeatherAPI API key:

        ```
        API_KEY=YOUR_API_KEY
        ```

4.  **Run the application:**

    ```bash
    npm start
    ```

    The server will start on the specified port (default is 3000).

## Usage 🚀

1.  **Access the application** in your web browser at `http://localhost:3000`.

2.  **Enter a city name** in the input field.

3.  The application will display the current weather conditions for the specified city.

### Example

To fetch the weather for London, send a GET request to `/weather?city=London`.

```bash
curl http://localhost:3000/weather?city=London
```

## Contributing 🤝

Contributions are welcome! Here's how you can contribute:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix.
3.  **Make your changes** and commit them with clear, descriptive messages.
4.  **Submit a pull request** to the main branch.

## License 📄

This project is licensed under the ISC License. See the `LICENSE` file for details.

[![Built with Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)
