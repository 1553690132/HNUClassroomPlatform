<template>
    <div class="detail">
        <van-nav-bar title="教室详情" left-arrow @click-left="onClickLeft" />
        <div class="msg-body">
            <RoomMessage></RoomMessage>
            <img src="../../assets/img/footer.png" alt="footer">
        </div>
    </div>
</template>

<script setup>
import router from '../../router';
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