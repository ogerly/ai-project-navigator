<template>
  <div class="list-group">
    <div v-for="(task, index) in tasks" :key="index" class="list-group-item">
      <h5 class="mb-1">{{ task.title }}</h5>
      <p class="mb-1">Zugewiesen an: {{ task.assignee }} | Fälligkeit: {{ task.dueDate }}</p>
      <small><span :class="getStatusColor(task.status)">{{ task.status }}</span></small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksOverview',
  data() {
    return {
      tasks: [
        { title: 'Frontend-Entwicklung', assignee: 'Max Mustermann', dueDate: '2023-10-15', status: 'In Bearbeitung' },
        { title: 'Backend-API', assignee: 'Anna Schmidt', dueDate: '2023-10-20', status: 'Geplant' },
        { title: 'Datenbank-Design', assignee: 'Lisa Meyer', dueDate: '2023-10-10', status: 'Abgeschlossen' }
      ]
    };
  },
  methods: {
    getStatusColor(status) {
      switch(status) {
        case 'Abgeschlossen': return 'text-success';
        case 'In Bearbeitung': return 'text-warning';
        case 'Geplant': return 'text-primary';
        default: return 'text-muted';
      }
    }
  }
};
</script>