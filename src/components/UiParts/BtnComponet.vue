<template>
    <button 
    :class="[round && 'round', transparent && 'transparent']" 
    :disabled="isload && 'disabled'">

        <span v-if="isload">
            <i class="fa-solid fa-circle-notch fa-rotate-90"></i>
        </span>
        <span v-else>
            {{ text }}
        </span>
    </button>
</template>
<script setup>
const { text, transparent, isload, round } = defineProps([
    'text',
    'transparent',
    'isload',
    'round',
]);
</script>
<style scoped>
.transparent {
    background-color: transparent;
    color: var(--grayishViolet);
}

.round {
    border-radius: 35px;
}
.fa-circle-notch{
    
    color: var(--veryDarkBlue);
}
  

@media (max-width: 768px) {
    .round{
        width: 85%;
        padding: 13px;
    }
    .transparent{
        background-color: var(--darkViolet);
        color: var(--white);
    }
      
}
</style>