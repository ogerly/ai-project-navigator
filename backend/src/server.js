import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config.js';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB successfully');
  console.log('Connection string:', config.mongodbUri);
  console.log('MongoDB ready state:', mongoose.connection.readyState);
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
