<template>
  <v-container>
    <v-card class="custom-card">
      <v-card-title>KI-Assistent</v-card-title>
      <v-card-text class="scrollable">
        <v-list>
          <v-list-item v-for="(message, index) in aiMessages" :key="index">
            <v-list-item-content>
              <v-list-item-title :class="{'font-weight-bold': message.sender === 'KI'}">
                {{ message.sender }}: {{ message.content }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ message.time }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-text-field v-model="aiInput" label="Frage an den KI-Assistenten" @keyup.enter="sendToAI"></v-text-field>
        <v-btn color="primary" @click="sendToAI">Senden</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AIAssistant',
  data() {
    return {
      aiInput: '',
      aiMessages: [
        { sender: 'Benutzer', content: 'Wie ist der aktuelle Projektstand?', time: 'Heute, 09:30' },
        { sender: 'KI', content: 'Das Projekt liegt im Zeitplan. Die Frontend-Entwicklung ist zu 70% abgeschlossen, während die Backend-API-Entwicklung nächste Woche beginnen wird.', time: 'Heute, 09:31' }
      ]
    };
  },
  methods: {
    sendToAI() {
      if (this.aiInput.trim() !== '') {
        const newMessage = { sender: 'Benutzer', content: this.aiInput, time: 'Jetzt' };
        this.aiMessages.push(newMessage);
        alert(`Nachricht an KI gesendet: ${JSON.stringify(newMessage)}`);
        setTimeout(() => {
          const aiResponse = { sender: 'KI', content: 'Ich habe Ihre Anfrage verstanden und arbeite daran.', time: 'Jetzt' };
          this.aiMessages.push(aiResponse);
          alert(`Antwort von KI erhalten: ${JSON.stringify(aiResponse)}`);
        }, 1000);
        this.aiInput = '';
      }
    }
  }
};
</script>