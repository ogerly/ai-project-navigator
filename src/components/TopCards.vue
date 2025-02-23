<!-- filepath: /home/tulex/Entwicklung/Projekte/dreammall/dreammall-ai-pm-tool/src/components/TopCards.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" v-for="(card, index) in cards" :key="index">
        <v-card class="custom-card">
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
          <v-card-text>
            <v-progress-linear :value="card.value" color="primary"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TopCards',
  data() {
    return {
      cards: [
        { title: 'Abgeschlossene Aufgaben', subtitle: 'In Bearbeitung', value: 70 },
        { title: 'Verbleibende Zeit', subtitle: 'Frist in 5 Tagen', value: 40 },
        { title: 'Budgetauslastung', subtitle: 'Aktueller Stand', value: 50 },
        { title: 'Teamauslastung', subtitle: 'Durchschnittlich', value: 80 }
      ]
    };
  }
};
</script>