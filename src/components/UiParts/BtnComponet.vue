<template>
    <button :class="[roud && 'roud', transparent && 'transparent']" :disabled="isload && 'disabled'">

        <span v-if="isload">
            <i class="fa-solid fa-circle-notch fa-rotate-90"></i>
        </span>
        <span v-else>
            {{ text }}
        </span>
    </button>
</template>
<script setup>
const { text, transparent, isload, roud } = defineProps([
    'text',
    'transparent',
    'isload',
    'roud'
]);
</script>
<style scoped>
.transparent {
    background-color: transparent;
    color: var(--darkviolet);
}
.round {
    border-radius: 35px;
}
.fa-circle-notch{
    
    color: var(--veryDarkBlue);
}
</style>