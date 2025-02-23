<template>
  <div class="container">
    <form @submit.prevent="saveDiaryEntry">
      <div class="mb-3">
        <label for="date" class="form-label">Datum auswählen</label>
        <input type="date" v-model="date" class="form-control" id="date" />
      </div>
      <div class="mb-3">
        <label for="diaryEntry" class="form-label">Tageseintrag</label>
        <textarea v-model="diaryEntry" class="form-control" id="diaryEntry" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label for="tags" class="form-label">Tags</label>
        <select v-model="selectedTags" class="form-select" id="tags" multiple>
          <option v-for="tag in availableTags" :key="tag" :value="tag">{{ tag }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Eintrag speichern</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProjectDiary',
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
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