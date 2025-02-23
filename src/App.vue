<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';
import TopCards from './components/TopCards.vue';
import TasksOverview from './components/TasksOverview.vue';
import AIAssistant from './components/AIAssistant.vue';
import ProjectDiary from './components/ProjectDiary.vue';
import ProjectChat from './components/ProjectChat.vue';

export default {
  components: {
    AppBar,
    NavigationDrawer,
    TopCards,
    TasksOverview,
    AIAssistant,
    ProjectDiary,
    ProjectChat
  }
};
</script>