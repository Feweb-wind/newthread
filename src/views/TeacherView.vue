<template>
    <div class="teacher">
        <TeacherItem v-for="item in teacherList" 
        :key="item.id" 
        :teacherName = "item.teacherName"
        :describe="item.describe"
        :group="item.group"></TeacherItem>
    </div>  
</template>
<script setup>
import TeacherItem from '@/components/TeacherItem.vue'
let teacherList = [
    {
        id:1,
        teacherName:'贴军老师',
        describe:'新思路实验室整体-顾问',
        group:'Geek组'
    },
    {
        id:2,
        teacherName:'贴军老师',
        describe:'新思路实验室整体-顾问',
        group:'Geek组'
    },
    {
        id:3,
        teacherName:'贴军老师',
        describe:'新思路实验室整体-顾问',
        group:'Geek组'
    },
    {
        id:4,
        teacherName:'贴军老师',
        describe:'新思路实验室整体-顾问',
        group:'Geek组'
    },
    {
        id:5,
        teacherName:'贴军老师',
        describe:'新思路实验室整体-顾问',
        group:'Geek组'
    },
    {
        id:6,
        teacherName:'贴军老师',
        describe:'新思路实验室整体-顾问',
        group:'Geek组'
    },
    {
        id:7,
        teacherName:'贴军老师',
        describe:'新思路实验室整体-顾问',
        group:'Geek组'
    },
    {
        id:8,
        teacherName:'贴军老师',
        describe:'新思路实验室整体-顾问',
        group:'Geek组'
    }
]
</script>
<style scoped lang="less">
    .teacher{
        display: grid;
        grid-template-rows: repeat(4,1fr);
        grid-template-columns: repeat(2,1fr);
        gap: 33px 84px;
        width: 100%;
        height: 1756px;
    }
</style>