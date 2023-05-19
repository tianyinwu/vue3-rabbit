<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

// 挂载的时候，就发送一下请求，得到的数据给子组件进行使用
onMounted(()=>{categoryStore.getCategory()})

</script>

<template>
    <!-- 吸顶导航 -->
    <LayoutFixed />
    <!-- 导航区 -->
    <LayoutNav />
    <!-- 头部信息 -->
    <LayoutHeader />
    <!-- 展示主要的内容区域 -->
    <RouterView />   
    <!-- 尾部信息 -->
    <LayoutFooter />
</template>