<template>
    <div class="room">
        <Header></Header>
        <van-empty image="search" description="暂无内容" />
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
    height: 100%;
}
</style>