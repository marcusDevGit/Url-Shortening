<template>
    <div class="shorten-link">
        <span class="original-link"></span>
        <section class="short">
            <span class="short-link"></span>

            <button v-if="copiedText" class="copiedText">Copied</button>
            <button v-else @click="clickCopyLink" >Copy</button>
        </section>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const shortLink = defineProps(['shortLink']);
const copiedText = ref(false);

const clickCopyLink = () => {
    navigator.clipboard.writeText(shortLink.full_shortlink);
    copiedText.value = true;

    setTimeout(() => {
        copiedText.value = false;
    }, 20000);
}
</script>

<style scoped>
.shorten-link{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 20px 0;
    border-radius: 15px;

}
.original-link{
    font-size: 1.5rem;
}
.short {
    display: flex;
    gap: 1rem;
    align-items: center;
}
.short-link{
    color: var(--veryDarkBlue);
}
.copiedText {
    background-color: var(--veryDarkViolet);
}
</style>