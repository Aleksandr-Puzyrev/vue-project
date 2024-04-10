<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
      v-focus
      placeholder="Название"
      v-model="post.title"
    />
    <my-input
      placeholder="Описание"
      v-model="post.body"
    />
    <my-button style="align-self: flex-end; margin-top: 15px;" @click="createPost">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);

      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px 15px;
}
</style>
