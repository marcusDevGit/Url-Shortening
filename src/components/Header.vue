<template>
    <nav class="nav_container">
        <a href="/" class="img_logo"><img src="/src/assets/images/logo.svg" alt="shortly image logo"></a>
        <section class="menu">
            <MenuLinks/>
            <BtnSection/>
        </section>
        <section class="toogler_menu" @click="toogleMenu">  
            <i class="fa-solid fa-bars" v-if="!menuState"></i>
            <i class="fa-solid fa-right-to-bracket"v-else></i>
        </section>

    </nav>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import MenuLinks from './NavBar/MenuLinks.vue';
import BtnSection from './NavBar/BtnSection.vue';

const menuState = ref(false);

const toogleMenu = () => {
    console.log('toogle menu foi chamando');
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

@media (max-width: 768px) {
    .menu{
        display: none;
        position: absolute;
        background-color: var(--darkviolet);
        height: 80vh;
    }
    .pi{
        display: block;
    }
    .show{
        display: block;
    }
}
</style>