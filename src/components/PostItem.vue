<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btn">
      <my-button @click="$router.push(`/posts/${post.id}`)">Перейти</my-button>
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid black;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post__btn {
  display: flex;
}
</style>
