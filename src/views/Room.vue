<template>
    <div class="room">
        <Header></Header>
        <div class="banner-part">
            <van-swipe :autoplay="3000" lazy-render>
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="userinfo">
            <div class="avatar"></div>
            <div class="user-detail">{{ loginStore.username }}</div>
        </div>
        <van-empty image="search" description="暂无内容" />
        <div class="copyright">
            © 2022-2023 哈尔滨师范大学 & SimRobot
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { loginInfoStore } from '../store/loginInfoStore';
const loginStore = loginInfoStore()
const images = ref(['/src/assets/img/banner_first.png', '/src/assets/img/banner_second.png', '/src/assets/img/banner_third.png'])

</script>
<style lang="less" scoped>
:deep(.van-icon) {
    font-size: 20px !important;
}

.room {
    position: relative;
    background-color: #f5f5f5;
    width: 100%;
    min-height: 80vh;

    :deep(.room-msg-title) {
        height: 16vh !important;
    }

    :deep(.van-swipe){
        border-radius: 8px;
    }

    .banner-part {
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;
        margin-top: -8vh;

        img {
            border-radius: 8px;
            width: 100%;
        }
    }

    .copyright {
        color: #666;
        font-size: 14px;
        width: 100%;
        text-align: center;
    }
}
</style>