<script setup>
import {reactive} from 'vue';
import {useRouter} from 'vue-router';
import {useUserDetailsStore} from './store/useUserDetailsStore.js';
let userDetails = useUserDetailsStore(); //피니아를 사용하는 방법
let router = useRouter();

let user= reactive({
    username: "",
    password:"",
    role:""
})

async function loginHandler(){

    let response= await fetch("http://localhost:8080/members/login",{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-type":"application/x-www-form-urlencoded"
        },
        body:`username=${user.username}&password=${user.password}`
    });
    let json = await response.json();

    //새롭게 데이터를 받아보자
    userDetails.username= json.result.userName;
    //userDetails.password= json.result.pwd;
    userDetails.email= json.result.email;
    console.log(userDetails.email);
    router.push("/index");
}
</script>


<template>
    <main>
        <div class="sign-in">
            <div class="sign-in-logo">
                <img src="/image/logo-black.svg" alt="Rland" />
            </div>
            <form class="sign-in-form"  enctype="application/x-www-form-urlencoded">
                <div class="sign-in-form-input">
                    <div>
                        <input type="text" class="input-bottom-line" placeholder="아이디" required  v-model="user.username"/>
                    </div>
                    <div>
                        <input type="password" class="input-bottom-line" placeholder="비밀번호" required v-model="user.password" />
                    </div>
                </div>

                <div class="sign-in-form-button">
                    <div class="wd-100">
                        <input type="submit" value="로그인" class="btn btn-default" @click.prevent = "loginHandler" />
                    </div>
                    <div class="font-14">또는</div>
                    <div class="wd-100">
                        <router-link to="" class="deco icon-logo-google btn btn-outline">구글로 로그인</router-link>
                    </div>
                </div>
            </form>
            <div class="sign-in-find-user font-14">
                <router-link to="/sign-up.html">회원가입</router-link> |
                <router-link to="">비밀번호 찾기</router-link>
            </div>
        </div>
    </main>
</template>
<style scoped>
@import url("/css/sign-in.css");
</style>