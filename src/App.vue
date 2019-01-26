<template>
  <v-app>
    <v-toolbar app style="z-index:1000;">
      <v-toolbar-title class="headline text-uppercase">
        <span>Calander</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <calendar-page></calendar-page>
    </v-content>
  </v-app>
</template>

<script>
import CalendarPage from './views/CalendarPage.vue';

export default {
  name: 'App',
  components: {
    CalendarPage,
  },
};
</script>
