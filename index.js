require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000; // Frontend-Server läuft auf Port 5000
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('MONGODB_URI is not defined in .env file');
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/projects', async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db('ai-project-navigator');
    const projects = database.collection('projects');
    const projectList = await projects.find().toArray();
    res.json(projectList);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.get('/tasks', async (req, res) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db('ai-project-navigator');
    const tasks = database.collection('tasks');
    const taskList = await tasks.find().toArray();
    res.json(taskList);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
