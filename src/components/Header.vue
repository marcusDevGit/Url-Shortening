<template>
    <nav class="nav_container">
        <a href="/" class="img_logo"><img src="/src/assets/images/logo.svg" alt="shortly image logo"></a>
        <section class="menu">
            <MenuLinks/>
            <BtnSection/>
        </section>
        <section class="toogle_menu" @click="toogleMenu">  
            <i class="pi pi-barras" v-if="!menuState"></i>
            <i class="pi pi-arrow-right" v-else></i>
        </section>

    </nav>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import MenuLinks from './NavBar/MenuLinks.vue';
import BtnSection from './NavBar/BtnSection.vue';

const menuState = ref(false);

const toogleMenu = () => {
    menuState.value = !menuState.value;
    const menuNav = document.querySelector('.menu');
    menuNav.classList.toggle('show');
}
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
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.img_logo {
    position: relative;
}
.pi{
    color: var(--gray);
    display: none;
}
.toogle_menu {
    z-index: 3;
}
</style>