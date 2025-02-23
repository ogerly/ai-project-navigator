<template>
  <v-container>
    <v-card class="custom-card">
      <v-card-title>Projekt-Tagebuch</v-card-title>
      <v-card-text>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Datum auswählen"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
        </v-menu>
        <v-textarea
          v-model="diaryEntry"
          label="Tageseintrag"
          hint="Beschreiben Sie Ihre heutigen Aktivitäten, Herausforderungen und Erfolge"
        ></v-textarea>
        <v-select
          v-model="selectedTags"
          :items="availableTags"
          label="Tags"
          multiple
          chips
          hint="Wählen Sie relevante Tags für Ihren Eintrag"
          persistent-hint
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveDiaryEntry">Eintrag speichern</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectDiary',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      diaryEntry: '',
      selectedTags: [],
      availableTags: ['Entwicklung', 'Meeting', 'Problem', 'Lösung', 'Idee', 'Fortschritt']
    };
  },
  methods: {
    saveDiaryEntry() {
      const entry = {
        date: this.date,
        entry: this.diaryEntry,
        tags: this.selectedTags
      };
      alert(`Tagebucheintrag gespeichert: ${JSON.stringify(entry)}`);
      this.diaryEntry = '';
      this.selectedTags = [];
    }
  }
};
</script>