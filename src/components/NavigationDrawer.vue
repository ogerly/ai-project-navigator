<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
  
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" v-for="(item, index) in items" :key="index">
        <router-link class="nav-link link-dark" :to="item.link">
          <i :class="item.icon"></i> {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data() {
    return {
      items: [
        { title: 'Home', icon: 'bi bi-house', link: '/' },
        { title: 'Tasks', icon: 'bi bi-check-circle', link: '/tasks' },
        { title: 'Diary', icon: 'bi bi-book', link: '/diary' },
        { title: 'Assistant', icon: 'bi bi-robot', link: '/assistant' },
        { title: 'Chat', icon: 'bi bi-chat', link: '/chat' },
        { title: 'Settings', icon: 'bi bi-gear', link: '/settings' },
        { title: 'Profile', icon: 'bi bi-person', link: '/profile' }
      ]
    };
  }
};
</script>