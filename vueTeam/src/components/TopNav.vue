<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <nav>
            <div>
                <RouterLink to="/">메인</RouterLink>
                <RouterLink to="/board">게시판</RouterLink>
                <RouterLink to="/myPage">마이페이지</RouterLink>
                <RouterLink to="/login">로그인페이지</RouterLink>
            </div>
        </nav>
    </div>
</template>

<style>
    
</style>

