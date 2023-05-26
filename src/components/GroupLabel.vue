<template>
    <div class="grouplabel">
        <img :src=imgUrl alt="">
    </div>
</template>
<style scoped lang="less">
    .grouplabel{
      img{
        width: 100%;
      }
    }
</style>
<script>
export default {
  props: {
    imgUrl:String,
    msg: String
  }
}
</script>