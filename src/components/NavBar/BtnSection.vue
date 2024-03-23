<template>
    <section class=" sing-in">
        <BtnComponet text="Login" :transparent="true" />
        <BtnComponet text="Sign Up" :roud="true" />
    </section>
</template>
<script setup>
import BtnComponet from '../UiParts/BtnComponet.vue';
</script>
<style scoped>
    .sing-in {
        position: relative;
        display: flex;
        gap: 1px;
    }
</style>