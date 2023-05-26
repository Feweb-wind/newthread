<template>
    <div class="index">
      <PapeHeader :mainLogo="true"/>
      <div class="main">
        <main >
          <section>
            <IndexLabe class="label" msg="团队简介>>"/>
            <div class="team-content">
              <img src="../assets/img/team-logo.png" alt="" class="team-logo">
              <article class="yang">
                <!-- 假数据 -->
                {{teamContent}}
              </article>
            </div>
          </section>
          <section>
            <IndexLabe class="label" msg="小组简介>>"/>
            <div class="team-content group-content">
              <div class="group-left">
                <GroupLabel class="grouplabel" v-for="item in allGroup" :key="item" :imgUrl="require('@/assets/img/' + item + '.png')"/>
              </div>
              <div class="group-right">
                <GroupIntroduce class="groupintroduce" title="设计组" :content="testWord"/>
              </div>
            </div>
          </section>
          <section>
            <IndexLabe class="label" msg="团队分站>>"/>
            <div class="team-substation">

            </div>
          </section>
        </main>
      </div>
    </div>
</template>
  
  <script>
  // @ is an alias to /src
  import PapeHeader from '@/components/PapeHeader.vue';
  import IndexLabe from '@/components/IndexLabel.vue';
  import GroupLabel from '@/components/GroupLabel.vue';
  import GroupIntroduce from '@/components/GroupIntroduce.vue';
  export default {
    name: 'HomeView',
    components: {
      PapeHeader,
      IndexLabe,
      GroupLabel,
      GroupIntroduce
    },
    data(){
      return {
        teamContent:`  新思路团队（NewThread Team）是在2009年成立的，成立之初是由三个技术小白学长在帖老师的指导下，经过对前端自学的一点点摸索，就此，自我学习、自我摸索也成为了新思路团队的一个核心理念。

  新思路团队的征途是星辰大海，在努力实现每一位新思路人的梦想的同时，更希望新一代的你们在此挥洒你们的激情、活力，运用你们的智慧、毅力、创造力，为你们自己、为你们的学弟学妹们、为新思路团队创造更多的奇迹！ 让每一位成员都以新思路团队为荣，让每一位学生都以新思路团队为向往，最终让新思路团队的名称响彻神州IT大地！（这段重写x）`,
        allGroup:["cpp","geek","iosclub","android","db","mstech","javaee","ag","feweb","qihua","sheji","xuanchuan"],
        testWord:`   UI设计是指对软件的人机交互、操作逻辑、界面美观的整体设计。一份优秀的UI设计作品，不仅要有良好的视觉体验，也要符合用户的操作逻辑，给予用户良好的体验。
   新思路设计组主要通过阅读设计相关书籍文章，学习Adobe系列基础软件，以提高大家的审美基础和创造力，了解掌握Web、IOS、Android等的界面设计规范，设计优秀的界面。我们是前端的开始，是后台的包装，我们用鼠标撬开脑洞拓展思维，为产品汪、运营喵和程序猿打造一场“视觉盛宴”
   想要将自己的创意变成现实吗？新思路设计组等你～`
      }
    }
  }
  </script>
  <style scoped lang="less">
  .yang{

    text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;padding-left:20px;padding-right:15px;width:60px;font-weight:bold;

  }
  .index{
    .header{
      position: absolute;
      top: 0;
      left: 0;
    }
    main{
      max-width: 1583px;/* ?????这个版心宽度是在逗我吗 */
      margin: 0 auto;
      padding: 43px 0;
      section{
        margin: 120px 0;
      }
      .label{
        width: 315px;
        height: 101px;
        line-height: 87px;
        margin-top: 43px;
        margin-bottom: 36px;
      }
      article{
        font-size: 34px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #212121;
      }
      .team-content{
        box-sizing: border-box;
        width: 100%;
        padding: 88px 96px 96px 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .team-logo{
          width: 419px;
        }
        article{
          width: 777px;
        }
      }
      .group-content{
        padding: 0 96px 0 101px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .group-left{
          display: grid;
          grid-template-columns: repeat(2,150px);
          gap: 60px 40px;
          .grouplabel{
            width: 150px;
          }
        }
        .group-right{
          padding: 186px 0 176px 0;
        }
      }
      .team-substation{
        max-width: 1335px;
        height: 1003px;
        background: #FFFFFF;
        box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
        margin: 0 auto;
        margin-top: 50px; //test
      }
    }
  }
  </style>
  