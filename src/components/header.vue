<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router';
import { useListStore } from "@/stores/list";


const listStore = useListStore()


const { list, loading, error } = listStore


</script>

<template>
  <header>
    <section>
      <RouterLink to="/" class="Logo"><img src="/src/assets/image/logo.png" alt=""></RouterLink>
      <div class="navigation__gap"></div>
      <nav>
        <ul>
          <li v-for="item in list" :key="item.id">
            <h3>{{ item.title }}</h3>
            <div class="navList">
              <RouterLink v-for="(smallList, index) in item.itemlist" :key="index"
                :to="{ name: smallList.typeEN, params: {id:smallList.url||''} }">
                {{ smallList.type }}
              </RouterLink>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<style scoped lang="scss">
header {
  background: rgb(255, 255, 255, .2);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 10;

  section {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .Logo {
      height: 100%;
      display: flex;
      align-items: center;

      img {
        height: 60%;
      }
    }

    .navigation__gap {
      flex: 1 0 auto;
    }

    nav {
      width: 60%;
      flex-direction: column-reverse;

      ul {
        height: 100%;
        display: flex;
        align-items: center;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgb(255, 255, 255, .8);
          width: 100%;
          height: 100%;
          font-size: 14pt;
          color: #251600;
          cursor: pointer;
          position: relative;

          @keyframes scroll {
            0% {
              max-height: 0;
            }

            100% {
              max-height: 1000px;
            }
          }

          &:hover {
            div {
              animation: scroll 1.5s ease-in-out forwards;
            }
          }

          >div {
            width: 100%;
            max-height: 0;
            overflow: hidden;
            position: absolute;
            top: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;



            a {
              background: #fff;
              padding: 20px 0;
              font-size: 13pt;
              transition: .3s all;
              color: #7a5c40;

              &:hover {
                background: rgb(255, 255, 255, .65);
              }
            }


          }
        }
      }
    }
  }
}
</style>
