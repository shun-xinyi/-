<template>
    <el-row>
        <el-col :span="4">
            <el-menu
                :default-active="cPath"
            >
                <el-menu-item
                    v-for="item in routes"
                    :key="item.name"
                    :index="item.path"
                    @click="getRoute(item)">
                    {{ item.name }}
                </el-menu-item>
            </el-menu>
            <el-button
                color="#626aef"
                plain
                @click="logout">
                登出
            </el-button>
        </el-col>
        <el-col :span="20">
            <router-view/>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref} from 'vue';
import { useStore } from "vuex";

let router = useRouter();
let route = useRoute();
let store = useStore();

let routes = ref([]);
let cPath = ref('');

onMounted(()=>{
    routes.value = router.getRoutes();
    cPath.value = route.path;
})

let getRoute = (item)=>{
    router.push(item);
}

let logout = ()=>{
    store.dispatch('LogOut').then(()=>{
        router.push('/login');
    }).catch(error=>{
        console.log(error);
    })
}
</script>

<style scoped>

</style>
