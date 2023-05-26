<template>
    <div class="organization">
        <PapeHeader/>
        <div class="main">
            <main>
                <div class="main-title">
                    <div class="switch-content">
                        <span :class="which?'active teacher':'teacher'" @click="switchContent(true)">老师</span>
                        <span class="divide">/</span>
                        <span  :class="!which?'active stu':'stu'" @click="switchContent(false)">学生</span>
                    </div>
                    <div class="title-left">
                        <span>组织架构</span>
                    </div>
                </div>
                <div class="main-content">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>
<script setup>
  import PapeHeader from '@/components/PapeHeader.vue';
  import {useRouter} from 'vue-router'
  import {ref,watch} from 'vue'
  const router = useRouter()

  let which = ref(true) //展示老师还是学生，默认老师
  router.push({
    name:which.value?'teacher':'student'
  })
  watch(which,(newV)=>{
    router.push({
    name:newV?'teacher':'student'
    })
  })
  const switchContent = (trueOrFalse)=>{
    which.value = Boolean(trueOrFalse)
  }
</script>
<style scoped lang="less">
.organization{
    main{
        width: 1440px;
        margin: 0 auto;
        padding: 90px 0;
        .main-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .switch-content{
                font-size: 50px;
                font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
                font-weight: 400;
                color: #2E2E2E;
                .divide{
                    color: #DFFCDF;
                    margin: 0 12px;
                }
                .teacher,
                .stu{
                    cursor: pointer;
                }
                .active{
                    color: #DFFCDF;
                }
            }
            .title-left{
                font-size: 52px;
                font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
                font-weight: 400;
                color: #474067;
            }
        }
    }
}
</style>