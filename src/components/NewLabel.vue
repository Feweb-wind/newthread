<template>
    <!-- 新的标题样式 -->
    <div class="label-index">
        <div class="label-main">
            <span><slot></slot></span>
            <span class="more">更多</span>
        </div>
        <div class="label-bottom-border">

        </div>
    </div>
</template>
<script setup>
    
</script>
<style scoped lang="less">
    .label-index{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 50px;
        font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
        font-weight: 400;
        color: #343434;
        text-align: left;
        padding-bottom: 8px;
        .label-main{
            width: 100%;
            align-self: auto;
            display: flex;
            justify-content: space-between;
            align-items: end;
            .more{
            font-size: 25px;
            }
        }
        .label-bottom-border{
            width: 100%;
            height: 5px;
            border-radius: 40px;
            background-color: rgba(43, 43, 43, 1);
        }
    }
</style>