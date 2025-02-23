<template>
  <v-container>
    <TasksOverview />
  </v-container>
</template>

<script>
import TasksOverview from '../components/TasksOverview.vue';

export default {
  name: 'TasksView',
  components: {
    TasksOverview
  }
};
</script>
