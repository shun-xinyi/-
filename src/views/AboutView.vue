<template>
    <div class="about">
        <h1>This is an about page</h1>
        <el-input v-model="input" placeholder="Please input"/>
        <el-button type="primary" @click="inputAdd">Primary</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            input: 0
        }
    },
    methods:{
        inputAdd(){
            this.input++
        }
    }
}

</script>
