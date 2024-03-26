<template>
    <nav class="nav_container">
        <a href="/" class="img_logo"><img src="/src/assets/images/logo.svg" alt="shortly image logo"></a>
        <section class="menu">
            <MenuLinks />
            <div class="divider"></div><!-- This div element represents a horizontal divider in the header component. -->
            <BtnSection />
        </section>

        <section class="toogler_menu" @click="toggleMenu">
            <i class="fa-sharp fa-solid fa-bars fa-2xl"></i>
        </section>
    </nav>
</template>

<script setup>
import MenuLinks from './NavBar/MenuLinks.vue';
import BtnSection from './NavBar/BtnSection.vue';


/**Toggles the visibility of the menu navigation. */
const toggleMenu = () => {
    const menuNav = document.querySelector('.menu');
    menuNav.classList.toggle('show');
}
</script>

<style scoped>
/* Your component's CSS styles go here */
nav {
    display: flex;
    padding: 35px 100px;
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
    position: relative;
    z-index: 1;
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

    .menu.show {
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