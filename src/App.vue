<template>
  <div id="app">
    <AppBar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <NavigationDrawer />
        </div>
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  components: {
    AppBar,
    NavigationDrawer
  }
};
</script>