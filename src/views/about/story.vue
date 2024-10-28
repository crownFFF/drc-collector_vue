<script setup>
import Banner from '@/components/banner.vue'
import AsideList from '@/components/asideList.vue'
</script>

<template>
  <Banner>
    <template #bannerTitle>
      關於我們 | 建立-故事
    </template>
  </Banner>
  <main>
    <AsideList></AsideList>
    <div class="content">
      <p class="title">建立-故事</p>
      <p class="info">
        網站主角：是一位畢生酷愛集郵的老教授，除了作學問和教學工作之餘，網路上逛遍世界各地郵件銷售網，周末閒暇時，即遊走在各縣市的郵會活動中，樂此不疲。<br><br>
        可說是窮盡一生的精力，蒐羅包括外太空航天、各種國際運動、主題博覽會、全世界各國~~不管是郵封、郵票、明信片、只要和郵有關…不勝枚舉。<br><br>
        所有的藏品都一律視為寶貝，絕不輕易帶出門。由此可想而知，有多少寶貝深埋其中……各位看客且看下去便知。<br><br>
        網站所展示內容，都出自他私人的收藏品，截取其中的部份來呈現。<br><br>
        盼藉由這個平台，能分享予共同愛好者、舊雨新知。發揮他的餘熱影響力，再次與世界作一連結。<br><br>
      </p>
    </div>
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
  .content{
    width: 70%;
    backdrop-filter: blur(15px);
    padding: 20px;
    cursor: default;
    .title{
      font-size: 28pt;
      line-height: 200%;
      border-bottom: 1px solid #251600;
    }
    .info{
      font-size: 14pt;
      line-height: 180%;
    }
  }
}
</style>