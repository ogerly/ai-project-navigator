<!-- filepath: /home/tulex/Entwicklung/Projekte/dreammall/dreammall-ai-pm-tool/src/components/TasksOverview.vue -->
<template>
  <v-container>
    <v-card class="custom-card">
      <v-card-title>Aufgaben und Fortschritt</v-card-title>
      <v-card-text class="scrollable">
        <v-list>
          <v-list-item v-for="(task, index) in tasks" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
              <v-list-item-subtitle>
                Zugewiesen an: {{ task.assignee }} | Fälligkeit: {{ task.dueDate }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-chip :color="getStatusColor(task.status)">{{ task.status }}</v-chip>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
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
        case 'Abgeschlossen': return 'green';
        case 'In Bearbeitung': return 'orange';
        case 'Geplant': return 'blue';
        default: return 'grey';
      }
    }
  }
};
</script>