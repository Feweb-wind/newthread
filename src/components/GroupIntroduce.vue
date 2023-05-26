<template>
    <div class="groupintroduce">
        <h4>{{title}}</h4>
        <span>{{content}}</span>
    </div>
</template>
<style scoped lang="less">
    .groupintroduce{
      max-width: 860px;
      height: 675px;
      background-image: url(../assets/img/groupintro-bcg.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 33px 44px 50px 44px;
      text-align: left;
      h4{
        font-size: 48px;
        font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
        font-weight: 400;
        color: #634E87;
        margin-bottom: 30px;
      }
      span{
        font-size: 34px;
        font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
        font-weight: 400;
        color: #634E87;
      }
    }
</style>
<script>
export default {
  props: {
    title:String,
    content:String
  }
}
</script>