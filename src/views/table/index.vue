<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
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
                <el-input v-model="handDetails.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-input v-model="handDetails.address" />
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="handDetails.date" />
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<script setup>
import {reactive, ref} from 'vue';

let drawer = ref(false);
let tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Jerry',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Job',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Bob',
        address: 'No. 189, Grove St, Los Angeles',
    },
]);
let handDetails = reactive({
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
})

function handClick(row){
    drawer.value = true;
    handDetails = row;
}
</script>

<style scoped>

</style>
