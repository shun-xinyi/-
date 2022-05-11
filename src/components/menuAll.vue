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
        </el-col>
        <el-col :span="20">
            <router-view/>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import {onMounted, ref} from 'vue';

let router = useRouter();
let route = useRoute();

let routes = ref([]);
let cPath = ref('');

onMounted(()=>{
    routes.value = router.getRoutes();
    cPath.value = route.path;
})

function getRoute(item){
    router.push(item);
}
</script>

<style scoped>

</style>
