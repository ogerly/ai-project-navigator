<template>
  <v-app-bar app>
    <v-toolbar-title>🤖 Vue AI App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/tasks">Tasks</v-btn>
    <v-btn text to="/diary">Diary</v-btn>
    <v-btn text to="/assistant">Assistant</v-btn>
    <v-btn text to="/chat">Chat</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>