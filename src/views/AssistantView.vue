<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">AI Assistant</div>
      <div class="card-body">
        <AIAssistant />
      </div>
    </div>
  </div>
</template>

<script>
import AIAssistant from '../components/AIAssistant.vue';

export default {
  name: 'AssistantView',
  components: {
    AIAssistant
  }
};
</script>
