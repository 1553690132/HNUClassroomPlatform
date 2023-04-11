<template>
    <div class="report">
        <van-nav-bar title="申报维修" left-arrow @click-left="onClickLeft" />
        <div class="report-part">
            <van-form @submit="onSubmit" class="report-form">
                <van-cell-group inset>
                    <van-field v-model="classroomName" name="classroomName" label="教室名" placeholder="教室名"
                        :rules="[{ required: true, message: '请填写教室名' }]" />
                    <van-field v-model="condition" name="condition" label="故障情况" placeholder="故障情况"
                        :rules="[{ required: true, message: '请填写故障情况' }]" />
                </van-cell-group>
                <div class="submit-btn">
                    <van-button round block type="primary" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
            <div class="report-footer">
                <van-icon name="info-o" /><span>请勿谎报维修信息</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import router from '../../router'
import { showSuccessToast } from 'vant';
import { ref } from 'vue'
let classroomName = ref(''), condition = ref('')
const onClickLeft = () => {
    router.back()
}
const onSubmit = () => {
    showSuccessToast('申报成功')
    router.replace('/home')
}
</script>

<style lang="less" scoped>
.report {
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;

    .report-part {
        padding: 5px;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 90%;

        .report-form {
            margin-top: 20px;

            .submit-btn {
                width: 100%;
                padding: 40px;
                box-sizing: border-box;
            }
        }

        .report-footer {
            width: 100%;
            text-align: center;
            color: #333;
            font-size: 14px;

            span {
                margin-left: 5px;
            }
        }
    }
}
</style>