<template>
  <div class="container mt-4">
    <h1>Home</h1>
    <p>Database Connection Status: {{ dbStatus }}</p>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">Tasks Overview</div>
          <div class="card-body">
            <TasksOverview />
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">Project Diary</div>
          <div class="card-body">
            <ProjectDiary />
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">AI Assistant</div>
          <div class="card-body">
            <AIAssistant />
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">Project Chat</div>
          <div class="card-body">
            <ProjectChat />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TasksOverview from '../components/TasksOverview.vue';
import ProjectDiary from '../components/ProjectDiary.vue';
import AIAssistant from '../components/AIAssistant.vue';
import ProjectChat from '../components/ProjectChat.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      dbStatus: 'Checking...'
    };
  },
  created() {
    this.checkDbConnection();
  },
  methods: {
    async checkDbConnection() {
      try {
        const response = await axios.get('/api/health');
        console.log('Database connection status:', response.data.status);
        this.dbStatus = response.data.status;
      } catch (error) {
        this.dbStatus = 'Error';
        console.error('Failed to check database connection:', error);
      }
    }
  },
  components: {
    TasksOverview,
    ProjectDiary,
    AIAssistant,
    ProjectChat
  }
};
</script>
