<template>
    <header>
        <NewThreadLogoVue class="header-logo"/>
        <nav>
            <ul class="nav-ul">
                <li class="nav-ul-li" v-for="(item) in headerNav" :key="item.id" @click="toOtherPage(item.name)">{{ item.name }}
                    <ul v-if="(item.children && item.children.length !== 0)" class="li-child">
                        <li v-for="child in item.children" :key="child.id">{{ child.name }}</li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup>
import { defineProps,ref } from 'vue';
import { useRouter } from 'vue-router';
import NewThreadLogoVue from './NewThreadLogo.vue';
import { getMenuList } from '@/plugins/api';
defineProps({
    msg:String
})

let headerNav = ref([
    {
        name:'首页',
        id:1001
    },
    {
        name:'团队介绍',
        id:1002
    },
    {
        name:'荣誉成果',
        id:1003
    },
    {
        name:'团队动态',
        id:1004
    },
    {
        name:'联系我们',
        id:1005
    }
])
let menulist = getMenuList()
menulist.then((data)=>{
    let serverMenuData = data.data.data
    console.log(serverMenuData)
    headerNav.value = serverMenuData
})
console.log(getMenuList())

let dic = {
    '首页':'home',
    '团队介绍':'about',
    '荣誉成果':'honor',
    '团队动态':'dynamics',
    '联系我们':''
}
const router = useRouter()
const toOtherPage = (item)=>{
    let name = dic[item]
    router.push({name})
}
console.log('headernav',headerNav)
</script>
<style scoped lang="less">
@header-height:146px;
    header{
        box-sizing: border-box;
        width: 100%;
        height: @header-height;
        background: #240757;
        border-radius: 0px 0px 0px 0px;
        opacity: 0.71;
        // padding: 34px 30px 34px 55px;
        padding: 0 0 0 55px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        .header-logo{
            height: 100%;
        }
        nav{
            height: 100%;
            .nav-ul{
                height: 100%;
                display: flex;
                .nav-ul-li{
                    position: relative;
                    display: flex;
                    align-items: center;
                    font-size: 30px;
                    font-family: PingFang SC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #FFFFFF;
                    padding: 0 28px;
                    cursor: pointer;
                    &:hover{
                        background: #8775a8;
                    }
                    &:hover > .li-child{
                        opacity: 1;
                    }
                    .li-child{
                        width: 100%;
                        position: absolute;
                        top: @header-height;
                        left: 0;
                        display: flex;
                        flex-direction: column;
                        opacity: 0;
                        z-index: 0;
                        transition: .6s all;
                        li{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding: 0 8px;
                            font-size: 28px;
                            font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
                            font-weight: 400;
                            color: #3A3B39;
                            background-color: #ffffff;
                            height: 50px;
                            &:hover{
                                background-color: #b8d4ec;
                            }
                        }
                    }
                }
            }
        }
    }
</style>