<template>
    <nav class="nav_container">
        <a href="/" class="img_logo"><img src="/src/assets/images/logo.svg" alt="shortly image logo"></a>
        <section class="menu">
            <MenuLinks />
            <div class="divider"></div>
            <BtnSection />
        </section>
        <section class="toogler_menu" @click="toogleMenu">
            <i class="fa-sharp fa-solid fa-bars fa-2xl"></i>
            <!-- <i class="fa-solid fa-right-to-bracket fa-2xl"v-else></i> -->
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

.fa-solid {
    color: var(--gray);
    display: none;
}

.toogler_menu {
    z-index: 3;
}

@media (max-width: 768px) {
    nav {
        display: flex;
        align-items: flex-start;
    }

    .menu {
        display: none;
        background-color: var(--darkViolet);
        height: 62vh;
        margin: 50px -22px 0 -110px;
        border-radius: 20px;
    }

    .fa-solid {
        display: block;
    }

    .show {
        display: block;
    }

    .divider {
        position: relative;
        top: 25px;
        border: 1px solid var(--gray);
        width: 90%;
        margin: 0 1rem;
    }
    btnsection {
        width: 80%;
    }
}
</style>