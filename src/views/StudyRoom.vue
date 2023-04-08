<template>
    <div class="studyRoom">
        <Header></Header>
        <div class="studysearch">
            <van-search v-model="searchwords" placeholder="请输入搜索关键词" shape="round" background="#4187ec" />
        </div>
        <div class="studybody">
            <div class="classroom">
                <van-row>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>理工一</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>理工二</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>理工三</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>崇师楼</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>西语楼</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>人文楼</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>社科楼</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>体育楼</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>行知楼</span>
                        </div>
                    </van-col>
                    <van-col span="8" @click="showBuildingMsg">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>研究生楼</span>
                        </div>
                    </van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '../router/index'
import { ref } from 'vue'
const searchwords = ref('')
const showBuildingMsg = () => {
    router.push('/building')
}
</script>

<style lang="less" scoped>
.studyRoom {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    :deep(.room-msg-title) {
        height: 16vh !important;
    }

    .studysearch {
        position: absolute;
        width: 100%;
        top: 70px;
    }

    .studybody {
        margin: 10px 0;
        width: 100%;
        display: flex;
        justify-content: center;

        .classroom {
            width: 95vw;
            border-radius: 8px;
            background-color: #fff;
            padding: 0px 10px 10px;
            box-sizing: border-box;

            .building {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 10px;

                span {
                    color: #333;
                    font-size: 14px;
                }

                img {
                    width: 50px;
                }
            }
        }
    }
}
</style>