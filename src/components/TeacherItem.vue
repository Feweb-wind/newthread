<template>
    <div class="teacher-item">
        <div class="item-left">
            <div class="title">{{ props.teacherName }}</div>
            <div class="content">
                <div class="describe">
                    <span>负责事项：</span>
                    <br>
                    <span class="proptext">{{ props.describe }}</span>
                </div>
                <div class="group">
                    <span>指导小组：</span>
                    <br>
                    <span class="proptext">{{ props.group }}</span>
                </div>
            </div>
        </div>
        <div class="item-right">
            <img :src="require('@/assets/img/testdata/teacher-test.png')">
        </div>
    </div>
</template>
<script setup>
import {defineProps} from 'vue'
const props = defineProps({
    teacherName:String,
    describe:String,
    group:String
})
console.log(props)
</script>
<style scoped lang="less">
    .teacher-item{
        width: 100%;
        height: 100%;
        display: flex;
        background: rgba(255,255,255,0.08);
        box-shadow: 1px 3px 6px 1px rgba(0,0,0,0.06);
        .item-left{
            flex: 7;
            padding: 12px 32px;
            display: flex;
            flex-direction: column;
            text-align: left;
            .title{
                font-size: 44px;
                font-weight: 400;
                color: #272626;
                font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
                margin-bottom: 55px;
            }
            .content{
                padding: 0 20px;
                font-size: 22px;
                font-family: PingFang SC-Semibold, PingFang SC;
                font-weight: 600;
                color: #272626;
                .describe{
                    margin-bottom: 42px;
                }
                .proptext{
                    margin-left: 42px;
                }
            }
        }
        .item-right{
            flex:5;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>