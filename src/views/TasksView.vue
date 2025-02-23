<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">Tasks Overview</div>
      <div class="card-body">
        <TasksOverview />
      </div>
    </div>
  </div>
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
