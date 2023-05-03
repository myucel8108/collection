<script setup>
import Header from './inc/Header.vue';
import Footer from './inc/Footer.vue';
import Aside from './inc/aside.vue'

</script>
<template>
    <Header></Header>
    <Aside></Aside>
    <router-view/>
    <Footer></Footer>
    <div>



    </div>
</template>
<style>
    main{
        background-color: var(--color-bg-2);
    }
</style>