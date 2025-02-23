<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-4">
          <v-card-title>Tasks Overview</v-card-title>
          <v-card-text>
            <TasksOverview />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mb-4">
          <v-card-title>Project Diary</v-card-title>
          <v-card-text>
            <ProjectDiary />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mb-4">
          <v-card-title>AI Assistant</v-card-title>
          <v-card-text>
            <AIAssistant />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mb-4">
          <v-card-title>Project Chat</v-card-title>
          <v-card-text>
            <ProjectChat />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TasksOverview from '../components/TasksOverview.vue';
import ProjectDiary from '../components/ProjectDiary.vue';
import AIAssistant from '../components/AIAssistant.vue';
import ProjectChat from '../components/ProjectChat.vue';

export default {
  components: {
    TasksOverview,
    ProjectDiary,
    AIAssistant,
    ProjectChat
  }
};
</script>
