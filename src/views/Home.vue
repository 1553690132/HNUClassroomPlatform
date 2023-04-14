<template>
    <div class="home">
        <div class="main-part">
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active" :route="true">
            <van-tabbar-item replace to="/home/room" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/home/message" icon="more-o">详情</van-tabbar-item>
            <van-tabbar-item replace to="/home/studyroom" icon="search">教室</van-tabbar-item>
            <van-tabbar-item replace to="/home/personal" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;

    .main-part {
        width: 100%;
        padding-bottom: 50px;
    }
}
</style>