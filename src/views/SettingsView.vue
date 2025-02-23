<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">Allgemeine Einstellungen</div>
      <div class="card-body">
        <form @submit.prevent="saveSettings">
          <div class="mb-3">
            <label for="openaiApiKey" class="form-label">OpenAI API Key</label>
            <input type="text" v-model="openaiApiKey" class="form-control" id="openaiApiKey" />
          </div>
          <div class="mb-3">
            <label for="otherApiKey" class="form-label">Anderer API Key</label>
            <input type="text" v-model="otherApiKey" class="form-control" id="otherApiKey" />
          </div>
          <button type="submit" class="btn btn-primary">Einstellungen speichern</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsView',
  data() {
    return {
      openaiApiKey: '',
      otherApiKey: ''
    };
  },
  methods: {
    saveSettings() {
      const settings = {
        openaiApiKey: this.openaiApiKey,
        otherApiKey: this.otherApiKey
      };
      alert(`Einstellungen gespeichert: ${JSON.stringify(settings)}`);
    }
  }
};
</script>
