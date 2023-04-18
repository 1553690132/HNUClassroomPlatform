<template>
    <div class="login">
        <div class="login-header">
            <div class="context">
                <h2>你好,</h2>
                <h2>欢迎使用教室平台</h2>
            </div>
            <div class="right-img">
                <img :src="login_img" alt="header">
            </div>
        </div>
        <div class="login-body">
            <van-form @submit="onSubmit" class="loginForm">
                <van-cell-group inset>
                    <van-space direction="vertical" fill :size="30">
                        <van-field v-model="username" label="学号" name="username" placeholder="请输入教务系统学号" left-icon="contact"
                            :rules="[{ required: true, message: '请填写用户名' }]" />
                        <van-field v-model="password" type="password" label="密码" name="password" placeholder="请输入匹配密码"
                            left-icon="sign" :rules="[{ required: true, message: '请填写密码' }]" />
                    </van-space>
                </van-cell-group>
                <div class="submit-btn">
                    <van-button class="btn" round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
            <div class="copyright">
                <span>© 2023 哈尔滨师范大学</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '../router'
import { loginInfoStore } from '../store/loginInfoStore'
import { userInfoStore } from '../store/userInfoStore'
import { showSuccessToast, showFailToast } from 'vant'
import { showDialog } from 'vant'
import { getImageUrl } from '../utils/common'
const loginStore = loginInfoStore()
const userStore = userInfoStore()
const username = ref('');
const password = ref('');
const login_img = getImageUrl('header')
const onSubmit = async (values) => {
    await loginStore.getLoginInfos(values)
    if (localStorage.getItem('token')) {
        showSuccessToast('登录成功')
        sessionStorage.setItem('type', userStore.type)
        if (userStore.userInfo.isFirstLogin) {
            showDialog({
                message: '由于您是第一次登录，须立即进行密码修改。',
            }).then(() => {
                router.replace('/configPwd')
            });
        }
        else router.replace('/home/message')
    } else {
        sessionStorage.getItem('errorType') ? showFailToast(sessionStorage.getItem('errorType')) : showFailToast('服务器异常，请稍后再试!')
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;

    .login-header {
        width: 100%;
        padding: 20px;
        height: 28vh;
        background: linear-gradient(to left top, #71aeff, #5889ff);
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;

        .context {
            h2 {
                color: #fff;
            }
        }

        .right-img {
            img {
                width: 100px;
            }
        }
    }

    .login-body {
        width: 100%;
        height: 60vh;
        background-color: #fff;
        border-radius: 20px 20px 0 0;
        margin-top: -20px;
        padding: 10px;
        box-sizing: border-box;

        .loginForm {
            margin-top: 30px;
        }

        .submit-btn {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 40px !important;

            .btn {
                width: 85%;
            }
        }

        .copyright {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: #aaa;
            text-align: center;
        }
    }
}
</style>