<template>
  <div>
    <h2>Страница постов</h2>
    <my-input v-model="searchQuery" v-focus></my-input>
    <div class="app__btns">
      <my-button>Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form/>
    </my-dialog>
    <post-list
      v-if="!isPostLoading"
      :posts="sortedAndSearcedPosts"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import { usePosts } from "@/hooks/usePosts";
import { useSortedPosts } from "@/hooks/useSortedPosts";
import { useSortedAndSearcedPosts} from "@/hooks/useSortedAndSearchPosts";
export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearcedPosts } = useSortedAndSearcedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearcedPosts,
    };

    
  },
};
</script>

<style>
.app__btns {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
.post-list-enter-active {
  transition: all 0.3s ease-out;
}

.post-list-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.post-list-enter-from,
.post-list-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
