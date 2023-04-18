<template>
    <div class="configPwd">
        <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeft" />
        <div class="config-body">
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field :name="typeName" :label="typeName" :placeholder="configBody.username" disabled />
                    <van-field v-model="configBody.oldPassword" type="password" name="旧密码" label="旧密码" placeholder="请输入旧密码"
                        :rules="[{ required: true, message: '请填写旧密码' }]" />
                    <van-field v-model="configBody.newPassword" type="password" name="密码" label="密码" placeholder="请输入密码"
                        :rules="[{ required: true, message: '请填写新密码' }]" />
                    <van-field v-model="configBody.twicePassword" type="password" name="密码" label="二次密码"
                        placeholder="请再次输入密码"
                        :rules="[{ required: true, message: '请再次填写新密码' }, { validator, message: '两次输入密码请一致!' }]" />
                </van-cell-group>
                <van-button class="config-btn" round block type="primary" native-type="submit">
                    确认修改
                </van-button>
            </van-form>
        </div>
    </div>
</template>

<script setup>
import router from '../../router';
import { reactive, getCurrentInstance, onMounted, computed } from 'vue';
import { userInfoStore } from '../../store/userInfoStore';
import { showFailToast, showSuccessToast } from 'vant';
const userStore = userInfoStore()
const { proxy } = getCurrentInstance()
const typeName = computed(() => { return sessionStorage.getItem('type') === 'student' ? '学号' : '工号' })
const validator = val => { return val === configBody.newPassword }
const configBody = reactive({
    username: sessionStorage.getItem('studentId'),
    oldPassword: userStore.userInfo.isFirstLogin ? sessionStorage.getItem('studentId') : '',
    newPassword: '',
    twicePassword: ''
})
const onClickLeft = () => {
    if (userStore.userInfo.isFirstLogin || sessionStorage.getItem('isFirstLogin')) return showFailToast('由于安全原因，请立即修改密码！')
    router.back()
}
const onSubmit = async () => {
    if (configBody.newPassword.length < 6) return showFailToast('密码长度最小为6')
    const res = await proxy.$api.login.changePassword(configBody)
    console.log(res);
    if (res.code !== 200) return showFailToast(res.msg)
    showSuccessToast('修改成功！')
    sessionStorage.removeItem('isFirstLogin')
    router.replace('/')
}
onMounted(() => {
    configBody.username = sessionStorage.getItem('studentId')
    configBody.oldPassword = sessionStorage.getItem('studentId')
})
</script>

<style lang="less" scoped>
.configPwd {
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;

    .config-body {
        padding: 20px 14px;

        .config-btn {
            margin-top: 20px;
        }
    }
}
</style>