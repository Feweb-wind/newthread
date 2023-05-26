<template>
    <div class="dynamics">
        <PapeHeader :mainLogo="false"/>
        <div class="main">
          <main>
            <section class="knowledge-sharing">
              <h4 class="part-title">
                知识分享
              </h4>
            </section>
          </main>
        </div>
    </div>
  </template>
  <style scoped lang="less">
    .dynamics{
        .header{
            position: absolute;
            top: 0;
            left: 0;
        }
        .main{
            height: 1500px;/*test */
            text-align: left;
            main{
                width: 1460px;
                margin: 0 auto;
                padding: 123px 0;
            }
        }
    }
  </style>
  <script>
  // @ is an alias to /src
  import PapeHeader from '@/components/PapeHeader.vue';
  export default {
  components: {
    PapeHeader,
  }
}
  </script>
  