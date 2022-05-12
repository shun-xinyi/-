<template>
    <div class="login-window">
        <el-form
            label-position="left"
            label-width="100px"
            :model="formLabelAlign"
            style="max-width: 460px"
        >
            <el-form-item label="Name">
                <el-input v-model="formLabelAlign.username" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-input v-model="formLabelAlign.password" />
            </el-form-item>
            <el-form-item>
                <el-button
                    color="#626aef"
                    plain
                    @click="login">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script setup>
import {  reactive } from "vue"
import { useStore } from 'vuex'
import { useRouter } from "vue-router";

let store = useStore();
let router = useRouter();

let formLabelAlign = reactive({
    username: null,
    password: null
});

let login = ()=>{
    store.dispatch('Login',formLabelAlign).then(()=>{
        router.push('/home');
        console.log(store.state);
    }).catch(error=>{
        console.log(error);
    })
}


</script>

<style scoped>
.login-window{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>
