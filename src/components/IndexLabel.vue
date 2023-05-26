<template>
    <div class="indexlabel">
        {{msg}}
    </div>
</template>
<style scoped lang="less">
    .indexlabel{
        display: flex;
        background-image: url(../assets/img/indexlabel-bcg.png);
        padding: 18px 42px 18px 33px;
        background-repeat: no-repeat;
        background-size:100% 100% ;
        width: 240px;
        height: 65px;
        font-size: 50px;
        font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
        font-weight: 400;
        color: #333333;
    }
</style>
<script>
export default {
  props: {
    msg: String
  }
}
</script>