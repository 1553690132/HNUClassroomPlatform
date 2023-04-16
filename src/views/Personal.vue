<template>
    <div class="personal">
        <div class="main-part">
            <div class="header">
                <div class="operate-part">
                    <div class="config"><van-icon name="setting-o" /></div>
                    <div class="menu"><van-icon name="ellipsis" /></div>
                </div>
                <div class="body-section">
                    <div class="info-part">
                        <h2>{{ userStore.userInfo.name }}</h2>
                        <div class="details">
                            <p>学号:{{ userStore.userInfo.studentId }}</p>
                            <p>{{ userStore.userInfo.academy }}</p>
                            <p>{{ userStore.userInfo.class }}</p>
                        </div>
                    </div>
                    <div class="avatar-part">
                        <img :src="userStore.userInfo.avatar" alt="avatar">
                    </div>
                </div>
            </div>
            <section class="tools">
                <img :src="repair_src" alt="notice" @click="toCheckReport">
                <div class="methods-part">
                    <div class="top-part">
                        <a href="javascript:;" class="l-choice">
                            <img :src="bg_f_img" alt="update">
                            <p>更新日志</p>
                        </a>
                        <a href="javascript:;" class="r-choice">
                            <img :src="bg_s_img" alt="update">
                            <p>其他功能</p>
                        </a>
                    </div>
                    <div class="bottom-part">
                        <div class="choice">
                            <p><van-icon class="bottom-icon" name="info-o" />关于我们</p>
                        </div>
                        <div class="choice">
                            <p><van-icon class="bottom-icon" name="question-o" />使用须知</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="copyright">© 2023-2024 哈尔滨师范大学</div>
    </div>
</template>

<script setup>
import router from '../router';
import { onMounted } from 'vue'
import { getImageUrl } from '../utils/common'
import { userInfoStore } from '../store/userInfoStore'
const userStore = userInfoStore()
const repair_src = getImageUrl('btn_one'), bg_f_img = getImageUrl('bg_first'), bg_s_img = getImageUrl('bg_second')
const toCheckReport = () => {
    router.push('/check')
}
onMounted(async () => {
    await userStore.getUserInfos()
})
</script>

<style lang="less" scoped>
.personal {
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    .main-part {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;

        .header {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
            color: #fff;

            .operate-part {
                width: 100%;
                display: flex;
                justify-content: space-between;
                font-size: 22px;
                margin-bottom: 16px;

                .menu,
                .config {
                    :deep(.van-icon) {
                        font-size: 24px !important;
                    }
                }

            }

            .body-section {
                display: flex;
                justify-content: space-between;
                margin-bottom: 5px;

                .info-part {
                    flex: 1;
                    margin-left: 16px;

                    .details {
                        margin-top: 10px;

                        p {
                            margin: 5px 0;
                        }
                    }
                }

                .avatar-part {
                    padding: 2px;
                    background-color: #fff;
                    box-sizing: border-box;
                    border-radius: 50%;
                    height: 90px;
                    display: flex;
                    align-items: center;
                    margin-right: 10px;

                    img {
                        width: 86px;
                        border-radius: 50%;
                    }

                }
            }

        }

        .tools {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            width: 92%;
            box-sizing: border-box;

            img {
                width: 100%;
                border-radius: 8px;
            }

            .methods-part {
                margin-top: 20px;
                width: 100%;

                .top-part {
                    width: 100%;
                    display: flex;
                    box-sizing: border-box;

                    .l-choice,
                    .r-choice {
                        width: 50%;
                        // background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
                        // background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
                        background-color: #5087ed;
                        border-radius: 8px;
                        text-align: center;
                        box-sizing: border-box;
                        padding-bottom: 10px;

                        img {
                            width: 80%;
                        }

                        p {
                            color: #fff;
                            font-size: 16px;
                            font-weight: 700;
                        }
                    }

                    .l-choice {
                        margin-right: 20px;
                    }
                }

                .bottom-part {
                    width: 100%;
                    background-color: #fff;
                    margin-top: 20px;
                    margin-bottom: 10px;
                    border-radius: 8px;

                    .choice {
                        width: 100%;
                        box-sizing: border-box;
                        padding: 20px;

                        p {

                            .bottom-icon {
                                margin-right: 10px;
                            }

                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }


    .copyright {
        color: #333;
    }

}
</style>
