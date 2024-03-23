<template>
    <nav class="nav_container">
        <a href="/" class="img_logo"><img src="/src/assets/images/logo.svg" alt="shortly image logo"></a>
        <section class="menu">
            <MenuLinks/>
        </section>

    </nav>
</template>

<script setup>
import MenuLinks from './NavBar/MenuLinks.vue';
</script>

<style scoped>
/* Your component's CSS styles go here */
nav {
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.menu {
    width: 100%;
    justify-content: space-between;
}

.img_logo {
    width: 100px;
    position: relative;
}
</style>