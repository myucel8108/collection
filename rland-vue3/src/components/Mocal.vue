<script setup>
    import { ref } from 'vue';
    let props = defineProps({
        title:"",
        show:false,
        type:"conform"
    });

    function cancelHandler(){

    }

</script>

<template>
    <div class="screen" :class="{'d-none':!show}">
        <section>
            <h1>{{ title }}</h1>

            <div class="content">
                <slot></slot>
            </div>

            <div class="commands">
                <button @click="$event=>$emit('ok','Appvue로 전달이 되지롱')">OK</button>
                <button @click="cancelHandler" v-show="type=='conform'">Cancel</button>
            </div>

        </section>
    </div>
</template>
<style scoped>
.screen{
    background-color: rgba(00, 0, 0, 0.7);
    /* opacity: 0.8;; */
    left:0;
    top:0;

    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}
section{
    background-color: white;
    display: inline-block;
}

.screen>*{
    opacity: 1;
}
section .content{
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 10px 20px;
}

section>h1{
    font-size:14px;
    padding: 0px 10px;
}
section>.commands{
    padding: 10px 10px;
    align-self: center;
}

    .d-none{
        display: none !important;
    }
</style>