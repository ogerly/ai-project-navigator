import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config.js';
import routes from './routes/index.js';
import logger from './middleware/logger.js';
import path from 'path';
import { fileURLToPath } from 'url';
import logsRouter from './routes/logs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/api', routes);
app.use('/logs', logsRouter);

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB successfully');
  console.log('Connection string:', config.mongodbUri);
  console.log('MongoDB ready state:', mongoose.connection.readyState);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
