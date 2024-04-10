<template>
  <div class="page__wrapper" >
    <div @change="changePage" class="page" v-for="pageNumber in totalPages" :key="pageNumber" :class="{'current-page': modelValue === pageNumber}" @click="changePage">
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pages",
  props: {
    totalPages: Number,
    modelValue: Number
  },
  methods: {
    changePage(event) {
        this.$emit("update:modelValue", Number(event.target.innerText))
    },
}
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid black;
  background-color: rgb(105, 104, 104);
}
</style>
