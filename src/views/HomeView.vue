<template>
  <div class="home">
    <HeaderCom></HeaderCom>
    <PageHeaderTop/>
    <HonorItem :imgUrl="require('../assets/img/img-test.png')"
    title="在民大"
    :content="content" class="test"></HonorItem>
  </div>
  <TeamItem :imgUrl="require('../assets/img/img-test2.png')"
  :title="title2" :content="content2" class="test test2"></TeamItem>
  <FooterCom/>
</template>
<style scoped>
  .test{
    margin: 40px;
  }
  .test2{
    width: 844px;
    height: 417px;
  }
</style>
<script>
// @ is an alias to /src

import HeaderCom from '@/components/HeaderCom.vue';
import HonorItem from '@/components/HonorItem.vue';
import TeamItem from '@/components/TeamItem.vue';
import FooterCom from '@/components/FooterCom.vue';
import PageHeaderTop from '@/components/PageHeaderTop.vue';
import { getMenuList,getArticleList,getStudent,getTeacher } from '@/plugins/api';
export default {
  name: 'HomeView',
  components: {
    HeaderCom,
    HonorItem,
    TeamItem,
    FooterCom,
    PageHeaderTop
  },
  data(){
    return {
      content:`在民大
内容内容较好的菜u陕西周至介就
设计啊会更需is好像哦ID吃出死
设计系UIHXiHXi哦陆…`,
      title2:`大四学长分享会|我们砥砺前行`,
      content2:`      盛夏六月 又是一年毕业季 学长学姐们即将远航 而你是否找到了属于自己的航道呢 如果如今的你仍旧眼前一片…`
    }
  },
  mounted(){
    console.log(getMenuList())
    console.log(getArticleList(1018,1,10,2))
    console.log(getArticleList(1017,1,10,2))
    console.log(getArticleList(1016,1,10,2))
    console.log(getArticleList(1010,1,10,2))
    console.log(getArticleList(1011,1,10,2))
    console.log(getStudent())
    getTeacher()
  }
}
</script>
