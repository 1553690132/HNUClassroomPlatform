<template>
    <div class="studyRoom">
        <Header></Header>
        <div class="studysearch">
            <van-search v-model="searchwords" placeholder="请输入搜索关键词" shape="round" background="#4187ec"
                @search="searchBuilding" @clear="onClear" />
        </div>
        <div class="studybody">
            <div class="classroom">
                <van-row>
                    <van-col v-if="!showSearch" span="8" v-for="item in buildingList" :key="item.id"
                        @click="showBuildingMsg(item)">
                        <div class="building">
                            <img src="../assets/img/building.png" alt="building">
                            <span>{{ item.name }}</span>
                        </div>
                    </van-col>
                    <van-col v-else span="8" v-for="sItem in searchBuildingList" :key="sItem.id"
                        @click="showBuildingMsg(sItem)">
                        <div class="building">
                            <img :src="building_img" alt="building">
                            <span>{{ sItem.name }}</span>
                        </div>
                    </van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '../router/index'
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
import { buildingInfoStore } from '../store/buildingInfoStore'
import { getImageUrl } from '../utils/common';
const { proxy } = getCurrentInstance()
const buildingStore = buildingInfoStore()
const searchwords = ref(''), buildingList = reactive([]), searchBuildingList = reactive([]), showSearch = ref(false)
const building_img = getImageUrl('building')
const showBuildingMsg = (buildingMsg) => {
    buildingStore.chooseBuilding(buildingMsg)
    router.push('/building')
}
const getBuildingList = async () => {
    const res = await proxy.$api.building.getBuildingList()
    buildingList.length = 0
    buildingList.push(...res)
}
const searchBuilding = async () => {
    const res = await proxy.$api.building.searchBuildingInfo(searchwords.value)
    showSearch.value = true
    searchBuildingList.length = 0
    searchBuildingList.push(...res)
}
const onClear = () => {
    searchBuildingList.length = 0
    showSearch.value = false
}
onMounted(async () => {
    await getBuildingList()
})
</script>

<style lang="less" scoped>
.studyRoom {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;

    :deep(.room-msg-title) {
        height: 16vh !important;
    }

    .studysearch {
        position: absolute;
        width: 100%;
        top: 70px;
    }

    .studybody {
        margin: 18px 0;
        width: 100%;
        display: flex;
        justify-content: center;

        .classroom {
            width: 95vw;
            border-radius: 8px;
            background-color: #fff;
            padding: 0px 10px 10px;
            box-sizing: border-box;

            .building {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 10px;

                span {
                    color: #333;
                    font-size: 14px;
                }

                img {
                    width: 50px;
                }
            }
        }
    }
}
</style>