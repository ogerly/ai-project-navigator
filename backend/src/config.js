import dotenv from 'dotenv';

dotenv.config();

export default {
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:5000/ai-project-navigator',
  port: process.env.PORT || 3000,
  openaiApiKey: process.env.OPENAI_API_KEY
};
