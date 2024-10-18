import http from 'http';
import url from 'url';
import path from 'path';
import fs from 'fs/promises';
import fetch from 'node-fetch'; // Import node-fetch for making HTTP requests
import dotenv from 'dotenv';
dotenv.config();

// Fetch API Key from environment variables
const API_KEY = process.env.API_KEY;
console.log(API_KEY)

// MIME type mapping
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png'    
};

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const publicDir = path.join(dirname, 'public');

const app = http.createServer(async (req, res) => {
    try {
        // Handle /weather route
        if (req.url.startsWith('/weather')) {
            const city = req.url.split('?city=')[1]
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
            const weatherResponse = await fetch(apiUrl);
            const weatherData = await weatherResponse.json();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(weatherData));
            return; // Exit to prevent serving static files for this route
        }

        // Serve static files
        let filepath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
        
        // Check if the file exists
        const fileStat = await fs.stat(filepath);
        
        if (fileStat.isFile()) {
            // Determine the MIME type
            const extname = path.extname(filepath);
            const mimeType = mimeTypes[extname] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': mimeType });
            const data = await fs.readFile(filepath);
            res.end(data);
        } else {
            // If it's not a file, respond with 404
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } catch (err) {
        // Handle errors (e.g., file not found)
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

app.listen(3030, () => {
    console.log('App is running on http://localhost:3030');
});
