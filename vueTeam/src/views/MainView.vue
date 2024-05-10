<script setup>
    import {ref} from "vue"
    import { useRouter } from "vue-router";

	const count = ref(0);
    const router = useRouter();

    function getCount() {
        
    }
</script>

<template>
  <div class="about">
    <div class="container">
		<h1>메인 페이지 입니다.</h1>
	</div>
  </div>
</template>

<style scoped>
</style>