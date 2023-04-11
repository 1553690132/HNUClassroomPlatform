<template>
    <div class="message">
        <Header></Header>
        <div class="room-msg-content">
            <div class="content-msg">
                <div class="msg-title">
                    <van-icon name="wap-home-o" />
                    <h3>教室信息</h3>
                </div>
                <div class="msg-content">
                    <RoomMessage></RoomMessage>
                </div>
            </div>
            <div class="msg-footer">
                <div class="repair-part">
                    <div class="repair-left">
                        <span>故障申报</span>
                        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="small"
                            @click="submitError">申报</van-button>
                    </div>
                    <div class="repair-right">
                        <van-icon name="phone-circle" class="repair-icon" />
                    </div>
                </div>
                <div class="subject-condition">
                    <div class="subject-title">
                        <div class="title-left"><van-icon name="notes-o" />
                            <h3>教室排课</h3>
                        </div>
                        <span>2022-2023学年（第7教学周）</span>
                    </div>
                    <div class="subject-content">
                        <SubjectMessage v-if="!subjects"></SubjectMessage>
                        <van-empty description="暂未排课" v-else />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '../router'
const subjects = ref(true)
const submitError = () => {
    
    router.push('/login')
}
</script>

<style lang="less" scoped>
:deep(.van-icon) {
    font-size: 20px !important;
}

.message {
    background-color: #f5f5f5;
    width: 100vw;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

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

    .room-msg-content {
        margin-top: -200px;
        min-height: 80vh;

        .content-msg {
            background-color: #fff;
            border-radius: 8px;
            width: 90vw;

            .msg-title {
                display: flex;
                align-items: center;
                height: 50px;
                border-bottom: 1px solid #ddd;
                font-size: 14px;
                padding: 0 10px;

                h3 {
                    margin-left: 6px;
                    color: #333;
                }
            }

            .msg-content {
                height: 100%;
                width: 100%;
                box-sizing: border-box;
                padding: 20px;
            }
        }

        .msg-footer {
            margin-top: 20px;
            width: 100%;

            .repair-part {
                color: #f23354;
                background-color: #fce9ea;
                width: 100%;
                padding: 10px 25px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 10px;

                .repair-left {
                    display: flex;
                    flex-direction: column;
                    font-size: 18px;

                    span {
                        margin-bottom: 10px;
                    }
                }

                .repair-right {
                    .repair-icon {
                        font-size: 50px !important;
                    }
                }
            }

            .subject-condition {
                margin-top: 20px;
                background-color: #fff;
                border-radius: 8px;
                width: 90vw;

                .subject-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 50px;
                    border-bottom: 1px solid #ddd;
                    font-size: 14px;
                    padding: 0 10px;

                    .title-left {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;

                        h3 {
                            margin-left: 6px;
                        }
                    }


                    span {
                        color: #777;
                    }
                }
            }
        }
    }
}
</style>