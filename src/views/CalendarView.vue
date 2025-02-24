<template>
  <div class="container mt-4">
    <h1>Kalender</h1>
    <Calendar />
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue';

export default {
  name: 'CalendarView',
  components: {
    Calendar
  }
};
</script>
