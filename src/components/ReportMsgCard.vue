<template>
    <div class="reportCard" v-for="item in reportStore.reportList" :key="item.reportId" @click="goToDetails(item)">
        <div class="report-title">
            <div class="title-left">
                <van-icon name="flag-o" />
                <h4>【{{ item.brief }}】</h4>
            </div>
            <div class="title-right">
                <span>{{ item.reportTime }}</span>
            </div>
        </div>
        <div class="report-body">
            <div class="texts">
                <van-text-ellipsis rows="2" :content="item.details" expand-text="展开" collapse-text="收起" />
            </div>
            <div class="status">
                <van-tag type="success" v-if="item.isReplied">已回复</van-tag>
                <van-tag type="warning" v-else>未回复</van-tag>
                <van-tag type="primary" id="types">{{ item.typeName }}</van-tag>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '../router';
import { reportMsgStore } from '../store/reportMsgStore';
const reportStore = reportMsgStore()
const goToDetails = (item) => {
    reportStore.chooseReport(item)
    router.push('/reportDetail')
}
</script>

<style lang="less" scoped>
.reportCard {
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    min-height: 15vh;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    &:last-child {
        margin-bottom: 10px;
    }

    .report-title {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title-left {
            display: flex;
            align-items: center;

            :deep(.van-icon) {
                font-size: 18px;
            }

            h4 {
                color: #333;
            }
        }

        .title-right {
            font-size: 14px;
            color: #777;
        }
    }

    .report-body {
        flex: 1;
        width: 100%;
        padding: 6px 10px 10px 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        .texts {
            flex: 1;
            width: 100%;
        }

        #types {
            margin-left: 10px;
        }
    }
}
</style>