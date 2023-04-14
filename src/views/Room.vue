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
        <div class="main-body">
            <div class="top-methods">
                <div class="icon-fn">
                    <div class="icons">
                        <van-icon name="smile-o" />
                    </div>
                    <p>功能名称</p>
                </div>
                <div class="icon-fn">
                    <div class="icons">
                        <van-icon name="comment-circle-o" />
                    </div>
                    <p>功能名称</p>
                </div>
                <div class="icon-fn">
                    <div class="icons">
                        <van-icon name="envelop-o" />
                    </div>
                    <p>功能名称</p>
                </div>
                <div class="icon-fn">
                    <div class="icons">
                        <van-icon name="notes-o" />
                    </div>
                    <p>功能名称</p>
                </div>
            </div>
        </div>
        <div class="body-methods">
            <div class="notice-title">
                <van-icon name="flag-o" />
                <h3>通知公告</h3>
            </div>
            <div class="notice-body"><van-empty image="search" description="暂无内容" /></div>
        </div>
        <div class="copyright">
            © 2022-2023 哈尔滨师范大学 & SimRobot
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '../utils/common'
const images = ref([getImageUrl('banner_first'), getImageUrl('banner_second'), getImageUrl('banner_third')])
</script>
<style lang="less" scoped>
:deep(.van-icon) {
    font-size: 30px !important;
}

.room {
    position: relative;
    background-color: #f5f5f5;
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    :deep(.room-msg-title) {
        height: 16vh !important;
    }

    :deep(.van-swipe) {
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

    .main-body {
        width: 96%;
        background-color: #fff;
        border-radius: 8px;
        margin-top: 10px;

        .top-methods {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            box-sizing: border-box;
            padding: 10px 0;

            .icon-fn {
                display: flex;
                flex-direction: column;
                align-items: center;

                .icons {
                    width: 42px;
                    height: 42px;
                    text-align: center;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    background-color: #5087ed;
                }

                p {
                    margin-top: 5px;
                }
            }
        }
    }

    .body-methods {
        margin-top: 10px;
        background-color: #fff;
        width: 96%;
        box-sizing: border-box;

        .notice-title {
            width: 100%;
            padding: 10px;
            color: #444;
            box-sizing: border-box;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;

            h3 {
                font-size: 18px;
            }
        }
    }

    .copyright {
        color: #666;
        font-size: 14px;
        width: 100%;
        text-align: center;
        margin-top: 40px;
    }
}
</style>