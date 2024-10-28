<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useListStore } from "@/stores/list";


const listStore = useListStore()


const { list, loading, error } = listStore



</script>

<template>
  <footer>
    <div class="footerList">
      <ul>
        <li v-for="item in list" :key="item.id">
          <h1 class="title">{{ item.title }}</h1>
          <div v-for="(smallList, index) in item.itemlist" :key="index">
            <RouterLink :to="{ name: smallList.typeEN, params: { id: smallList.url || '' } }">{{ smallList.type }}
            </RouterLink>
          </div>
        </li>

      </ul>
    </div>
    <div class="footerImg">
      <RouterLink to="/">
        <img src="/src/assets/image/logo.png" alt="">
      </RouterLink>
      <img src="https://qr-official.line.me/gs/M_672dvjsp_GW.png?oat_content=qr" alt="">
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 300px;
  background: url('/src/assets/image/footerBGI.png');
  backdrop-filter: blur(10px);

  display: flex;
  justify-content: center;
  padding: 50px 0;

  .footerList {
    width: 50%;

    ul {
      display: flex;
      justify-content: space-between;
      height: 100%;

      li {
        height: 100%;
        color: #6b5e4a;
        letter-spacing: 3px;
        width: 18%;

        h1 {
          padding: 5px;
          font-size: 16pt;
          font-weight: 600;
          border-bottom: 3px solid rgb(37, 22, 0, .5);
          text-align: center;
        }

        div {
          padding: 10px;
          text-align: center;
          position: relative;

          &:hover {
            &::after {
              animation: scroll .5s ease-in-out forwards;
            }
          }

          a {
            color: #1b1000;
            font-size: 12pt;
          }

          &::after {
            position: absolute;
            content: "";
            max-width: 0;
            width: 80%;
            height: 1px;
            background: #6b5e4a;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
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

  .footerImg {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      width: 150px;
    }
  }
}
</style>