<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <transition-group>
            <el-breadcrumb-item
                v-for="item in levelList"
                :key="item.path"
                :to="{path:item.path}">
                {{item.meta.title}}
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
import {ref, watch} from 'vue';

let route = useRoute();

let levelList = ref([
    {
        path:'/home',
        meta:{
            title: '首页'
        }
    }
]);

watch(() => route,(to)=>{
    if(!levelList.value.some(item=>item.path===to.path)){
        levelList.value.push(JSON.parse(JSON.stringify(to)));
    }
},{
    deep: true
})
</script>

<style scoped>

</style>
