import { defineStore } from 'pinia'
import OpenAI from 'openai'

export const useAIStore = defineStore('ai', {
  state: () => ({
    openai: null
  }),
  
  actions: {
    initialize(apiKey) {
      this.openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true // Nur für Entwicklung
      })
    },

    async generateResponse(message) {
      if (!this.openai) {
        throw new Error('OpenAI nicht initialisiert')
      }

      try {
        const completion = await this.openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }]
        })

        return completion.choices[0].message.content
      } catch (error) {
        console.error('OpenAI API Fehler:', error)
        throw error
      }
    }
  }
})
