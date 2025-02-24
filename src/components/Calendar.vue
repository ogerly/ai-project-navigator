<template>
  <div class="calendar">
    <h2 class="text-center my-4">Projektkalender</h2>
    <div class="calendar-header d-flex justify-content-between align-items-center mb-3">
      <button class="btn btn-outline-primary" @click="prevMonth">Vorheriger Monat</button>
      <span class="fs-4">{{ currentMonth }} {{ currentYear }}</span>
      <button class="btn btn-outline-primary" @click="nextMonth">Nächster Monat</button>
    </div>
    <div class="calendar-grid">
      <div class="calendar-day border p-2" v-for="day in daysInMonth" :key="day">
        <div class="day-number fw-bold">{{ day }}</div>
        <div class="events mt-2">
          <div v-for="event in getEventsForDay(day)" :key="event.id" class="event bg-light p-1 mb-1 rounded">
            {{ event.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="add-event mt-4">
      <h3>Kalendereintrag hinzufügen</h3>
      <form @submit.prevent="addEvent" class="row g-3">
        <div class="col-md-6">
          <input v-model="newEvent.title" class="form-control" placeholder="Titel" required />
        </div>
        <div class="col-md-6">
          <input v-model="newEvent.date" class="form-control" type="date" required />
        </div>
        <div class="col-12">
          <textarea v-model="newEvent.description" class="form-control" placeholder="Beschreibung"></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Hinzufügen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date().toLocaleString('default', { month: 'long' }),
      currentYear: new Date().getFullYear(),
      newEvent: {
        title: '',
        date: '',
        description: ''
      },
      events: []
    };
  },
  computed: {
    daysInMonth() {
      const date = new Date(this.currentYear, new Date().getMonth() + 1, 0);
      return Array.from({ length: date.getDate() }, (_, i) => i + 1);
    }
  },
  methods: {
    prevMonth() {
      const date = new Date(this.currentYear, new Date().getMonth() - 1);
      this.currentMonth = date.toLocaleString('default', { month: 'long' });
      this.currentYear = date.getFullYear();
    },
    nextMonth() {
      const date = new Date(this.currentYear, new Date().getMonth() + 1);
      this.currentMonth = date.toLocaleString('default', { month: 'long' });
      this.currentYear = date.getFullYear();
    },
    getEventsForDay(day) {
      const date = `${this.currentYear}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      return this.events.filter(event => event.date === date);
    },
    addEvent() {
      this.events.push({ ...this.newEvent, id: Date.now() });
      this.newEvent.title = '';
      this.newEvent.date = '';
      this.newEvent.description = '';
    }
  }
};
</script>

<style scoped>
.calendar {
  max-width: 800px;
  margin: 0 auto;
}
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}
.calendar-day {
  border: 1px solid #ccc;
  padding: 10px;
}
.day-number {
  font-weight: bold;
}
.events {
  margin-top: 10px;
}
.event {
  background-color: #f0f0f0;
  padding: 5px;
  margin-bottom: 5px;
}
.add-event {
  margin-top: 20px;
}
</style>
