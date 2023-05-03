<template>
    <main>
        <div class="sign-in">
            <div class="sign-in-logo">
                <img src="/image/logo-black.svg" alt="Rland" />
            </div>
            <form class="sign-in-form">
                <div class="sign-in-form-input">
                    <div>
                        <input type="text" class="input-bottom-line" placeholder="아이디" required />
                    </div>
                    <div>
                        <input type="password" class="input-bottom-line" placeholder="비밀번호" required />
                    </div>
                </div>

                <div class="sign-in-form-button">
                    <div class="wd-100">
                        <input type="submit" value="로그인" class="btn btn-default" />
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