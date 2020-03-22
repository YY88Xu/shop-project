export default {
    state: {
        goods: []
    },
    mutations: {
        setGoods(state, goods){
            state.goods = goods.concat();
        }
    },
    getters: {
        sumPrice: state => {
            let sum = 0;
            state.goods.forEach(item=>{
                sum += Number(item.count)*Number(item.price);
            })
            return sum;
        },
        sumTotal: state => {
            let count = 0;
            state.goods.forEach(item=>{
                count += item.count;
            })
            return count;
        }
    },
    actions: {
        getGoods({commit}){
            let goods = sessionStorage.getItem('goods') || localStorage.getItem('goods');
            if(goods){
                commit('setGoods', JSON.parse(goods))
            }
        },
        setGoods({commit}, goods) {
            sessionStorage.setItem('goods', JSON.stringify(goods));
            localStorage.setItem('goods', JSON.stringify(goods));
            if(goods){
                commit('setGoods', goods)
            }
        }
    }
}