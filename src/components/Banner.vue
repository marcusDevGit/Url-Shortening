<template>
    <div class="banner">
        <section class="tittle">
            <h1>More than just shorter links</h1>
            <p>
                Build your brand’s recognition and get detailed insights on how your
                links are performing.
            </p>
            <BtnComponet text="Get Started" :round="true" />
        </section>
        <section class="img-banner">
            <img src="/src/assets/images/illustration-working.svg" alt="image illustration working shortly">
        </section>
    </div>
</template>

<script setup>
import BtnComponet from './UiParts/BtnComponet.vue';
</script>

<style scoped>
.banner{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
}
.tittle{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
}
</style>