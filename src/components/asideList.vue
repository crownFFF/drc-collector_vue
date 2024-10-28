<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useListStore } from "@/stores/list";

const listStore = useListStore()


const { list, loading, error } = listStore
</script>

<template>
  <aside>
    <div class="list" v-for="item in list" :key="item.id">
      <p class="title">{{ item.title }}</p>
      <ul class="content">
        <li v-for="(smallList, index) in item.itemlist" :key="index">
          <RouterLink :to="{ name: smallList.typeEN, params: {id:smallList.url||''} }">{{ smallList.type }}</RouterLink>
        </li>
      </ul>
    </div>

  </aside>
</template>

<style scoped lang="scss">
aside {
  position: sticky;
  width: 300px;
  top: 100px;
  margin-top: 20px;
  align-self: flex-start;
  outline: 1px solid #fff;

  .list {
    &:hover {
      .content {
        animation: scroll 1.5s ease-in-out forwards;
      }
    }

    .title {
      width: 270px;
      font-size: 16pt;
      background: rgba(37, 22, 0, 0.5);
      color: #fff;
      padding: 15px;
      cursor: default;
    }

    .content {
      width: 100%;
      overflow: hidden;
      max-height: 0;

      li {
        background: #fff;
        font-size: 12pt;
        cursor: pointer;
        
        a {
          padding: 15px;
          display: block;
          color: #251600;
          height: 100%;
        }

        &:hover {
          background: rgb(255, 255, 255, .8);
        }
      }
    }
  }
}

@keyframes scroll {
  0% {
    max-height: 0;
  }

  100% {
    max-height: 1000px;
  }
}
</style>