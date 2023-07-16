import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 5555;
const app = express();
app.use(cors());

app.get('/', async (req, res) => {
  console.log(req.params);
  console.log(req.query);
  try {
    const { link } = req.query;
    if (typeof link === 'string') {
      const resposnse = await fetch(link);
      const data = await resposnse.json();
      res.status(200);
      res.end(JSON.stringify(data));
    }
  } catch {
    res.status(400);
    res.end('Bad Request');
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Proxy server start on port: ${PORT}`);
});
