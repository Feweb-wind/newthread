<template>
    <div class="student-item">
        <div class="title">
            <span>{{ props.name }}</span>
            <span>/</span>
            <span>{{ props.job }}</span>
        </div>
        <div class="image">
            <img :src="require('@/assets/img/testdata/student-test.png')">
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    name:String,
    job:String
})
</script>
<style lang="less" scoped>
    .student-item{
        width: 100%;
        height: 100%;
        position: relative;
        text-align: left;
        padding-top: 12px;
        background: rgba(255,255,255,0.48);
        box-shadow: 1px 3px 6px 1px rgba(0,0,0,0.16), inset 0px 3px 6px 1px rgba(0,0,0,0.16);
        .title{
            font-size: 30px;
            font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
            font-weight: 400;
            color: #474067;
            margin-left: 15px;
        }
        .image{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 85%;
            height: 85%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>

