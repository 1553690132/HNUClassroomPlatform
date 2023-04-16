<template>
    <div class="check" @touchmove="loadMsg">
        <van-nav-bar title="申报信息查询" left-arrow @click-left="onClickLeft" />
        <van-notice-bar left-icon="info-o" :text="text" />
        <div class="check-part" ref="checkPart">
            <ReportMsgCard></ReportMsgCard>
        </div>
    </div>
</template>

<script setup>
import router from '../../router';
import { onMounted, ref } from 'vue';
import { reportMsgStore } from '../../store/reportMsgStore';
const reportStore = reportMsgStore()
const nowH = ref(0), page = ref(1)
const text = ref(`您有0条正在处理的申报。`)
const onClickLeft = () => { router.back() }
const loadMsg = async () => {
    let nowHeight = document.documentElement.clientHeight + document.documentElement.scrollTop
    if (nowHeight >= document.documentElement.scrollHeight && nowHeight > nowH.value) {
        page.value++
        nowH.value = nowHeight
        await reportStore.getReportListByPage(page.value)
    }
}
onMounted(async () => {
    reportStore.clearStatus()
    await reportStore.getReportListByPage(1)
    text.value = `您有${reportStore.totalCount}条正在处理的申报。`
})

</script>

<style lang="less" scoped>
.check {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;

    #title-text {
        font-size: 14px;
    }

    .check-part {
        width: 100%;
        box-sizing: border-box;
        padding: 16px;
    }
}
</style>