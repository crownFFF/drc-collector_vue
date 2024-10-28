<script setup>
</script>

<template>
    <section class="bannerArea">
      <div class="BannerTitle">
        <RouterLink to="/">首頁</RouterLink> | 
        <slot name="bannerTitle">
      </slot>
      </div>
    </section>
</template>

<style scoped lang="scss">
.bannerArea {
  padding-top: 80px;
  width: 100%;
  height: 500px;
  background: url('/src/assets/image/stamp013-1.png') no-repeat,rgb(255, 255, 255,.5);
  backdrop-filter: blur(20px);
  background-size: contain;
  background-position: center;
  position: relative;
  .BannerTitle{
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
    a{
      color: #251600;
    }
  }
}

</style>