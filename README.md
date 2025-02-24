# AI Project Navigator

## Über das Projekt

Das AI Project Navigator ist ein innovatives Konzept, das darauf abzielt, den gesamten Lebenszyklus eines Projekts durch den Einsatz von künstlicher Intelligenz, insbesondere Large Language Models (LLMs), zu optimieren. Von der Ideenfindung bis zur Überwachung von Zielen und Meilensteinen - unser Tool soll die Art und Weise, wie Projekte geplant, durchgeführt und überwacht werden, revolutionieren.

![Bildschirmfoto vom 2025-02-24 08-58-22](https://github.com/user-attachments/assets/33723071-9894-4072-9f75-b51d2d613d8f)


## Hauptfunktionen

- **KI-Assistent**: Ein intelligenter Assistent, der natürliche Spracheingaben versteht und kontextbezogene Antworten generiert.
- **Datenanalyse**: LLMs analysieren Projektdaten, Kommunikation und Tagebucheinträge, um Muster und Trends zu erkennen und als Überwacher von Zielen und Teilzielen dienen kann.
- **Vorhersagen und Empfehlungen**: Basierend auf historischen Daten und aktuellen Trends gibt das System Vorhersagen und Empfehlungen für den Projektverlauf.
- **Automatisierte Berichterstellung**: Erstellung aussagekräftiger Berichte durch Extraktion und Zusammenfassung relevanter Informationen aus verschiedenen Projektquellen.
- **Tagebuch und Notizen**: Ein strukturierter Bereich für tägliche Projektreflexionen und wichtige Notizen.
- **Interner Chat**: Integriertes Kommunikationstool für effiziente Teamzusammenarbeit.
- **Aufgabenverwaltung**: Umfassende Übersicht und Verwaltung von Projektaufgaben und deren Status.
- **Finanzplanung**: Detaillierte Übersicht und Prognosen zur finanziellen Situation des Projekts.

## Technologie-Stack

- **Frontend**: Vue.js mit Vuetify
- **Backend**: Node.js mit Express.js
- **Datenbank**: MongoDB
- **KI-Integration**: Python-basierte Microservices
- **API**: RESTful APIs

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

## Project Structure

```
PROJECT-ASSISTENT
├── public
│   ├── index.html        # Main HTML file
├── src
│   ├── assets            # Static assets (images, fonts, styles)
│   ├── components        # Vue components
│   │   ├── AppBar.vue
│   │   ├── NavigationDrawer.vue
│   │   ├── TopCards.vue
│   │   ├── TasksOverview.vue
│   │   ├── AIAssistant.vue
│   │   ├── ProjectDiary.vue
│   │   └── ProjectChat.vue
│   ├── views             # Vue views
│   │   ├── HomeView.vue
│   │   ├── ChatView.vue
│   │   ├── TasksView.vue
│   │   ├── DiaryView.vue
│   │   └── AssistantView.vue
│   ├── App.vue           # Root component of the application
│   ├── main.js           # Entry point of the application
│   ├── plugins           # Plugin configurations
│   │   └── vuetify.js
│   ├── router            # Vue Router configuration
│   │   └── index.js
│   ├── stores            # Pinia stores
│   │   └── ai.js
├── package.json          # npm configuration file
├── README.md             # Project documentation
├── vite.config.js        # Vite configuration file
└── .env                  # Environment variables
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/ogerly/ai-project-navigator
   cd PROJECT-ASSISTENT
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see your application in action.

## Building for Production

To build the application for production, run:
```
npm run build
```

This will create a `dist` directory with the production-ready files.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

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
