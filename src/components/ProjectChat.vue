<template>
  <v-card class="custom-card">
    <v-card-title>Interner Projekt-Chat</v-card-title>
    <v-card-text class="scrollable">
      <v-list>
        <v-list-item v-for="(message, index) in chatMessages" :key="index">
          <v-list-item-content>
            <v-list-item-title :class="{'font-weight-bold': message.sender === currentUser}">
              {{ message.sender }}: {{ message.content }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ message.time }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-select
        v-model="selectedChatRoom"
        :items="chatRooms"
        label="Chat-Raum auswählen"
      ></v-select>
      <v-text-field v-model="chatInput" label="Nachricht eingeben" @keyup.enter="sendChatMessage"></v-text-field>
      <v-btn color="primary" @click="sendChatMessage">Senden</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectChat',
  data() {
    return {
      chatInput: '',
      selectedChatRoom: 'Allgemein',
      chatRooms: ['Allgemein', 'Entwicklung', 'Marketing', 'Management'],
      currentUser: 'Max Mustermann',
      chatMessages: [
        { sender: 'Anna Schmidt', content: 'Hat jemand die aktuellen Designentwürfe?', time: 'Heute, 10:15', room: 'Allgemein' },
        { sender: 'Max Mustermann', content: 'Ich schicke sie dir gleich per E-Mail.', time: 'Heute, 10:17', room: 'Allgemein' }
      ]
    };
  },
  methods: {
    sendChatMessage() {
      if (this.chatInput.trim() !== '') {
        const newMessage = {
          sender: this.currentUser,
          content: this.chatInput,
          time: 'Jetzt',
          room: this.selectedChatRoom
        };
        this.chatMessages.push(newMessage);
        alert(`Nachricht gesendet: ${JSON.stringify(newMessage)}`);
        this.chatInput = '';
      }
    }
  }
};
</script>