import { defineStore } from "pinia";
import { computed, ref, onMounted } from "vue";
import axios from "axios";

export const useListStore = defineStore(
  "listStore",
  () => {
    const smallList = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchList = async () => {
      loading.value = true;
      error.value = null;

      try {
        const result = await axios.post(
          "https://drc-collector.com/api/exhibits-list.php"
        );
        smallList.value = result.data.map((item) => ({
          id: item.id,
          type: item.type || "",
          url: `${item.typeEN}` || "",
          typeEN: `exhibition`,
        }));
        smallList.value.push({
          id: `${smallList.value.length + 1}`,
          type: "郵票",
          url: "stamp",
          typeEN: `exhibition`,
        });
      } catch (error) {
        error.value = "Fetch list failed";
      } finally {
        loading.value = false;
      }
    };

    const list = computed(() => [
      {
        id: 1,
        title: "關於我們",
        itemlist: [
          {
            type: "建立-故事",
            typeEN: "story",
          },
          {
            type: "關於網站",
            typeEN: "web",
          },
        ],
      },
      {
        id: 2,
        title: "文章 | 郵集",
        itemlist: [
          {
            type: "文章-閱讀",
            typeEN: "article",
          },
        ],
      },
      {
        id: 3,
        title: "展品",
        itemlist: smallList.value,
      },
      {
        id: 4,
        title: "商店",
        itemlist: [
          {
            type: "Shopee",
            typeEN: "store",
            url:'shopee'
          },
          {
            type: "Ebay",
            typeEN: "store",
            url:'ebay'
          },
        ],
      },
      {
        id: 5,
        title: "聯絡",
        itemlist: [
          {
            type: "E-mail",
            typeEN: "contact",
            url:'email'
          },
          {
            type: "LINE",
            typeEN: "contact",
            url:'line'
          },
        ],
      },
    ]);

    onMounted(() => {
      fetchList();
    });

    return {
      list,
      smallList,
      loading,
      error,
      fetchList,
    };
  },
  {
    persist: true,
  }
);
