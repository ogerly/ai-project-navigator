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
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">Kalender</div>
          <div class="card-body">
            <ul>
              <li v-for="event in events" :key="event.id">
                {{ event.date }} - {{ event.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-header">Recent Logs</div>
          <div class="card-body">
            <ul>
              <li v-for="log in recentLogs" :key="log.id">
                {{ log.timestamp }} - {{ log.message }}
              </li>
            </ul>
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
      statusCheckInterval: null,
      events: [],
      recentLogs: []
    };
  },
  created() {
    this.checkDbConnection();
    this.statusCheckInterval = setInterval(this.checkDbConnection, 30000);
    this.fetchEvents();
    this.fetchRecentLogs();
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
    },
    async fetchEvents() {
      try {
        const response = await axios.get(`${API_BASE_URL}/events`);
        this.events = response.data;
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    },
    async fetchRecentLogs() {
      try {
        const response = await axios.get(`${API_BASE_URL}/logs?limit=10`);
        this.recentLogs = response.data;
      } catch (error) {
        console.error('Failed to fetch recent logs:', error);
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
