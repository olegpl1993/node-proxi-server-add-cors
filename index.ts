import axios from 'axios';
import cors from 'cors';
import express from 'express';

const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const additionalParams = new URLSearchParams(req.query as any);
    additionalParams.delete('url');
    const newUrl = `${req.query.url}&${additionalParams.toString()}`;
    if (req.query.url) {
      const response = await axios.get(newUrl);
      const { data } = response;
      console.log('data', data);
      res.setHeader('Content-Type', 'application/json');
      res.status(200);
      res.end(JSON.stringify(data));
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hello CORS</title>
        </head>
        <body>
          <h1>GET Request: "https://proxi-add-cors.vercel.app/?url=YOUR_API_URL"</h1>
        </body>
      </html>
    `);
    }
  } catch (error) {
    res.status(500);
    res.end(
      `GET Request: "https://proxi-add-cors.vercel.app/?url=YOUR_API_URL" \n Error: ${error}`,
    );
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server start on port: ${PORT}`);
});
