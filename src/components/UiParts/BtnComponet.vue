<template>
    <button :class="[roud && 'roud', transparent && 'transparent']" :disabled="isload && 'disabled'">

        <span v-if="isload">

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
</style>