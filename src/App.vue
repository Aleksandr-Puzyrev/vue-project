<template>
  <pat-nav></pat-nav>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import PatNav from '@/components/PatNav.vue';
export default {
  components: {
    PatNav
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 25px;
}
</style>
