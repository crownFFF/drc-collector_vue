<script setup>
import Banner from '@/components/banner.vue'
import AsideList from '@/components/asideList.vue'
import { ref, onMounted} from 'vue'
import { useRoute } from "vue-router";

const route = useRoute()
if(route.params.id === 'shopee'){
  window.open('https://shopee.tw/mtvuru0l2o?categoryId=100639&entryPoint=ShopByPDP&itemId=28654252385&upstream=search&is_from_login=true')
  window.history.go(-1)
}else if(route.params.id === 'ebay'){
  window.open('https://www.ebay.com/sch/i.html?item=395604408212&rt=nc&_trksid=p4429486.m3561.l161211&_ssn=fonpe45')
  window.history.go(-1)
}


</script>

<template>
  <Banner>
    <template #bannerTitle>
      商店
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