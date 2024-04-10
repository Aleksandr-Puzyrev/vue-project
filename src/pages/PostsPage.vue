<template>
    <div>
      <h2>Страница постов</h2>
      <my-input v-model="searchQuery" v-focus></my-input>
      <div class="app__btns">
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>
      <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost" />
      </my-dialog>
      <post-list
        v-if="!isPostLoading"
        :posts="sortedAndSearcedPosts"
        @remove="removePost"
      />
      <div v-else>Идет загрузка...</div>
      <!-- <my-pages :totalPages="totalPages" v-model="page"></my-pages> -->
      <div class="observer" v-intersection="loadMorePosts"></div>
    </div>
  </template>
  
  <script>
  import PostList from "@/components/PostList.vue";
  import PostForm from "@/components/PostForm.vue";
  import axios from "axios";
  export default {
    components: {
      PostList,
      PostForm,
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostLoading: false,
        selectedSort: "",
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ],
      };
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
      },
      removePost(post) {
        this.posts = this.posts.filter((p) => p.id !== post.id);
      },
      showDialog() {
        this.dialogVisible = true;
      },
      async fetchPosts() {
        try {
          this.isPostLoading = true;
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = response.data;
        } catch (e) {
          alert("ошибка");
        } finally {
          this.isPostLoading = false;
        }
      },
      async loadMorePosts() {
        try {
          this.page += 1
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = [...this.posts, ...response.data];
        } catch (e) {
          alert("ошибка");
        }
      },
    },
    mounted() {
      this.fetchPosts();
      // const options = {
      //   rootMargin: "0px",
      //   threshold: 1.0,
      // };
  
      // let callback = (entries, observer) => {
      //   if (entries[0].isIntersecting && this.page < this.totalPages) {
      //     this.loadMorePosts()
      //   }
      // };
  
  
      // const observer = new IntersectionObserver(callback, options);
      // observer.observe(this.$refs.observer);
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) =>
          post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        );
      },
      sortedAndSearcedPosts() {
        return this.sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    watch: {
      // page() {
      //   this.fetchPosts()
      // }
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
  