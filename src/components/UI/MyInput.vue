<template>
  <input type="text" class="input" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px 15px;
}
</style>
