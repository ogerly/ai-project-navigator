<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">Project Diary</div>
      <div class="card-body">
        <ProjectDiary />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectDiary from '../components/ProjectDiary.vue';

export default {
  name: 'DiaryView',
  components: {
    ProjectDiary
  }
};
</script>
