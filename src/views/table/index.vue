<template>
    <el-form
        style="margin-top: 10px"
        :model="queryParams"
        size="small"
        :inline="true">
        <el-form-item label="车牌号">
            <el-input v-model="queryParams.plate" clearable  />
        </el-form-item>
        <el-form-item label="调度姓名">
            <el-input v-model="queryParams.taskUserName" clearable  />
        </el-form-item>
        <el-form-item label="调度电话">
            <el-input v-model="queryParams.taskUser" clearable  />
        </el-form-item>
        <el-form-item label="客户电话">
            <el-input v-model="queryParams.ownerPhone" clearable  />
        </el-form-item>
        <el-form-item label="客户姓名">
            <el-input v-model="queryParams.ownerName" clearable  />
        </el-form-item>
        <el-form-item label="救援类型">
            <el-select v-model="queryParams.type" clearable>
                <el-option
                    v-for="item in rescueTypeList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button
                :icon="Search"
                @click="search">
                搜索
            </el-button>
        </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="createTime" label="Date" width="180" />
        <el-table-column prop="ownerPhone" label="Name" width="180" />
        <el-table-column prop="assignPersonName" label="Address" />
        <el-table-column fixed="right" label="操作" width="120">
            <template #default="scope">
                <el-button
                    size="small"
                    type="success"
                    @click.prevent="handClick(scope.row)">
                    查看
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination
        v-model:currentPage="queryParams.pageNum"
        v-model:page-size="queryParams.pageSize"
        :page-sizes="[10, 20, 30, 40, 50]"
        :background="true"
        layout="sizes, prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />

    <el-drawer
        v-model="drawer"
        title="I am the title"
        direction="rtl"
        size="100%">
        <el-form
            label-position="left"
            label-width="100px"
            :model="handDetails"
            style="max-width: 460px"
        >
            <el-form-item label="Name">
                <el-input v-model="handDetails.data.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-input v-model="handDetails.data.address" />
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="handDetails.data.date" />
            </el-form-item>
            <el-form-item label="Activity form">
                <el-button @click="changeDetails">change</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script setup>
import { getCaseList, listRescueType } from "@/api/case/case";
import { onMounted, reactive, ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

let drawer = ref(false);

let tableData = ref([]);
let rescueTypeList = ref([]);
let handDetails = reactive({
    data:{}
})
let queryParams = reactive({
    pageNum: 1,
    pageSize: 10,
    plate: null,
    ownerPhone: null,
    ownerName: null,
    type: null,
    taskUserName: null,
    taskUser: null,
});

let total = ref(0);

onMounted(()=>{
    getList();
    listRescueType().then((response) => {
        rescueTypeList.value = response.rows
    })
})

let changeDetails = ()=>{
    handDetails.data.name = 'GALA';
}

let handClick = (row)=>{
    handDetails.data = row;
    drawer.value = true;
}

let getList = async ()=>{
    let result = await getCaseList(queryParams);
    tableData.value = result.rows;
    total.value = result.total;
}

let search = ()=>{
    queryParams.pageNum = 1;
    for (let key in queryParams) {
        if(queryParams[key]===null || queryParams[key]===''){
            delete queryParams[key]
        }
    }
    getList();
}

let handleSizeChange = size=>{
    queryParams.pageSize = size;
    getList();
}

let handleCurrentChange = num=>{
    queryParams.pageNum = num;
    getList();
}

</script>

<style scoped>

</style>
