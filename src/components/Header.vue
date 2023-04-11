<template>
    <div class="header">
        <div class="room-msg-title">
            <div class="title-content">
                <div class="logo-part"><img src="../assets/img/logo.png" alt="logo"></div>
                <div class="text-part">
                    <h3>哈尔滨师范大学教室平台</h3>
                    <span>敦品励学，弘毅致远。</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.header {
    width: 100%;

    .room-msg-title {
        padding: 10px;
        height: 34vh;
        background-color: #4187ec;

        .title-content {
            display: flex;
            color: #fff;
            align-items: center;

            .logo-part {
                margin-right: 10px;
            }

            span {
                font-size: 12px;
                font-family: serif;
            }

        }
    }
}
</style>