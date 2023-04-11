<template>
    <div class="room">
        <Header></Header>
        <van-empty image="search" description="暂无内容" />
        <div class="copyright">
            © 2022-2023 哈尔滨师范大学
        </div>
    </div>
</template>

<script setup></script>
<style lang="less" scoped>
:deep(.van-icon) {
    font-size: 20px !important;
}

.room {
    position: relative;
    background-color: #f5f5f5;
    width: 100%;
    min-height: 80vh;

    .copyright {
        color: #666;
        font-size: 14px;
        width: 100%;
        text-align: center;
    }
}
</style>