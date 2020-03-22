export default {
    state: {
        name: '',
        //用来表示是否登录
        hasGetInfo: false
    },
    mutations: {
        setName (state, name){
            state.name = name;
        },
        setHasGetInfo (state, status) {
            state.hasGetInfo = status;
        }
    },
    getters: {},
    actions: {
        handleLogin: function ({commit}, name) {
            return new Promise((resolve) => {
                //采用sessionStorage存储vuex中的数据
                sessionStorage.setItem('name', name);
                commit('setName', name);
                commit('setHasGetInfo', true);
                resolve();
            });
        },
        getUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                let name = sessionStorage.getItem('name');
                if(name){
                    commit('setName', name);
                    commit('setHasGetInfo', true);
                    resolve();
                }else{
                    commit('setHasGetInfo', false);
                    reject();
                }
            })


        }
    }
}














