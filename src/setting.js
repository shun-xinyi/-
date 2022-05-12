import router from './router'
import store from './store'
import { ElMessage } from 'element-plus'

import { getToken } from '@/utils/auth'

const whiteList = ['/login'];

router.beforeEach((to,from,next)=>{
    if(getToken()){
        if(to.path === '/login'){
            next('/home');
        }else{
            store.dispatch('GetInfo').then(()=>{
                next();
            }).catch(error=>{
                store.dispatch('LogOut').then(()=>{
                    ElMessage.error(error);
                    next('/home');
                })
            })
        }
    }else{
        if(whiteList.indexOf(to.path)!==-1){
            next();
        }else{
            next('/login');
        }
    }
})
