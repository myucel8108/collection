<script setup>
import Header from '../../inc/Header.vue';
import Aside from './aside.vue';
import Footer from '../../inc/Footer.vue';
</script>
<template>
    <Header></Header>
    <Aside></Aside>
    <router-view></router-view>
    <Footer></Footer>
</template>