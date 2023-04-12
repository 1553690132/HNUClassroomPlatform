<template>
    <div class="building">
        <van-nav-bar :title="buildingStore.nowBuildingInfo.name" left-arrow @click-left="onClickLeft" />
        <div class="building-part">
            <div class="search-title">
                <img src="../../assets/img/banner_a.jpg" alt="">
            </div>
            <div class="search-body">
                <van-cell-group inset class="search-input">
                    <van-cell title="空教室查询" />
                    <van-field v-model="fieldValue" is-link readonly label="筛选" placeholder="选择时间"
                        @click="showPicker = true" />
                    <van-popup v-model:show="showPicker" round position="bottom">
                        <van-picker :columns="columns" title="时间选择" @cancel="showPicker = false" @confirm="onConfirm" />
                    </van-popup>
                </van-cell-group>
                <van-cell-group inset class="search-result">
                    <van-cell title="查询结果" />
                    <van-empty v-if="showBlank" image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
                        image-size="80" description="描述文字" />
                    <van-grid v-else class="grid" :gutter="10" :column-num="3">
                        <van-grid-item icon="wap-home-o" text="理工一 515" @click="showDetail" />
                        <van-grid-item icon="wap-home-o" text="理工一 429" @click="showDetail" />
                        <van-grid-item icon="wap-home-o" text="理工一 427" @click="showDetail" />
                        <van-grid-item icon="wap-home-o" text="理工一 513" @click="showDetail" />
                        <van-grid-item icon="wap-home-o" text="理工一 519" @click="showDetail" />
                        <van-grid-item icon="wap-home-o" text="理工一 521" @click="showDetail" />
                        <van-grid-item icon="wap-home-o" text="理工一 519" @click="showDetail" />
                    </van-grid>
                </van-cell-group>
            </div>
            <div class="search-footer">
                <p>查询结果仅供参考</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import router from '../../router';
import { buildingInfoStore } from '../../store/buildingInfoStore';
const buildingStore = buildingInfoStore()
const { proxy } = getCurrentInstance()
const columns = [
    [
        { text: '周一', value: 'Monday' },
        { text: '周二', value: 'Tuesday' },
        { text: '周三', value: 'Wednesday' },
        { text: '周四', value: 'Thursday' },
        { text: '周五', value: 'Friday' },
        { text: '周六', value: 'Saturdayy' },
        { text: '周日', value: 'Sunday' }
    ],
    [
        { text: '第一节', value: 'One' },
        { text: '第二节', value: 'Two' },
        { text: '第三节', value: 'Three' },
        { text: '第四节', value: 'Four' },
        { text: '第五节', value: 'Five' },
        { text: '第六节', value: 'Six' },
        { text: '第七节', value: 'Seven' },
        { text: '第八节', value: 'Eight' },
        { text: '第九节', value: 'Nine' },
        { text: '第十节', value: 'Ten' },
        { text: '第十一节', value: 'Eleven' },
    ],
];
const fieldValue = ref('');
const showPicker = ref(false);
const showBlank = ref(true)
const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    fieldValue.value = `${selectedOptions[0].text}      ${selectedOptions[1].text}`
    showBlank.value = false
};
const onClickLeft = () => {
    router.back()
}
const showDetail = () => {
    router.push('/detail')
}
</script>

<style lang="less" scoped>
.building {
    width: 100%;
    background-color: #f5f5f5;
    height: 100%;

    .building-part {
        width: 100%;

        .search-title {
            img {
                width: 100%;
            }
        }

        .search-body {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 8px;

            .search-input {
                margin: 0 0 10px 0;
            }

            .search-result {
                width: 100%;
                min-height: 55vh;
                margin: 0;

                .grid {
                    margin-top: 10px;
                }
            }
        }

        .search-footer {
            width: 100%;
            text-align: center;

            p {
                font-size: 14px;
                color: #888;
            }
        }
    }
}
</style>