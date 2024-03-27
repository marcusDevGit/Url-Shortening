<template>
    <div class="form-container">
        <form>
            <section class="input-grup">
                <input type="text" placeholder="Shorten a link here..." 
                v-model="formStatus.url"
                @keyup.enter="clickShortens"
                :class="formStatus.error && 'error'"
                />
                <span v-if="formStatus.error" class="msg-error"> Pleasse add a link</span>
                <BtnComponent text="Shorten It!" 
                @click="clickShortens"
                :isload="formStatus.isload"/>

            </section>
        </form>
        <section class="url-short-list" v-if="shortenedUrl > 0">
            <UrlShort v-for="(shortLink, index) in shortenedUrl" 
            :key="index"
            :shortLink="shortLink"/>

        </section>
    </div>
</template>

<script setup>
import { BtnComponent, UrlShort } from './UiParts'
import FetchApi from '../components/Hooks/FetchApi';

const { formStatus, clickShortens, shortenedUrl, isload } = FetchApi();
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
 form{
    position: relative;
    padding: 60px 40px;
    background: url('/src/assets/images/bg-shorten-desktop.svg') no-repeat center/cover var(--veryDarkViolet);
    top: 100px;
    z-index: 1;
    margin: 0 auto;
    max-width: 1500px;
    width: 80%;
 }
 .input-grup{
    display: flex;
    position: relative;
    justify-content: center;
    gap: 2rem;
 }
 input {
    border: none;
    border-radius: 12px;
    width: 75%;
    font-size: 1.2rem;
    padding: 15px;
 }
 input:focus {
    outline: none;
 }
 button {
    font-size: 1.1rem;
 }
 .url-short-list {
    display: flex;
    top: 100px;
    width: 80%;
 }
    .error {
        border: 2px solid var(--red);
        color: var(--red);
    }
.msg-error {
    position: absolute;
    color: var(--red);
    font-style: italic;
    font-size: 1rem;
    position: absolute;
    bottom: -35px;
    left: 90px;
}
.error::placeholder {
    color: var(--red);
}
</style>