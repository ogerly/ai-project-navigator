# AI Project Navigator

## Overview

The AI Project Navigator is a comprehensive tool designed to assist project managers and teams in organizing, tracking, and managing their projects. It leverages AI and machine learning to provide insights, automate tasks, and enhance productivity.

![Bildschirmfoto vom 2025-02-23 19-36-05](https://github.com/user-attachments/assets/9403592a-b657-44d5-bf41-46343021a7c0)


## Features

- **User Management**: Manage users, roles, and permissions.
- **Project Management**: Create, update, and track projects.
- **Task Management**: Assign tasks, set deadlines, and track progress.
- **AI Assistant**: Use AI to generate responses and analyze project data.
- **Project Diary**: Maintain a daily diary of project activities.
- **Project Chat**: Communicate with team members in real-time.
- **Datenanalyse**: LLMs analysieren Projektdaten, Kommunikation und Tagebucheinträge, um Muster und Trends zu erkennen und als Überwacher von Zielen und Teilzielen dienen kann.
- **Vorhersagen und Empfehlungen**: Basierend auf historischen Daten und aktuellen Trends gibt das System Vorhersagen und Empfehlungen für den Projektverlauf.
- **Automatisierte Berichterstellung**: Erstellung aussagekräftiger Berichte durch Extraktion und Zusammenfassung relevanter Informationen aus verschiedenen Projektquellen.
- **Tagebuch und Notizen**: Ein strukturierter Bereich für tägliche Projektreflexionen und wichtige Notizen.
- **Interner Chat**: Integriertes Kommunikationstool für effiziente Teamzusammenarbeit.
- **Aufgabenverwaltung**: Umfassende Übersicht und Verwaltung von Projektaufgaben und deren Status.
- **Finanzplanung**: Detaillierte Übersicht und Prognosen zur finanziellen Situation des Projekts.

## Project Structure

```
PROJECT-ASSISTENT
├── backend
│   ├── src
│   │   ├── controllers      # Controllers for handling requests
│   │   ├── models           # Mongoose models for MongoDB
│   │   ├── routes           # Express routes
│   │   ├── services         # Business logic and services
│   │   ├── utils            # Utility functions and helpers
│   │   ├── app.js           # Main application file
│   │   ├── config.js        # Configuration file
│   │   └── server.js        # Server setup and initialization
│   ├── tests                # Test files
│   ├── .env                 # Environment variables
│   ├── .gitignore           # Git ignore file
│   ├── package.json         # npm configuration file
│   ├── README.md            # Backend documentation
│   ├── README-backendstructur.md  # Backend structure documentation
│   └── README-databasestruktur.md # Database structure documentation
├── src
│   ├── assets               # Static assets (images, styles, etc.)
│   ├── components           # Vue components
│   ├── router               # Vue router configuration
│   ├── stores               # Pinia stores
│   ├── views                # Vue views
│   ├── App.vue              # Main Vue component
│   ├── main.js              # Main entry point
│   └── styles               # Stylesheets
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── index.html               # Main HTML file
├── package.json             # npm configuration file
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration file
```

## Installation

To get started with the AI Project Navigator, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ogerly/ai-project-navigator
   cd ai-project-navigator
   ```

2. **Navigate to the backend directory and install dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Set up environment variables for the backend:**
   Create a `.env` file in the `backend` directory and add the necessary environment variables. For example:
   ```properties
   MONGODB_URI=mongodb://localhost:27017/ai-project-navigator
   PORT=5000
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the backend application:**
   ```sh
   npm start
   ```

5. **Navigate to the frontend directory and install dependencies:**
   ```sh
   cd ..
   npm install
   ```

6. **Set up environment variables for the frontend:**
   Create a `.env` file in the root directory and add the necessary environment variables. For example:
   ```properties
   VITE_OPENAI_API_KEY=your_openai_api_key
   ```

7. **Run the frontend application:**
   ```sh
   npm run dev
   ```

## API Endpoints

The backend provides several API endpoints for interacting with the application. Here are some of the main endpoints:

### User Management

- **GET /api/users**: Get a list of all users
- **POST /api/users**: Create a new user
- **GET /api/users/:id**: Get a user by ID
- **PUT /api/users/:id**: Update a user by ID
- **DELETE /api/users/:id**: Delete a user by ID

### Project Management

- **GET /api/projects**: Get a list of all projects
- **POST /api/projects**: Create a new project
- **GET /api/projects/:id**: Get a project by ID
- **PUT /api/projects/:id**: Update a project by ID
- **DELETE /api/projects/:id**: Delete a project by ID

### Task Management

- **GET /api/tasks**: Get a list of all tasks
- **POST /api/tasks**: Create a new task
- **GET /api/tasks/:id**: Get a task by ID
- **PUT /api/tasks/:id**: Update a task by ID
- **DELETE /api/tasks/:id**: Delete a task by ID

### AI and Machine Learning

- **POST /api/ai/generate-response**: Generate a response using the AI assistant
- **POST /api/ai/analyze-data**: Analyze project data using AI

## Testing

To run tests for the backend, use the following command:

```sh
npm test
```

## Contributing

We welcome contributions to the AI Project Navigator. If you have any ideas, suggestions, or feedback, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any questions or inquiries, please contact us at [your-email@example.com].

## Geplante Drittanbieter-Integrationen (optional)

- OpenAI GPT-4o für LLM-Funktionalitäten / später OS wie LLaMA
- Anbindung eines Bildgenerieungs-Tools für visuelle Darstellungen von Projektdaten / OS Flux von BlackForestLab 
- Jira für erweitertes Aufgabenmanagement
- Slack für Team-Kommunikation
- GitHub für Versionskontrolle
- Google Cloud Platform für Hosting und Skalierung

## Projektstatus

Dieses Projekt befindet sich derzeit in der Konzeptphase. Wir arbeiten aktiv an der Entwicklung eines Prototyps und sind offen für Beiträge und Feedback aus der Community.

## Mitwirken

Wir freuen uns über Beiträge zur Weiterentwicklung dieses Konzepts! Wenn Sie Ideen, Vorschläge oder Feedback haben, erstellen Sie bitte ein Issue oder einen Pull Request.

## Lizenz

[MIT License](LICENSE)

## Kontakt

Projekt-Link: https://github.com/ogerly/ai-project-navigator

### Create a New Repository

To create a new repository on GitHub, follow these steps:

1. Go to [GitHub](https://github.com/) and log in to your account.
2. Click on the `+` icon in the top right corner and select `New repository`.
3. Name the repository `ai-project-navigator`.
4. Add a description (optional).
5. Choose the visibility (public or private).
6. Click on `Create repository`.

After creating the repository, follow the instructions to push your local project to the new repository:

```sh
git remote add origin https://github.com/ogerly/ai-project-navigator.git
git branch -M main
git push -u origin main
```

This will push your local project to the newly created GitHub repository.
`
