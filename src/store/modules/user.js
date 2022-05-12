import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user ={
    state:{
        token:getToken(),
        name: '',
        nickName: '',
        avatar: '',
        roles: [],
        permissions: []
    },
    mutations:{
        SET_TOKEN: (state,token)=>{
            state.token = token;
        },
        SET_NAME: (state,name)=>{
            state.name = name;
        },
        SET_NICKNAME: (state,nickname)=>{
            state.name = nickname;
        },
        SET_AVATAR: (state,avatar)=>{
            state.name = avatar;
        },
        SET_ROLES: (state,roles)=>{
            state.name = roles;
        },
        SET_PERMISSIONS: (state,permissions)=>{
            state.name = permissions;
        },
    },
    actions:{
        Login({commit},userinfo){
            let username = userinfo.username.trim();
            let password = userinfo.password;
            let code = userinfo.code;
            let uuid = userinfo.uuid;

            return new Promise((resolve, reject)=>{
                login(username,password,code,uuid).then(res=>{
                    setToken(res.token);
                    commit('SET_TOKEN',res.token);
                    resolve()
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        LogOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_NAME', '')
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetInfo({ commit }){
            return new Promise((resolve, reject)=>{
                getInfo().then(res=>{
                    console.log(res);
                    let user = res.user;
                    let avatar = res.avatar;
                    commit('SET_NAME',user.userName);
                    commit('SET_NICKNAME',user.nickName);
                    commit('SET_AVATAR',process.env.VUE_APP_BASE_API+avatar);
                    resolve();
                }).catch(error=>{
                    reject(error);
                })
            })
        }
    }
}

export default user
