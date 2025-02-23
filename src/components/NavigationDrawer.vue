<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Dashboard-Navigation</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="(item, index) in items" :key="index" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Übersicht', icon: 'mdi-view-dashboard' },
        { title: 'Aufgaben', icon: 'mdi-check-circle-outline' },
        { title: 'Nachrichten', icon: 'mdi-message' },
        { title: 'Einstellungen', icon: 'mdi-settings' }
      ]
    };
  }
};
</script>