import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
Vue.use(Router);
const router = new Router({
    routes,
    mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'
//校验是否已经登录
router.beforeEach((to, from, next) => {
    store.dispatch('getGoods');
    if(to.name === LOGIN_PAGE_NAME){
        next();
    } else {
        if(store.state.user.hasGetInfo){
            next();
        }else{
            store.dispatch('getUserInfo').then(()=>{
                next();
            }).catch(()=>{
                next({
                    name: 'login'
                })
            })
        }
    }
})




export default router