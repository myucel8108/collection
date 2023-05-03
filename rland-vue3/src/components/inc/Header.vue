
<template>
    <!-- ----------------------헤더---------------------------- -->
    <header class="header-container">
        <h1 class="d-none">알랜드</h1>
        <div>
            <a href="index.html" title="index페이지로 이동합니다.">
                <img src="/image/logo.svg" />
            </a>
            <a class="icon icon-menu">메뉴</a>
        </div>
        <nav class="nav-wrap">
            <h1 class="d-none">네비게이션 목록</h1>
            <ul>
                <li>
                    <a href="index.html" class="icon icon-home" title="index페이지로 이동합니다.">홈</a>
                </li>
                <li>
                    <router-link to="/login" class="icon icon-sign-on" title="로그인">로그인</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>