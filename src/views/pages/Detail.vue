<template>
    <div class="detail">
        <van-nav-bar title="教室详情" left-arrow @click-left="onClickLeft" />
        <div class="msg-body">
            <RoomMessage></RoomMessage>
            <img :src="footer_img" alt="footer">
        </div>
    </div>
</template>

<script setup>
import router from '../../router';
import { getImageUrl } from '../../utils/common';
const footer_img = getImageUrl('footer')
const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped>
.detail {
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;

    .msg-body {
        margin-top: 10px;
        box-sizing: border-box;
        width: 100%;
        padding: 20px;

        img {
            width: 100%;
            transform: scale(.8, .8);
        }
    }
}
</style>