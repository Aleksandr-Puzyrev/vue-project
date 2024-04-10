<template>
    <div class="my-navbar">
        <div @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btn">
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px;">О нас</my-button>
            <my-button @click="$router.push('/store')" style="margin-left: 20px;">Store</my-button>
            <my-button @click="$router.push('/composition')" style="margin-left: 20px;">Composition</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .my-navbar {
        display: flex;
        height: 50px;
        background-color: rgb(169, 168, 168);
        box-shadow: 2px 2px 4px rgb(70, 70, 70);
        align-items: center;
        padding: 0 15px;
    }
    .navbar__btn {
        margin-left: auto;

    }
</style>