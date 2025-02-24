# AI Project Navigator Backend

## Übersicht

Das Backend des AI Project Navigators ist darauf ausgelegt, die serverseitige Logik, Datenverarbeitung und API-Endpunkte für die Anwendung zu verwalten. Es wurde mit Node.js und Express.js entwickelt und integriert MongoDB für die Datenspeicherung. Zusätzlich werden Python-basierte Microservices für KI- und maschinelle Lernfunktionen verwendet.

## Verzeichnisstruktur

```
backend
├── src
│   ├── controllers      # Controller zur Handhabung von Anfragen
│   ├── models           # Mongoose-Modelle für MongoDB
│   ├── routes           # Express-Routen
│   ├── services         # Geschäftslogik und Services
│   ├── utils            # Hilfsfunktionen und Helfer
│   ├── app.js           # Hauptanwendungsdatei
│   ├── config.js        # Konfigurationsdatei
│   └── server.js        # Server-Setup und Initialisierung
├── tests                # Testdateien
├── .env                 # Umgebungsvariablen
├── .gitignore           # Git Ignore Datei
├── package.json         # npm Konfigurationsdatei
└── README.md            # Projektdokumentation
```

## Installation

Um mit dem Backend zu beginnen, folgen Sie diesen Schritten:

1. **Wechseln Sie in das Backend-Verzeichnis:**
   ```sh
   cd backend
   ```

2. **Installieren Sie die Abhängigkeiten:**
   ```sh
   npm install
   ```

3. **Richten Sie die Umgebungsvariablen ein:**
   Erstellen Sie eine `.env`-Datei im `backend`-Verzeichnis und fügen Sie die erforderlichen Umgebungsvariablen hinzu. Zum Beispiel:
   ```properties
   MONGODB_URI=mongodb://admin:secure_password@localhost:27017/ai-project-navigator?authSource=admin
   PORT=5000
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Starten Sie die Anwendung:**
   ```sh
   npm start
   ```

## API-Endpunkte

Das Backend bietet mehrere API-Endpunkte zur Interaktion mit der Anwendung. Hier sind einige der wichtigsten Endpunkte:

### Benutzerverwaltung

- **GET /api/users**: Liste aller Benutzer abrufen
- **POST /api/users**: Neuen Benutzer erstellen
- **GET /api/users/:id**: Benutzer nach ID abrufen
- **PUT /api/users/:id**: Benutzer nach ID aktualisieren
- **DELETE /api/users/:id**: Benutzer nach ID löschen

### Projektverwaltung

- **GET /api/projects**: Liste aller Projekte abrufen
- **POST /api/projects**: Neues Projekt erstellen
- **GET /api/projects/:id**: Projekt nach ID abrufen
- **PUT /api/projects/:id**: Projekt nach ID aktualisieren
- **DELETE /api/projects/:id**: Projekt nach ID löschen

### Aufgabenverwaltung

- **GET /api/tasks**: Liste aller Aufgaben abrufen
- **POST /api/tasks**: Neue Aufgabe erstellen
- **GET /api/tasks/:id**: Aufgabe nach ID abrufen
- **PUT /api/tasks/:id**: Aufgabe nach ID aktualisieren
- **DELETE /api/tasks/:id**: Aufgabe nach ID löschen

### Kalenderverwaltung

- **GET /api/events**: Liste aller Kalendereinträge abrufen
- **POST /api/events**: Neuen Kalendereintrag erstellen

### KI und Maschinelles Lernen

- **POST /api/ai/generate-response**: Antwort mit dem KI-Assistenten generieren
- **POST /api/ai/analyze-data**: Projektdaten mit KI analysieren

## Tests

Um Tests für das Backend auszuführen, verwenden Sie den folgenden Befehl:

```sh
npm test
```

## Beitrag leisten

Wir begrüßen Beiträge zum AI Project Navigator Backend. Wenn Sie Ideen, Vorschläge oder Feedback haben, erstellen Sie bitte ein Issue oder reichen Sie einen Pull-Request ein.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe die LICENSE-Datei für weitere Details.

## Kontakt

Für Fragen oder Anfragen kontaktieren Sie uns bitte unter [your-email@example.com].