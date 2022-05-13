import router from './router'
import store from './store'
import { ElMessage } from 'element-plus'

import { getToken } from '@/utils/auth'

const whiteList = ['/login'];

router.beforeEach((to,from,next)=>{
    if(getToken()){
        if (to.path === '/login'){
            next('/home');
        } else if(to.path==='/'){
            next('/home');
        } else{
            if(store.getters.roles.length===0){
                store.dispatch('GetInfo').then(()=>{
                    store.dispatch('GenerateRoutes').then(accessRoutes=>{
                        console.log(accessRoutes);
                        next();
                    })
                }).catch(error=>{
                    store.dispatch('LogOut').then(()=>{
                        ElMessage.error(error);
                        next('/login');
                    })
                })
            }else{
                next();
            }
        }
    }else{
        if(whiteList.indexOf(to.path)!==-1){
            next();
        }else{
            next('/login');
        }
    }
})
