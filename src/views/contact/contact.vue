<script setup>
import Banner from '@/components/banner.vue'
import AsideList from '@/components/asideList.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute()
if(route.params.id === 'email'){
  window.open('mailto:fongmin057@gmail.com')
  window.history.go(-1)
}else if(route.params.id === 'line'){
  window.open('https://lin.ee/yvbKc0T')
  window.history.go(-1)
}
</script>

<template>
  <Banner>
    <template #bannerTitle>
      聯絡
    </template>
  </Banner>

  <main>
    <AsideList></AsideList>

  </main>
  
</template>

<style scoped lang="scss">
main {
  width: 1440px;
  padding: 10px;
  height: 600px;
  background: rgb(255, 255, 255, .5);
  display: flex;
  gap: 50px;
}
</style>