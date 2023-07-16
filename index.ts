/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  const { link } = req.query;
  res.send(`Link: ${link}`);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Прокси-сервер запущен на порту ${port}`);
});
