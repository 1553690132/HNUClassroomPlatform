<template>
    <div class="reportDetail">
        <van-nav-bar title="申报情况" left-arrow @click-left="onClickLeft" />
        <van-steps class="steps" :active="active" active-icon="success" active-color="#07c160">
            <van-step>申报上传</van-step>
            <van-step>校方审核</van-step>
            <van-step>审核回复</van-step>
            <van-step>申报完成</van-step>
        </van-steps>
        <div class="details">
            <van-tabs v-model:active="activeName">
                <van-tab title="详情" name="detail">
                    <van-cell-group>
                        <van-cell title="教室名" :value="reportStore.chooseReportDetail.classroomId" />
                        <van-cell title="申报简述" :value="reportStore.chooseReportDetail.brief" />
                        <van-cell title="故障类型" class="types">
                            <template #value>
                                <van-tag type="primary" plain id="types" size="large">{{
                                    reportStore.chooseReportDetail.typeName }}</van-tag>
                            </template>
                        </van-cell>
                        <van-cell title="故障情况" :value="reportStore.chooseReportDetail.details" />
                        <van-cell title="故障图片">
                            <template #value>
                                <van-image width="100" height="100" :src="reportStore.chooseReportDetail.reportPic" />
                            </template>
                        </van-cell>
                        <van-cell title="申报人" :value="reportStore.chooseReportDetail.reporter" />
                        <van-cell title="提交时间" :value="reportStore.chooseReportDetail.reportTime" />
                    </van-cell-group>
                </van-tab>
                <van-tab title="回复" name="reply">
                    <van-empty image="error" description="暂无回复" v-if="!reportStore.chooseReportDetail.isReplied" />

                    <van-cell-group v-else>
                        <van-cell title="回复人" :value="reportStore.chooseReportDetail.respondent" />
                        <van-cell title="回复文字" :value="reportStore.chooseReportDetail.content" />
                        <van-cell title="回复图片">
                            <template #value>
                                <van-image width="100" height="100" :src="reportStore.chooseReportDetail.replyPic" />
                            </template>
                        </van-cell>
                        <van-cell title="回复时间" :value="reportStore.chooseReportDetail.replyTime" />
                    </van-cell-group>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script setup>
import router from '../../router';
import { ref } from 'vue';
import { reportMsgStore } from '../../store/reportMsgStore';
const reportStore = reportMsgStore()
const active = ref(1), activeName = ref('detail')
const onClickLeft = () => { router.back() }
</script>
<style lang="less" scoped>
.reportDetail {
    min-height: 100vh;
    width: 100%;
    background-color: #f5f5f5;

    .steps {
        padding-left: 30px !important;
        padding-right: 30px !important;
    }

    .details {
        width: 100%;
        padding-top: 10px;
        box-sizing: border-box;

        .types {
            :deep(.van-cell__value) {
                flex: 3 !important;
                white-space: nowrap;
            }
        }
    }
}
</style>