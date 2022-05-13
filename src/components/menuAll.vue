<template>
    <el-row :gutter="10">
        <el-col :span="3">
            <el-menu
                :default-active="cPath"
            >
                <el-menu-item
                    v-for="item in routes"
                    :key="item.name"
                    :index="item.path"
                    @click="getRoute(item)">
                    {{ item.meta.title }}
                </el-menu-item>
            </el-menu>

        </el-col>
        <el-col :span="21">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>{{ store.getters.name }}</span>
                        <div style="height: 50px;">
                            <el-dropdown trigger="click">
                                <img style="width: 50px;" :src="store.getters.avatar" alt="">
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>
                                            <el-button
                                                color="#626aef"
                                                plain
                                                @click="logout">
                                                登出
                                            </el-button>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </div>
                </template>
                <Breadcrumb></Breadcrumb>
            </el-card>
            <router-view/>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref, computed} from 'vue';
import { useStore } from "vuex";
import Breadcrumb from './Breadcrumb'
let router = useRouter();
let route = useRoute();
let store = useStore();

let routes = ref([]);

onMounted(()=>{
    routes.value = router.getRoutes();
})

const cPath = computed(() => {
    return route.path
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
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
