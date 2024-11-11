<script setup>

import Banner from '@/components/banner.vue'
import AsideList from '@/components/asideList.vue'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from "vue-router";
import axios from 'axios'
import { useListStore } from "@/stores/list";

const route = useRoute()
const id = ref(route.params.id)
const listItem = ref([])
const listStore = useListStore()
const { list, loading, error } = listStore
const coverPage = ref(1)
const page = ref()
const load = ref(false)
const MoreBtn = ref(true)

const exhibition = list.filter(item => item.title === '展品')
let exhibitionList = exhibition[0].itemlist.filter(item => item.url === route.params.id)
id.value = exhibitionList[0]?.id || null

watch(() => route.params.id, (newVal, oldVal) => {
  exhibitionList = exhibition[0].itemlist.filter(item => item.url === newVal)
  id.value = exhibitionList[0]?.id || null
  coverList()
})

function stripHtmlTags(content) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  return tempDiv.textContent || tempDiv.innerText || '';
}
const fetchItems = async (isStamp) => {
  const url = isStamp ? 'http://localhost/api/exhibits-stamp.php' : 'http://localhost/api/exhibits-item.php';
  const dataKey = isStamp ? 'images/stamps' : 'images/envelopes';
  const pageParam = isStamp ? { page: coverPage.value } : { coverPage: coverPage.value };
  try {
    const result = await axios.post(url, {
      typeId: id.value,
      ...pageParam
    }, {
      headers: {
        contentType: 'application/json'
      }
    });

    const items = result.data.map(item => ({
      id: item.id,
      img: item.img ? `https://admin.drc-collector.com/${dataKey}/${item.img}` : "",
      type: isStamp ? item.remark || "" : stripHtmlTags(item.remark) || "",
      time: item.year || item.time,
      theme: isStamp ? "郵票" : item.theme
    }));

    if (coverPage.value === 1) {
      listItem.value = items;
    } else {
      listItem.value.push(...items);
    }

    MoreBtn.value = items.length >= 12;
  } catch (err) {
    error.value = "Fetch list failed";
  }
  coverPage.value++;
}
const loadingBtn = async () => {
  if (load.value) return;
  load.value = true;
  await fetchItems(route.params.id === 'stamp');
  load.value = false;
}
const coverList = async () => {
  coverPage.value = 1;
  await fetchItems(route.params.id === 'stamp');
}

onMounted(() => {
  coverList();
});


</script>

<template>
  <Banner>
    <template #bannerTitle>
      展品
    </template>
  </Banner>

  <main>
    <AsideList></AsideList>
    <div class="content">
      <div class="list" v-for="item in listItem" :key="item.id">
        <img :src="`${item.img}`" alt="">
        <div class="info">
          <p class="title">{{ item.theme }}<sup>{{ item.time }}</sup></p>
          <p class="remark">{{ item.type }}</p>
        </div>
      </div>
      <button @click="loadingBtn()" v-if="MoreBtn" class="moreBtn">更多</button>
    </div>
  </main>

</template>

<style scoped lang="scss">
main {
  width: 1440px;
  padding: 10px;
  min-height: 600px;
  background: rgb(255, 255, 255, .5);
  display: flex;
  gap: 50px;

  .content {
    width: 70%;
    backdrop-filter: blur(10px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    .list {
      display: flex;
      background: rgba(0, 0, 0, .1);
      padding: 10px;
      border-bottom: 1px solid #251600;
      transition: all .3s;
      gap: 30px;

      &:hover {
        background: rgba(0, 0, 0, .2);
      }

      img {
        width: 25%;
      }

      .title {
        font-size: 22pt;
        line-height: 150%;
        color: #251600;

        sup {
          font-size: 12pt;
          margin-left: 30px;
        }
      }

      .remark {
        line-height: 150%;
        word-break: break-all;
      }
    }
    .moreBtn{
      padding: 10px 0;
      background: rgb(255, 255, 255,.5);
      border: none;
      font-size: 12pt;
      color: #251600;
      cursor: pointer;
      transition: all .5s;
      &:hover{
        background: rgb(255, 255, 255);
      }
    }

  }
}
</style>