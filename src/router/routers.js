export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import('@/view/login/login.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        meta: {
            title: '商店'
        },
        component: () => import('@/view/shop/shop.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        meta: {
            title: '购物车'
        },
        component: () => import('@/view/cart/cart.vue')
    }
]