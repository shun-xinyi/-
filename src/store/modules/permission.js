import { getRouters } from '@/api/menu'

const permission = {
    state: {
        routes: [],
        addRoutes: [],
        defaultRoutes: [],
        topbarRouters: [],
        sidebarRouters: []
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.routes = routes;
        }
    },
    actions: {
        GenerateRoutes({commit}) {
            return new Promise(resolve => {
                // 向后端请求路由数据
                getRouters().then(res => {
                    let rewriteRoutes = res.data;
                    commit('SET_ROUTES',rewriteRoutes);
                    resolve(rewriteRoutes);
                })
            })
        }
    }
}

// function formatRoutes(routes){
//     return  routes.map(item=>{
//         if(item.children&&item.children.length>0){
//             item.children = formatRoutes(item.children)
//         }else{
//             item.component = loadView(item.component);
//         }
//     })
// }


export default permission
