<template>
    <section class=" sing-in">
        <BtnComponent text="Login" :transparent="true" />
        <BtnComponent text="Sign Up" :round="true" />
    </section>
</template>
<script setup>
import BtnComponent from '../UiParts/BtnComponent.vue';
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