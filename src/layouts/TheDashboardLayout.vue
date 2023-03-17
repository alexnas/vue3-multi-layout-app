<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheDashboardLayout',
});
</script>

<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2">
      <v-container>
        <h2>Header</h2>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer color="grey-darken-2" width="200" permanent>
      <v-container>
        <h2 class="text-center">Nav drawer</h2>
      </v-container>
    </v-navigation-drawer>
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
