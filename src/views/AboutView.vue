<template>
    <div class="about">
        <h1>This is an about page</h1>
        <el-input v-model="input" placeholder="Please input"/>
        <el-button type="primary" @click="inputAdd">Primary</el-button>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import { getH5Person } from '@/api/test';

let input = ref(0);

let getPerson =async ()=>{
    let result = await getH5Person({
        srcLng:'107.40',
        srcLat:'34.45',
        type:1
    });
    console.log(result);
}

function inputAdd() {
    input.value++;
    getPerson();
}

</script>
