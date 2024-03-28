<template>
    <div class="shorten-link">
        <span class="original-link">{{ shortLink.original_link }}</span>
        <section class="short">
            <span class="short-link">{{ shortLink.full_shortlink }}</span>
            

            <button v-if="copiedText" class="copiedText">Copied!</button>
            <button v-else @click="clickCopyLink"  >Copy</button>
        </section>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { toRaw } from 'vue';

const {shortLink} = defineProps(['shortLink']);
const copiedText = ref(false);

    console.log('shortLink no UrlShort.vue', toRaw(shortLink))

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
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    margin: 20px 0;
    border-radius: 15px;

}
.original-link{
    font-size: 1.4rem;
}
.short {
    display: flex;
    gap: 1rem;
    align-items: center;
}
.short-link{
    color: var(--Cyan);
    font-size: 1.4rem;

}
.copiedText {
    background-color: var(--veryDarkViolet);
}
button {
    border-radius: 5px;
}
</style>