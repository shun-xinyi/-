<template>
    <div class="about">
        <h1>This is an about page</h1>
        <el-input v-model="input" placeholder="Please input"/>
        <el-input v-model="input2" placeholder="Please input"/>
        <el-input v-model="doubleCount" placeholder="Please input"/>
        <el-button type="primary" @click="inputAdd">Primary</el-button>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { getH5Person } from '@/api/test';

let input = ref(0);
let input2 = ref(10);


watch([input,input2],(newValue,oldValue)=>{
    console.log(newValue);
    console.log(oldValue);
})

const doubleCount = computed(() => {
    return input2.value * 2
})

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
    input2.value--;
}


</script>
