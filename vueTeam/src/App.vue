<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from "./components/TopNav.vue"
</script>

<template>
  <header>
    <div class="wrapper">
      <TopNav></TopNav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
