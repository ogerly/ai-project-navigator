import express from 'express';
import mongoose from 'mongoose';
import config from './config.js';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use('/api', routes);

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
