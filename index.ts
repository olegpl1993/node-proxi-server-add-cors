import express from 'express';
import cors from 'cors';
import axios from 'axios';

const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const { url } = req.query;
    if (typeof url === 'string') {
      const response = await axios.get(url);
      const { data } = response;
      res.status(200);
      res.end(JSON.stringify(data));
    }
  } catch {
    res.status(400);
    res.end('Bad Request');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server start on port: ${PORT}`);
});
