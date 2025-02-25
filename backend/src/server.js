import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config.js';
import routes from './routes/index.js';
import logger from './middleware/logger.js';
import path from 'path';
import { fileURLToPath } from 'url';
import logsRouter from './routes/logs.js';
import dbTestRouter from './routes/dbTest.js';
import healthRouter from './routes/health.js';
import eventsRouter from './routes/events.js'; // Importieren der Events-Route
import { logMessage } from './utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000; // Backend-Server läuft auf Port 4000

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/api', routes);
app.use('/logs', logsRouter);
app.use('/dbtest', dbTestRouter);
app.use('/health', healthRouter); // Verwenden der Health-Route
app.use('/events', eventsRouter); // Verwenden der Events-Route

// Route für "Server is running"
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  logMessage(`Unhandled Error: ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
});

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
