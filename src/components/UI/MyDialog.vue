<template>
    <div class="dialogModal" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialogContainer">
            <slot></slot>
        </div>
    </div>
</template>
  
  <script>
import toggleMixin from '@/mixins/toggleMixin';

  export default {
    name: "my-dialog",
    mixins: [toggleMixin]
  };
  </script>
  
  <style scoped>
    .dialogModal {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;  
        position: fixed;
    }

    .dialogContainer {
        margin: auto;
        min-height: 50px;
        min-width: 300px;
        border: 12px;
        padding: 20px;
        background-color: white;
        
    }
  </style>