<script setup>
import Banner from '@/components/banner.vue'
import AsideList from '@/components/asideList.vue'
</script>

<template>
  <Banner>
    <template #bannerTitle>
      關於我們 | 關於網站
    </template>
  </Banner>
  <main>
    <AsideList></AsideList>
    <div class="content">
      <p class="title">關於網站</p>
      <p class="info">
        創建網站來展示和分享這些珍貴的郵封；首先設計網站的雛形，選擇了一個簡潔而優雅的界面，讓用戶能夠輕松舒適的瀏覽各式郵封照片，以及詳盡的描述和歷史背景。<br><br>
        每一封幾乎都是獨一無二的限量版，帶有特殊意義的歷史故事。 在這充滿熱情和知識的社群平台，進行良好互動論壇、讓愛好者們可以分享經驗、討論郵封郵票的價值和設計，甚至進行交易。<br><br>
        希望能邀請到各郵封領域專家、收藏家、與愛好者加入這個平台，不僅能夠展示自己的收藏，還能與其他愛好者交流，分享知識和經驗。<br><br>
        作為一個獨特的交流和展示空間。能起到拋磚引玉的良好效果。<br><br>
      </p>
    </div>
  </main>
</template>

<style scoped lang="scss">
.bannerArea {
  padding-top: 80px;
  width: 100%;
  height: 500px;
  background: url('/src/assets/image/stamp013-1.png') no-repeat, rgb(255, 255, 255, .5);
  backdrop-filter: blur(20px);
  background-size: contain;
  background-position: center;
  position: relative;

  .BannerTitle {
    position: absolute;
    background: #fff;
    text-align: center;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 30px;
    font-size: 16pt;
    color: #251600;
    letter-spacing: 5px;

    a {
      color: #251600;
    }
  }
}

main {
  width: 1440px;
  padding: 10px;
  height: 600px;
  background: rgb(255, 255, 255, .5);
  display: flex;
  gap: 50px;

  .content {
    width: 70%;
    backdrop-filter: blur(15px);
    padding: 20px;
    cursor: default;

    .title {
      font-size: 28pt;
      line-height: 200%;
      border-bottom: 1px solid #251600;
    }

    .info {
      font-size: 14pt;
      line-height: 180%;
    }
  }
}
</style>