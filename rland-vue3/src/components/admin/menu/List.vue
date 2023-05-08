<script setup>
</script>
<template>
    <!-- ----------------------메인---------------------------- -->
    <main>
        <div class="tab-search-container">
            <div class="top-img-title">
                <h1>메뉴 관리</h1>
            </div>
            <!-- ----------------메뉴 탭 -->
            <div class="tab-search-wrap">
                <section class="tab-section">
                    <h1>탭 목록</h1>
                    <ul>
                        <li class="selected"><a href="">전체메뉴</a></li>
                        <li><a href="">커피</a></li>
                        <li><a href="">수제청</a></li>
                        <li><a href="">샌드위치</a></li>
                        <li><a href="">쿠키</a></li>
                    </ul>
                </section>
                <!-- --------------------------------------------------검색바 -->
                <section class="search-section">
                    <h1>검색</h1>
                    <form action="">
                        <input type="text" value="" name="search" />
                        <button type="submit" class="icon icon-search"></button>
                    </form>
                </section>
            </div>
        </div>
        <div class="flex-align">
            <!-- ----------------상품추가 박스 모바일 -->
            <a href="../menu/reg.html" class="menu-add-box-mobile">
                <span class="icon icon-plus-circle"></span>
            </a>
            <!-- ----------------메뉴 목록 -->
            <section class="menu-edit-section">
                <h1 class="d-none">메뉴 목록</h1>
                <!-- ----------------상품추가 박스 pc -->
                <a href="../menu/reg.html" class="menu-add-box-pc">
                    <span class="icon icon-plus-circle"></span>
                </a>

                <section class="menu">
                    <div>
                        <a href="../../anonymous/menu/detail.html">
                            <img src="/image/espresso.svg" alt="에스프레소" />
                        </a>
                    </div>
                    <h1>에스프레소</h1>
                    <h2>Espresso</h2>
                    <div>2,500원</div>
                    <div>
                        <a class="icon icon-arrow-up">추천메뉴 보기</a>
                    </div>
                    <div>
                        <a href="" class="icon icon-lg icon-pencil">수정</a>
                        <a href="" class="icon icon-lg icon-trash">삭제</a>
                    </div>
                </section>
                <!-- ----------------추천메뉴 목록 -->
                <section class="recommend-menu-section">
                    <div class="bl-2 pl-12 flex-cloumn-gap-12">
                        <h1>추천 메뉴</h1>
                        <section class="menu-delete-section">
                            <h1 class="d-none">메뉴 목록</h1>
                            <section class="menu">
                                <div>
                                    <a href="">
                                        <img src="/image/espresso.svg" alt="에스프레소" />
                                    </a>
                                </div>
                                <h1>에스프레소</h1>
                                <h2>Espresso</h2>
                                <div>2,500원</div>
                                <div>
                                    <a href="" class="icon icon-trash">삭제</a>
                                </div>
                            </section>
                            <section class="menu">
                                <div>
                                    <a href="">
                                        <img src="/image/espresso.svg" alt="에스프레소" />
                                    </a>
                                </div>
                                <h1>에스프레소</h1>
                                <h2>Espresso</h2>
                                <div>2,500원</div>
                                <div>
                                    <a href="" class="icon icon-trash">삭제</a>
                                </div>
                            </section>
                            <section class="menu">
                                <div>
                                    <a href="">
                                        <img src="/image/espresso.svg" alt="에스프레소" />
                                    </a>
                                </div>
                                <h1>에스프레소</h1>
                                <h2>Espresso</h2>
                                <div>2,500원</div>
                                <div>
                                    <a href="" class="icon icon-trash">삭제</a>
                                </div>
                            </section>

                            <!-- ----------------상품추가 박스 pc small-->
                            <a href="../menu/reg.html" class="menu-add-box-pc-sm">
                                <span class="icon icon-plus-circle"></span>
                            </a>
                            <!-- ----------------상품추가 박스 모바일 -->
                            <a href="../menu/reg.html" class="menu-add-box-mobile">
                                <span class="icon icon-plus-circle"></span>
                            </a>
                        </section>
                    </div>
                </section>

                <section class="menu">
                    <div>
                        <a href="../../anonymous/menu/detail.html">
                            <img src="/image/espresso.svg" alt="에스프레소" />
                        </a>
                    </div>
                    <h1>에스프레소</h1>
                    <h2>Espresso</h2>
                    <div>2,500원</div>
                    <div>
                        <a class="icon icon-arrow-up">추천메뉴 보기</a>
                    </div>
                    <div>
                        <a href="" class="icon icon-lg icon-pencil">수정</a>
                        <a href="" class="icon icon-lg icon-trash">삭제</a>
                    </div>
                </section>

                <section class="menu">
                    <div>
                        <a href="../../anonymous/menu/detail.html">
                            <img src="/image/espresso.svg" alt="에스프레소" />
                        </a>
                    </div>
                    <h1>에스프레소</h1>
                    <h2>Espresso</h2>
                    <div>2,500원</div>
                    <div>
                        <a class="icon icon-arrow-up">추천메뉴 보기</a>
                    </div>
                    <div>
                        <a href="" class="icon icon-lg icon-pencil">수정</a>
                        <a href="" class="icon icon-lg icon-trash">삭제</a>
                    </div>
                </section>

                <section class="menu">
                    <div>
                        <a href="">
                            <img src="/image/espresso.svg" alt="에스프레소" />
                        </a>
                    </div>
                    <h1>에스프레소</h1>
                    <h2>Espresso</h2>
                    <div>2,500원</div>
                    <div>
                        <a class="icon icon-arrow-up">추천메뉴 보기</a>
                    </div>
                    <div>
                        <a href="" class="icon icon-lg icon-pencil">수정</a>
                        <a href="" class="icon icon-lg icon-trash">삭제</a>
                    </div>
                </section>

                <section class="menu">
                    <div>
                        <a href="">
                            <img src="/image/espresso.svg" alt="에스프레소" />
                        </a>
                    </div>
                    <h1>에스프레소</h1>
                    <h2>Espresso</h2>
                    <div>2,500원</div>
                    <div>
                        <a class="icon icon-arrow-up">추천메뉴 보기</a>
                    </div>
                    <div>
                        <a href="" class="icon icon-lg icon-pencil">수정</a>
                        <a href="" class="icon icon-lg icon-trash">삭제</a>
                    </div>
                </section>
            </section>
        </div>
    </main>
</template>
<style scoped>
@import url('/css/menu.css');
@import url('/css/admin/menu/list.css');
</style>