<template>
    <div class="report">
        <van-nav-bar title="申报维修" left-arrow @click-left="onClickLeft" />
        <van-notice-bar left-icon="volume-o" text="请认真填写相关信息，务必确保信息真实性！" />
        <div class="report-part">
            <van-form @submit="onSubmit" class="report-form">
                <van-cell-group inset>
                    <van-field name="classroomId" label="教室名" placeholder="教室名" disabled />

                    <van-field v-model="typeText" is-link readonly name="picker" label="故障类型" placeholder="点击选择故障类型"
                        @click="showPicker = true" />
                    <van-popup v-model:show="showPicker" position="bottom">
                        <van-picker :columns="types" @confirm="onConfirm" @cancel="showPicker = false" />
                    </van-popup>

                    <van-field v-model="reportForm.brief" name="brief" label="故障简况" placeholder="请简写故障情况" maxlength="15"
                        :rules="[{ required: true, message: '请简写故障情况' }]" />
                    <van-field v-model="reportForm.details" name="details" label="故障情况" placeholder="请具体说明故障情况"
                        type="textarea" autosize maxlength="50" show-word-limit
                        :rules="[{ required: true, message: '请具体说明故障情况' }]" />
                    <van-field name="uploader" label="凭证上传" :rules="[{ required: true, message: '请上传凭证图片' }]">
                        <template #input>
                            <van-uploader v-model="reportForm.pic" multiple :max-count="1" />
                        </template>
                    </van-field>
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
import { showFailToast, showSuccessToast, showToast } from 'vant';
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
const { proxy } = getCurrentInstance()
const reportForm = reactive({
    classroomId: 1, // 之后通过token获取
    typeId: '',
    brief: '',
    details: '',
    pic: []
})
const types = reactive([{ text: '1', value: '1' }])
const onClickLeft = () => {
    router.back()
}
const showPicker = ref(false), typeText = ref('');
const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false
    reportForm.typeId = selectedOptions[0].value
    typeText.value = selectedOptions[0].text
};

const onSubmit = async () => {
    const pic = reportForm.pic.map(p => p = p.file)[0]
    const res = await proxy.$api.report.uploadImg(pic)
    if (res.code !== 200) return showToast('图片上传异常!')
    const _res = await proxy.$api.report.sendReport({ ...reportForm, pic: res.data.path })
    if (_res.code === 429) return showFailToast(_res.msg)
    if (_res.code !== 200) return showToast('申报失败！')
    showSuccessToast('申报成功')
    router.replace('/home')
}

const getReportType = async () => {
    const { data: res } = await proxy.$api.report.getReportType()
    types.length = 0
    types.push(...res.map(e => e = { ...e, text: e.name, value: e.id }))
    types.sort((a, b) => {
        return a.id - b.id
    })
    console.log(types)
}

onMounted(async () => {
    await getReportType()
})
</script>

<style lang="less" scoped>
.report {
    min-height: 100vh;
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