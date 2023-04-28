<script setup>
// export default{
//     props:['data']
// }
    let props = defineProps({
        list:[],
        title:""
    });
</script>

<template>
    <section>
        <h1>{{props.title}}</h1>
        <ul>
            <li v-for="m in props.list">{{ m.name }}</li>
        </ul>
    </section>
</template>

<style scoped>
    section{
        border: 1px solid gray;
        padding: 20px;
    }
</style>