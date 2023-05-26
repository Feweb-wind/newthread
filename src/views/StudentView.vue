<template>
    <div class="student-view">
        <div class="student-content">
            <student-item 
            v-for="item in studentList" 
            :key="item.id" 
            :name="item.name"
            :job="item.job"></student-item>
        </div>
        <div class="select-year"></div>
    </div>
</template>
<script setup>
import StudentItem from "@/components/StudentItem.vue"
let studentList = [
    {
        id:1,
        name:'蒙海鑫',
        job:'负责人'
    },
    {
        id:2,
        name:'蒙海鑫',
        job:'负责人'
    },
    {
        id:3,
        name:'蒙海鑫',
        job:'负责人'
    },
    {
        id:4,
        name:'蒙海鑫',
        job:'负责人'
    },
    {
        id:5,
        name:'蒙海鑫',
        job:'负责人'
    },
    {
        id:6,
        name:'蒙海鑫',
        job:'负责人'
    },
    {
        id:7,
        name:'蒙海鑫',
        job:'负责人'
    },
    {
        id:8,
        name:'蒙海鑫',
        job:'负责人'
    },
    {
        id:9,
        name:'蒙海鑫',
        job:'负责人'
    }
]

</script>
<style scoped lang="less">
    .student-view{
        width: 1492px;
        display: flex;
        .student-content{
            width: 1298px;
            height: 1261px;
            display: grid;
            grid-template-rows: repeat(3,1fr);
            grid-template-columns: repeat(3,1fr);
            gap: 23px 46px;
        }
        .select-year{
            flex: 1;
        }
    }
</style>