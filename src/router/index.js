import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Story from "../views/about/story.vue";
import Web from "../views/about/web.vue";
import Article from "../views/article/article.vue";
import Store from "../views/store/store.vue";
import Contact from "../views/contact/contact.vue";
import Exhibition from "../views/exhibition/exhibition.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/story/:id?",
      name: "story",
      component: Story,
    },
    {
      path: "/web/:id?",
      name: "web",
      component: Web,
    },
    {
      path: "/article/:id?",
      name: "article",
      component: Article,
    },
    {
      path: "/store/:id?",
      name: "store",
      component: Store,
    },
    {
      path: "/contact/:id?",
      name: "contact",
      component: Contact,
    },
    {
      path: "/exhibition/:id",
      name: "exhibition",
      component: Exhibition,
    },
  ],
  scrollBehavior(ot, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
