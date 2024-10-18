import http from 'http'
import url from 'url'
import path from 'path'
import fs from 'fs/promises'
import fetch from 'node-fetch'

const API_KEY = process.env.API_KEY

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png'
}

const filename = url.fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const publicDir = path.join(dirname, 'public')

const server = http.createServer(async (req, res) => {
  try {
    if (req.url.startsWith('/weather')) {
      const city = req.url.split('?city=')[1]

      if (!city) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'City parameter is required' }))
        return
      }

      const apiUrl = process.env.END_POINT
      
      try {
        const weatherResponse = await fetch(apiUrl)
        
        if (!weatherResponse.ok) {
          throw new Error('Failed to fetch weather data')
        }

        const weatherData = await weatherResponse.json()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(weatherData))
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: error.message }))
      }

      return
    }

    let filepath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url)
    const fileStat = await fs.stat(filepath)
    
    if (fileStat.isFile()) {
      const extname = path.extname(filepath)
      const mimeType = mimeTypes[extname] || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': mimeType })
      const data = await fs.readFile(filepath)
      res.end(data)
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found')
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal Server Error')
  }
})

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
        
