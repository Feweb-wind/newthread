<template>
    <div class="honorview">
        <PapeHeader :mainLogo="false"/>
        <div class="main">
          <main>
            <section>
              <h4 class="part-title-right">里程碑>></h4>
              <div class="milepost-container">
                <HonorItem :imgUrl="require('../assets/img/img-test.png')" 
                :title="item.title" :content="item.content" class="test" v-for="item in honorData"
                :key="item">
                </HonorItem>
              </div>
            </section>
            <section>

            </section>
          </main>
        </div>
    </div>
  </template>
  <style scoped lang="less">
    .honorview{
        .header{
            position: absolute;
            top: 0;
            left: 0;
        }
        .main{
          height: 1500px;//test
          padding-top: 180px;
          main{
            width: 1268px;
            margin: 0 auto;
            text-align: right;
            h4{
              margin-bottom: 30px;
            }
            .milepost-container{
              display: grid;
              grid-template-columns: repeat(3, auto);
              grid-template-rows: repeat(2, auto);
              gap: 40px 40px;
            }
          }
        }
    }
  </style>
  <script>
  // @ is an alias to /src
  import PapeHeader from '@/components/PapeHeader.vue';
  import HonorItem from '@/components/HonorItem.vue';
  export default {
    data(){
      return{
        honorData:[
          {
            title:'在民大',
            content:`在民大
内容内容较好的菜u陕西周至介就
设计啊会更需is好像哦ID吃出死
设计系UIHXiHXi哦陆…`
          },
          {
            title:'在民大',
            content:`在民大
内容内容较好的菜u陕西周至介就
设计啊会更需is好像哦ID吃出死
设计系UIHXiHXi哦陆…`
          },
          {
            title:'在民大',
            content:`在民大
内容内容较好的菜u陕西周至介就
设计啊会更需is好像哦ID吃出死
设计系UIHXiHXi哦陆…`
          },
          {
            title:'在民大',
            content:`在民大
内容内容较好的菜u陕西周至介就
设计啊会更需is好像哦ID吃出死
设计系UIHXiHXi哦陆…`
          },
          {
            title:'在民大',
            content:`在民大
内容内容较好的菜u陕西周至介就
设计啊会更需is好像哦ID吃出死
设计系UIHXiHXi哦陆…`
          },
          {
            title:'在民大',
            content:`在民大
内容内容较好的菜u陕西周至介就
设计啊会更需is好像哦ID吃出死
设计系UIHXiHXi哦陆…`
          },
        ]
      }
    },
    components: {
      PapeHeader,
      HonorItem
    }
}
  </script>
  