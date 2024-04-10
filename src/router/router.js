import { createMemoryHistory, createRouter } from "vue-router";

import About from "@/pages/About.vue";
import PostsPage from "@/pages/PostsPage.vue";
import Main from '@/pages/Main.vue';
import PostIdPage from '@/pages/PostIdPage.vue';
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue";
import PostsPageComposition from "@/pages/PostsPageComposition.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/about", component: About },
  { path: "/posts", component: PostsPage },
  { path: "/posts/:id", component: PostIdPage },
  { path: "/store", component: PostsPageWithStore },
  { path: "/composition", component: PostsPageComposition },
];

const router = createRouter({
  routes,
  history: createMemoryHistory(),
});

export default router;
