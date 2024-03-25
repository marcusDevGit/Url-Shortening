<template>
    <section class=" sing-in">
        <BtnComponet text="Login" :transparent="true" />
        <BtnComponet text="Sign Up" :round="true" />
    </section>
</template>
<script setup>
import BtnComponet from '../UiParts/BtnComponet.vue';
</script>
<style scoped>
    .sing-in {
        position: relative;
        display: flex;
        gap: 1rem;
    }
    @media (max-width: 768px) {
        .sing-in{
            top: 50px;
            flex-direction: column;
            align-items: center;;
        }

    }
</style>