<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import AppNavDrawer from '../components/AppNavDrawer.vue';

export default defineComponent({
  name: 'TheDashboardLayout',
  components: { AppHeader, AppNavDrawer },
});
</script>

<template>
  <v-layout>
    <app-header />
    <app-nav-drawer />

    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
