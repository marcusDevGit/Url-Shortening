<template>
    <div class="banner">
        <section class="tittle">
            <h1>More than just shorter links</h1>
            <p>
                Build your brand’s recognition and get detailed insights on how your
                links are performing.
            </p>
            <BtnComponent text="Get Started" :round="true" />
        </section>
        <section class="img-banner">
            <img src="/src/assets/images/illustration-working.svg" alt="image illustration working shortly">
        </section>
    </div>
</template>

<script setup>
import BtnComponent from './UiParts/BtnComponent.vue';
</script>

<style scoped>
.banner{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0 80px;
}
.tittle{
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
}
.tittle h1{
    font-size: 4.8rem;
    font-weight: bold;
    color: var(--veryDarkViolet);
}
.tittle p{
    font-size: 1.380rem;
    width:85% ;
    line-height:1.6 ;
    color: var(--grayishViolet);
    
}
.img-banner{
    width: 100%;
    position: relative;
    left: 150px;
    padding: 30px;
}
@media (max-width: 768px) {
    .banner{
        padding: 20px 0 0 0;
        position: absolute
    }
    .tittle{
        width: 80%;
        align-items: flex-start;
        text-align: left;
        padding: 10px 30px;
    }
    .tittle h1{
        font-size: 2.5rem;
    }
    .tittle p{
        width: 100%;
        font-size: 1rem;
    }
    .img-banner{
        left: 80px;
        padding: 0;
    }
}
</style>