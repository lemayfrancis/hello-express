import express = require('express');
import logger from './logger';

const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  logger.info("GET request received. Sending 'Hello World!'");
  res.send('Hello World!');
});

app.listen(port, () => {
  logger.info(`Hello app listening at http://localhost:${port}`);
});