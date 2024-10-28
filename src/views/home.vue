<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, Pagination, Navigation } from 'swiper/modules'
import axios from 'axios'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = ref([])
const post = ref([])
const loading = ref(false)
const error = ref(null)
const modules = [Parallax, Pagination, Navigation]

const fetchList = async () => {
  loading.value = true
  error.value = null

  try {
    const result = await axios.post('https://drc-collector.com/api/exhibits-list.php')
    slides.value = result.data.map(item => ({
      id: item.id,
      title: item.type || "",
      subtitle: item.typeEN || "",
      url: `exhibition`,
    }))

  } catch (error) {
    error.value = "Fetch list failed"
  } finally {
    loading.value = false
  }
}

/* const fetchPost = async () => {
  loading.value = true
  error.value = null
  try {
    const result = await fetch('http://35.233.213.136//wp-json/wp/v2/posts')
    post.value = await result.json()
    console.log(post.value)

  } catch (error) {
    error.value = "Fetch list failed"
  } finally {
    loading.value = false
  }
}*/

onMounted(() => {
  fetchList()
  // fetchPost()
})


</script>

<template>
  <section class="bannerArea"></section>
  
  <section class="introduceArea">
    <h1 class="title">介紹 | introduce</h1>
    <div class="content">
      <h2>
        透過這些小小的紙片，我們能夠窺探世界的多樣風情，感受人類智慧與創造力的奇蹟。
        <br />探索我們的信封收藏網站，這裡匯聚了所有熱愛郵政藝術和文化探索的愛好者。我們以信封為藍本，展示和探索著郵政歷史的深遠魅力。<br />每一封信封都是一幅獨特的藝術品，承載著時代的印記和文化的精髓。<br />在這個充滿文學和藝術氛圍的平台上，您將發現首日封的詩意韻味、郵政史信封的故事性深度，以及航空郵件信封所帶來的空中漫遊之感。我們通過精緻的圖像展示和詳盡的歷史背景介紹，帶您走進一個個富有詩意的郵政時光隧道。<br />無論您是追求藝術美感還是愛好歷史故事，我們的網站都致力於為您提供深入的文化體驗和啟發。
      </h2>
      <img src="/src/assets/image/stamp013-1.png" alt="">
    </div>
  </section>
  <section class="aboutArea">
    <h1 class="title">關於我們 | about us</h1>
    <div class="content">
      <h2>
        這裡是一位酷愛集郵的老教授。集郵人生的收藏天地。<br />
        用另一個角度看世界，或許發現嶄新創見~~<br /><br />
        航天集郵的因緣：<br />
        我從小集郵·而收集航天郵集的開始時間是在1980年初，當時正在美國南加州大學攻讀博士學位，那一年美國太空總署發射了第一艘太空梭，同時我的論文指導老師宴德福教授幫美國政府分析，從阿波羅計畫攜帶回來的月球岩石中的碳氫化合物成分。每當我在實驗室中面對那一顆顆黑色的小岩石時，都會覺得人類要把它們從遙遠的月球，帶回地球是那么的不容易，也是許多科學家和工程師多年來努力的結果。從那時開始,透過洛杉磯當地的新聞媒體(如電視新聞和學校圖書館的報章雜誌)了解到了美國和俄羅斯發展太空火箭和太空船的歷史與過程，也開啟我的航天集郵生涯。<br /><br />
        張有義<br><br>
        <RouterLink to="web">了解更多</RouterLink>
      </h2>
      <img src="/src/assets/image/stamp001-2.png" alt="">

    </div>
  </section>
  <section class="severArea">
    <h1 class="title">展覽介紹 | Exhibition</h1>
    <div class="content">

      <swiper :speed="600" :parallax="true" :pagination="{
        clickable: true
      }" :navigation="false" :modules="modules" class="listSwiper">

        <template #container-start>
          <div class="swiper_bg" data-swiper-parallax="-23%"></div>
        </template>

        <swiper-slide v-for="item in slides" :key="item.id" class="swiper_slides">
          <RouterLink :to="{name:item.url,params:{id:item.subtitle}}">
            <h1 class="listTitle">{{ item.title }}</h1>
            <h1 class="subTitle">{{ item.subtitle }}</h1>
          </RouterLink>
        </swiper-slide>

        <swiper-slide class="swiper_slides">
          <RouterLink :to="{name:'exhibition',params:{id:'stamp'}}">
            <h1 class="listTitle">郵票</h1>
            <h1 class="subTitle">stamp</h1>
          </RouterLink>
        </swiper-slide>

      </swiper>
    </div>
  </section>

</template>

<style scoped lang="scss">
.title {
  font-size: 36pt;
  color: #251600;
  letter-spacing: 10px;
  position: relative;
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    width: 45px;
    height: 5px;
    background: rgb(37, 22, 0, .5);
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
  }
}

.bannerArea {
  width: 100%;
  height: 500px;
}

.introduceArea {
  width: 80%;
  padding: 50px 0;
  background: rgb(255, 255, 255, .8);
  backdrop-filter: blur(10px);
  align-self: start;
  text-align: center;

  .content {
    display: flex;
    height: 100%;

    h2 {
      width: 50%;
      padding: 50px;
      line-height: 200%;
      font-size: 13.5pt;
      text-align: left;
    }

    img {
      flex-grow: 1;
      width: 50%;
      object-fit: contain;
    }
  }
}

.aboutArea {
  width: 80%;
  padding: 50px 10px;
  background: rgba(192, 192, 192, 0.8);
  backdrop-filter: blur(10px);
  align-self: flex-end;
  text-align: center;
  position: relative;
  top: -80px;

  .content {
    height: 100%;
    display: flex;
    flex-direction: row-reverse;

    h2 {
      width: 50%;
      padding: 50px;
      line-height: 200%;
      font-size: 13.5pt;
      text-align: left;

      a {
        background: transparent;
        color: #251600;
        width: 100%;
        padding: 10px;
        border: 2px solid rgb(37, 22, 0, .5);
        border-radius: 2px;
        transition: .2s all;

        &:hover {
          background: #251600;
          color: #fff;
        }
      }
    }

    img {
      flex-grow: 1;
      width: 30%;
      object-fit: contain;
    }
  }
}

.severArea {
  width: 100%;
  padding: 50px 0;
  align-self: flex-end;
  text-align: center;
  position: relative;
  background: rgb(255, 255, 255);
  margin-bottom: 100px;
  .title {
    margin-bottom: 50px;

  }

  .content {
    height: 500px;

    .listSwiper {
      width: 65%;
      height: 100%;
      position: relative;

      .swiper_bg {
        width: 150%;
        height: 100%;
        background: url('/src/assets/image/stamp002-2.png') no-repeat;
        background-size: cover;
        background-position: left -100px;
        position: absolute;
        z-index: -1;
      }

      .swiper_slides {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        a {
          padding: 20px 0;
          transition: .5s all;

          &:hover {
            background: rgb(255, 255, 255, .5);
            backdrop-filter: blur(10px);

            h1 {
              &::after {
                animation: scroll 1.5s ease-in-out forwards;
              }
            }
          }

          h1 {
            width: 70%;
            margin: 0 auto;
            color: #251600;
            text-align: left;
            position: relative;
            letter-spacing: 5px;

            &.listTitle {
              font-size: 36pt;

              &::after {
                width: 50px;
              }
            }

            &.subTitle {
              font-size: 28pt;
              margin-top: 20px;

              &::after {
                width: 100px;
              }
            }

            &::after {
              position: absolute;
              content: "";
              max-width: 0;
              height: 5px;
              background: rgb(37, 22, 0, .7);
              bottom: -10px;
              left: 0;
            }
          }
        }

        @keyframes scroll {
          0% {
            max-width: 0;
          }

          100% {
            max-width: 100%;
          }
        }
      }
    }

  }
}

</style>
