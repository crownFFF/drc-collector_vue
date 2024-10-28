<script setup>
import Banner from '@/components/banner.vue'
import AsideList from '@/components/asideList.vue'
import { ref, onMounted } from 'vue'

const post = ref([])
const loading = ref(false)
const error = ref(null)

function stripHtmlTags(content) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  return tempDiv.textContent || tempDiv.innerText || '';
}

const fetchPost = async () => {
  loading.value = true
  error.value = null
  try {
    const result = await fetch('http://35.233.213.136//wp-json/wp/v2/posts')
    post.value = await result.json()
    post.value.forEach(item => {
      // 日期
      const date = new Date(item.date)
      const localDate = date.toLocaleString()
      item.date = localDate
      // 內文
      const cleanContent = stripHtmlTags(item.excerpt.rendered);
      item.excerpt.rendered = cleanContent.replace(/\[.*?\]/g, '...');
    })
  } catch (error) {
    error.value = "Fetch list failed"
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPost()
})

</script>

<template>
  <Banner>
    <template #bannerTitle>
      文章-郵集 | 文章-閱讀
    </template>
  </Banner>
  <main>
    <AsideList></AsideList>
    <div class="content">
      <div v-for="item in post " :key="item.id" class="list">
        <p class="title">{{ item.title.rendered }}<sup>{{ item.date }}</sup></p>
        <p class="info">{{ item.excerpt.rendered }}</p>
        <a :href="`${item.link}`" target="_blank">了解更多</a>
      </div>
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

  .content {
    width: 70%;
    backdrop-filter: blur(10px);
    padding: 20px 0;

    .list {
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, .1);
      padding: 10px;
      border-bottom: 1px solid #251600;
      transition: all .3s;
      &:hover{
        background: rgba(0, 0, 0, .2);
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

      .info {
        line-height: 150%;
        width: 40%;
      }

      a {
        align-self: flex-end;
        padding: 10px;
        color: #ffffff;
        transition: all .5s;

        &:hover {
          color: #251600;
        }
      }
    }
  }
}
</style>