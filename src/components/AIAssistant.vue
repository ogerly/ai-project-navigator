<template>
  <div class="card">
    <div class="card-header">KI-Assistent</div>
    <div class="card-body">
      <div class="mb-4">
        <div v-for="(message, index) in aiMessages" :key="index"
          :class="[
            'p-2 rounded',
            message.sender === 'KI' ? 'bg-light text-dark' : 'bg-primary text-white'
          ]"
        >
          <strong>{{ message.sender }}:</strong> {{ message.content }}
          <div class="small text-muted">{{ message.time }}</div>
        </div>
      </div>
      <div class="d-flex gap-2">
        <input v-model="aiInput" type="text" class="form-control" placeholder="Frage an den KI-Assistenten" @keyup.enter="sendToAI" />
        <button class="btn btn-primary" @click="sendToAI">Senden</button>
      </div>
    </div>
  </div>
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
        setTimeout(() => {
          const aiResponse = { sender: 'KI', content: 'Ich habe Ihre Anfrage verstanden und arbeite daran.', time: 'Jetzt' };
          this.aiMessages.push(aiResponse);
        }, 1000);
        this.aiInput = '';
      }
    }
  }
};
</script>