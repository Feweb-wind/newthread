<template>
    <div class="pageheadertop">
        <div class="top">
            <img src="../assets/img/pageheadertop-bcg.png" alt="">
        </div>
        <PapeHeader/>
    </div>
</template>
<style scoped lang="less">
    .pageheadertop{
        .top{
            img{
                width: 100%;
            }
        }
    }
</style>
<script>
import PapeHeader from './PapeHeader.vue';
export default {
  props:{
    mainLogo:Boolean
  },
  components:{
    PapeHeader
  }
}
</script>