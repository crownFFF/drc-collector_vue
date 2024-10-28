<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Home from './views/home.vue'

</script>

<template>
  <Header></Header>
  
  <RouterView></RouterView>
  
  <Footer></Footer>
</template>

<style scoped>

</style>
