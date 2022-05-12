<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="assignPersonName" label="Date" width="180" />
        <el-table-column prop="channelId" label="Name" width="180" />
        <el-table-column prop="createUserName" label="Address" />
    </el-table>
    <el-pagination @current-change="haddleClick" background layout="prev, pager, next" :total="1000" />
</template>

<script setup>
import {onMounted, ref} from 'vue';
import { getCaseList } from "@/api/case/case";

let datas = ref({
    pageNum:1,
    pageSize:10
})
let tableData = ref( [] );
let total = ref([])

onMounted(
    ()=>{
        getList()
    }
)
let getList = () =>{
    getCaseList(datas.value).then(res=>{
        console.log(res)
        tableData.value = res.rows;
        total.value = res.total;
    })
}
let haddleClick = (num)=>{
    datas.value.pageNum = num;

    getList();

}

</script>

<style scoped>

</style>
