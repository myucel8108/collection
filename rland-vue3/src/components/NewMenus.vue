<script setup>

// export default{ 과거의 방식
//     props:['data']

// }
    let props= defineProps({
        list:[]

    });
</script>
<template>
    
    <section>
        <h1></h1>
        <ul>
            <li v-for="m in props.list">{{m.name}}</li>
        </ul>

    </section>

</template>

<style scoped>
section{
    border: 10px solid gray;
    padding: 20px;
}
</style>