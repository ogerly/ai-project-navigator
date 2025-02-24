<template>
  <div class="container mt-4">
    <h1>Home</h1>
    <p>
      Database Connection Status: 
      <span :class="{'text-success': dbStatus === 'connected', 'text-danger': dbStatus !== 'connected'}">
        {{ dbStatus }}
      </span>
      <button @click="checkDbConnection" class="btn btn-sm btn-outline-secondary ms-2">
        Refresh
      </button>
    </p>
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
import { API_BASE_URL } from '../config';

export default {
  name: 'HomeView',
  data() {
    return {
      dbStatus: 'Checking...',
      statusCheckInterval: null
    };
  },
  created() {
    this.checkDbConnection();
    this.statusCheckInterval = setInterval(this.checkDbConnection, 30000);
  },
  beforeDestroy() {
    if (this.statusCheckInterval) {
      clearInterval(this.statusCheckInterval);
    }
  },
  methods: {
    async checkDbConnection() {
      try {
        console.log('Checking DB connection...');
        const response = await axios.get(`${API_BASE_URL}/health`);
        console.log('Raw response:', response);
        this.dbStatus = response.data.status;
      } catch (error) {
        console.error('DB connection error details:', error.response || error);
        this.dbStatus = 'Error';
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
