import pkg from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const { MongoClient } = pkg;
const uri = process.env.MONGODB_URI;

async function initDatabase() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('ai-project-navigator');

    // Erstellen der "users"-Sammlung
    await database.createCollection('users');
    console.log('Collection "users" created.');

    // Erstellen der "projects"-Sammlung
    await database.createCollection('projects');
    console.log('Collection "projects" created.');

    // Erstellen der "tasks"-Sammlung
    await database.createCollection('tasks');
    console.log('Collection "tasks" created.');

    // Erstellen der "diaryEntries"-Sammlung
    await database.createCollection('diaryEntries');
    console.log('Collection "diaryEntries" created.');

    // Erstellen der "chatMessages"-Sammlung
    await database.createCollection('chatMessages');
    console.log('Collection "chatMessages" created.');

    // Beispiel-Dokumente einfügen
    await database.collection('users').insertOne({
      username: "admin",
      email: "admin@example.com",
      password: "hashed_password",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Example document inserted into "users".');

    await database.collection('projects').insertOne({
      name: "Erstes Projekt",
      description: "Ein Test-Projekt zum Ausprobieren der Datenbank",
      status: "aktiv",
      startDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Example document inserted into "projects".');

    await database.collection('tasks').insertOne({
      title: "Erste Aufgabe",
      description: "Eine Testaufgabe für das erste Projekt",
      status: "offen",
      priority: "mittel",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Example document inserted into "tasks".');

    await database.collection('diaryEntries').insertOne({
      date: new Date(),
      entry: "Erster Tagebucheintrag",
      tags: ["test"],
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Example document inserted into "diaryEntries".');

    await database.collection('chatMessages').insertOne({
      sender: "admin",
      content: "Erste Nachricht",
      time: new Date(),
      room: "general",
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Example document inserted into "chatMessages".');

  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await client.close();
  }
}

initDatabase();
