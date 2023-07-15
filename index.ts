/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();
const port = 3000;

// Конфигурация прокси
const proxyOptions = {
  target: 'https://msdrop.com.ua', // Замените на целевой сервер, на который будете перенаправлять запросы
  changeOrigin: true, // Изменить заголовок "Origin" на целевой сервер
  // Дополнительные опции прокси можно указать здесь
};

// Использование пакета cors
app.use(cors());

// Применение прокси-сервера к определенному пути
app.use('/api', createProxyMiddleware(proxyOptions));

// Запуск сервера
app.listen(port, () => {
  console.log(`Прокси-сервер запущен на порту ${port}`);
});
