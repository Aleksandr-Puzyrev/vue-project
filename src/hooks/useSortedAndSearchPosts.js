import { ref, computed } from "vue";

export function useSortedAndSearcedPosts(sortedPosts) {
  const searchQuery = ref("");
  const sortedAndSearcedPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
  })

  return {
    searchQuery, sortedAndSearcedPosts
}
}
