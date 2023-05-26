<template>
    <div class="pageheader">
        <div class="page-inner">
            <img src="../assets/img/pageheader-bcg.png" alt="" class="pageheader-bcg">
            <img src="../assets/img/animal1.png" alt="" class="ani logo1">
            <img src="../assets/img/animal2.png" alt="" class="ani logo2">
            <img src="../assets/img/animal3.png" alt="" class="ani logo3">
            <img src="../assets/img/mainlogo.png" class="mainlogo" v-if="mainLogo">
        </div>
    </div>
</template>
<style scoped lang="less">
    .pageheader{
        width: 100%;
        .page-inner{
            position: relative;
            z-index: -1;//调整层级
            .ani{
                position: absolute;
                width: calc(20%);
            }
            .logo1{
                left: 21%;
                bottom: 23%;
            }
            .logo2{
                left: 48%;
                top: 36%;
            }
            .logo3{
                right: 13%;
                bottom: 11%;
            }
            .mainlogo{
                position: absolute;
                left: 0; right: 0;top: 15%;bottom: 0;
                margin: auto;
                z-index: 10;
                width: calc(40%);
            }
            .pageheader-bcg{
                position: relative !important;
                width: 100% !important;
            }
        }
    }
</style>
<script>
export default {
  props:{
    mainLogo:Boolean
  }
}
</script>