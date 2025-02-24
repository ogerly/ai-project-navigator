import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { logMessage } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, '../../logs', 'app.log');

const logger = (req, res, next) => {
  logMessage(`${req.method} ${req.originalUrl}`);

  res.on('finish', () => {
    logMessage(`${res.statusCode} ${res.statusMessage}`);
  });

  next();
};

export default logger;
