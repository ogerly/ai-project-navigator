<template>
  <div class="card">
    <div class="card-header">Interner Projekt-Chat</div>
    <div class="card-body">
      <div class="mb-4">
        <div v-for="(message, index) in chatMessages" :key="index"
          :class="[
            'p-2 rounded',
            message.sender === currentUser ? 'bg-primary text-white ml-auto' : 'bg-light text-dark mr-auto'
          ]"
        >
          <strong>{{ message.sender }}:</strong> {{ message.content }}
          <div class="small text-muted">{{ message.time }}</div>
        </div>
      </div>
      <div class="d-flex gap-2">
        <select v-model="selectedChatRoom" class="form-select">
          <option v-for="room in chatRooms" :key="room" :value="room">{{ room }}</option>
        </select>
        <input v-model="chatInput" type="text" class="form-control" placeholder="Nachricht eingeben" @keyup.enter="sendChatMessage" />
        <button class="btn btn-primary" @click="sendChatMessage">Senden</button>
      </div>
    </div>
  </div>
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
        this.chatInput = '';
      }
    }
  }
};
</script>