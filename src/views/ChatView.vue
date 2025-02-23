<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">Project Chat</div>
      <div class="card-body">
        <div class="mb-4">
          <div v-for="(message, index) in messages" :key="index"
            :class="[
              'p-4 rounded',
              message.type === 'user' ? 'bg-primary text-white ml-auto' : 'bg-light text-dark mr-auto'
            ]"
          >
            {{ message.content }}
          </div>
        </div>

        <form @submit.prevent="sendMessage" class="d-flex gap-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Ihre Nachricht..."
            class="form-control"
          />
          <button
            type="submit"
            class="btn btn-primary"
          >
            Senden
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAIStore } from '../stores/ai'

const aiStore = useAIStore()
const newMessage = ref('')
const messages = ref([])

async function sendMessage() {
  if (!newMessage.value.trim()) return

  // Benutzernachricht hinzufügen
  messages.value.push({
    type: 'user',
    content: newMessage.value
  })

  // KI-Antwort generieren
  try {
    const response = await aiStore.generateResponse(newMessage.value)
    messages.value.push({
      type: 'ai',
      content: response
    })
  } catch (error) {
    console.error('Fehler bei der KI-Generierung:', error)
    messages.value.push({
      type: 'ai',
      content: 'Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Anfrage.'
    })
  }

  newMessage.value = ''
}
</script>
