<template>
    <div class="roomMsg">
        <ul>
            <li>
                <div class="msg-icon location"><van-icon name="guide-o" /></div>
                <div class="context">
                    <div class="titles">所处位置：</div>
                    <div class="msgs">理工一 515</div>
                </div>
            </li>
            <li>
                <div class="msg-icon condition"><van-icon name="notes-o" /></div>
                <div class="context">
                    <div class="titles">教室情况：</div>
                    <div class="msgs"><van-tag type="success" size="large">空闲</van-tag></div>
                </div>
            </li>
            <li>
                <div class="msg-icon info"><van-icon name="info-o" /></div>
                <div class="context">
                    <div class="titles">教室信息：</div>
                    <div class="msgs">占地100㎡ 约80座</div>
                </div>
            </li>
            <li>
                <div class="msg-icon type"><van-icon name="apps-o" /></div>
                <div class="context">
                    <div class="titles">教室类型：</div>
                    <div class="msgs">实验室</div>
                </div>
            </li>
            <li>
                <div class="msg-icon media"><van-icon name="more-o" /></div>
                <div class="context">
                    <div class="titles">多媒体设备：</div>
                    <div class="msgs">暂无</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.roomMsg {
    ul {
        li {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 28px;

            &:last-child {
                margin-bottom: 0px;
            }

            .msg-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: #fff;
                line-height: 40px;
                text-align: center;
                font-size: 24px !important;
            }

            .context {
                flex: 1;
                margin-left: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #333;
            }

            .location {
                background-color: #4187ec;
            }

            .condition {
                background-color: #f5805d;
            }

            .info {
                background-color: #aaa;
            }

            .media {
                background-color: lightpink;
            }

            .type {
                background-color: #5be3be;
            }
        }
    }
}
</style>