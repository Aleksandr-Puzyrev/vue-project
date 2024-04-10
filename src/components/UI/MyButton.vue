<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  border: 1px solid black;
  background: none;
  padding: 10px 15px;
}
</style>
