<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
    <router-link class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none" to="/">
      <span class="fs-4">AI Project Navigator</span>
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link class="nav-link link-dark" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="nav-link link-dark" to="/tasks">Tasks</router-link>
      </li>
      <li>
        <router-link class="nav-link link-dark" to="/diary">Diary</router-link>
      </li>
      <li>
        <router-link class="nav-link link-dark" to="/assistant">Assistant</router-link>
      </li>
      <li>
        <router-link class="nav-link link-dark" to="/chat">Chat</router-link>
      </li>
      <li>
        <router-link class="nav-link link-dark" to="/settings">Settings</router-link>
      </li>
      <li>
        <router-link class="nav-link link-dark" to="/profile">Profile</router-link>
      </li>
      <li>
        <router-link class="nav-link link-dark" to="/calendar">Kalender</router-link>
      </li>
      <li>
        <router-link class="nav-link link-dark" to="/logger">Logger</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer'
};
</script>

<style scoped>
.nav-link.active {
  background-color: #0d6efd;
  color: white;
}
</style>