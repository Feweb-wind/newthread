<template>
    <div class="achevements">
        <PapeHeader/>
        <main>
            <div class="main-container">
                <NewLabel>科研成果</NewLabel>
                <div class="scientific-content">
                    <div><img src="../assets/img/testdata/science1.png"></div>
                    <div><img src="../assets/img/testdata/science1.png"></div>
                    <div><img src="../assets/img/testdata/science2.png"></div>
                    <div><img src="../assets/img/testdata/science3.png"></div>
                </div>
                <div class="bottom-container">
                    <div class="awards">
                        <NewLabel>获奖情况</NewLabel>
                        <div class="awards-item" v-for="item in awardsArr" :key="item">{{ item }}</div>
                        <div class="line"></div>
                    </div>
                    <div class="outstanding-stu">
                        <NewLabel style="margin-bottom: 30px;">优秀学生</NewLabel>
                        <div class="stu-content">
                            <div class="stu-item" v-for="item in outStuArr" :key="item">
                                <img :src="item.image">
                                <div class="stu-name">
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import PapeHeader from '@/components/PapeHeader.vue';
import NewLabel from '@/components/NewLabel.vue';

let awardsArr = ref(['「大学生创新创业训练计划」','「大学生创新创业训练计划」','「大学生创新创业训练计划」','「大学生创新创业训练计划」','「大学生创新创业训练计划」'])
let outStuArr = ref([
    {
        name:'廖建行',
        image:require('../assets/img/testdata/stu1.png')
    },
    {
        name:'陆嘉月',
        image:require('../assets/img/testdata/stu2.png')
    },
    {
        name:'廖建行',
        image:require('../assets/img/testdata/stu3.png')
    },
    {
        name:'陆嘉月',
        image:require('../assets/img/testdata/stu3.png')
    }
])
</script>
<style scoped lang="less">
.achevements{
    main{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        //优化，使用样式穿透，统一background-color
        background: linear-gradient(126deg, #61B484 0%, #61B484 17%, #7EC884 31%, #A6D699 39%, #D6EEBD 53%, #FFFFFF 100%);
        padding-top: 160px;
        .main-container{
            width: 1453px;
            .scientific-content{
                display: grid;
                grid-template-rows: repeat(2,1fr);
                grid-template-columns: repeat(2,1fr);
                gap: 46px 33px;
                width: 100%;
                height: 846px;
                margin-bottom: 145px;
                div{
                    // width: 710px;
                    // height: 400px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .bottom-container{
                width: 100%;
                display: flex;
                margin-bottom: 208px;
                .awards{
                    width: 463px;
                    margin-right: 50px;
                    .awards-item{
                        width: 100%;
                        height: 174px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #FFFFFF;
                        opacity: .6;
                        margin-bottom: 42px;
                        font-size: 26px;
                        font-family: PingFang SC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #141414;
                    }
                    .line{
                        height: 5px;
                        border-radius: 40px;
                        background-color: rgba(43, 43, 43, 1);
                    }
                }
                .outstanding-stu{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    .stu-content{
                        flex: 1;
                        width: 100%;
                        display: grid;
                        grid-template-rows: repeat(2,1fr);
                        grid-template-columns: repeat(2,1fr);
                        gap: 44px 87px;
                        .stu-item{
                            display: flex;
                            flex-direction: column;
                            .stu-name{
                                box-sizing: border-box;
                                height: 72px;
                                line-height: 72px;
                                padding: 0 27px;
                                background-color: #ffffff;
                                font-size: 28px;
                                text-align: left;
                                font-family: PingFang SC-Regular, PingFang SC;
                                font-weight: 400;
                            }
                            img{
                                width: 100%;
                                flex: 1;
                            }
                        }
                    }
                }
            }
        }   
    }
}
</style>