<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BBSHeader from "@/components/Header.vue";
import Login from "@/views/Login.vue";

</script>

<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
