<template>
    <div class="form-container">
        <form action="">
            <input type="text" placeholder="Shorten a link here..." />
            <span class="msg-error"> Pleasse add a link</span>
            <BtnComponet text="Shorten It!" 

            />
        </form>
        <section class="url-short-list">
            

        </section>
    </div>
</template>

<script setup>
import { BtnComponet } from './UiParts';
</script>