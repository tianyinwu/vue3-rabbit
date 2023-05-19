<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
    <!-- 导航区 -->
    <LayoutNav />
    <!-- 头部信息 -->
    <LayoutHeader />
    <!-- 展示主要的内容区域 -->
    <RouterView />   
    <!-- 尾部信息 -->
    <LayoutFooter />
</template>