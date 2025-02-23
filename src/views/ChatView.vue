<template>
  <div class="max-w-3xl mx-auto px-4">
    <div class="bg-white shadow rounded-lg p-6">
      <div class="space-y-4 mb-4">
        <div v-for="(message, index) in messages" :key="index"
          :class="[
            'p-4 rounded-lg',
            message.type === 'user' ? 'bg-blue-100 ml-12' : 'bg-gray-100 mr-12'
          ]"
        >
          {{ message.content }}
        </div>
      </div>

      <div class="mt-4">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Ihre Nachricht..."
            class="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
