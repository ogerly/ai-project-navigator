<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">Profil Einstellungen</div>
      <div class="card-body">
        <form @submit.prevent="saveProfileSettings">
          <div class="mb-3">
            <label for="username" class="form-label">Benutzername</label>
            <input type="text" v-model="username" class="form-control" id="username" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">E-Mail</label>
            <input type="email" v-model="email" class="form-control" id="email" />
          </div>
          <button type="submit" class="btn btn-primary">Profil speichern</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSettingsView',
  data() {
    return {
      username: '',
      email: ''
    };
  },
  methods: {
    saveProfileSettings() {
      const profile = {
        username: this.username,
        email: this.email
      };
      alert(`Profil gespeichert: ${JSON.stringify(profile)}`);
    }
  }
};
</script>
