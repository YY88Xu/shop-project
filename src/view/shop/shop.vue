<template>
    <div class="container">
        <p class="title">{{name}}, 您好！欢迎光临~</p>
        <div class="shop-wrap">
            <div class="shop-column">
                <div class="column-item" v-for="item in goodsList">
                    <div class="img-wrap"><img src="../../assets/images/phone.png" ></div>
                    <p class="name-p">{{item.name}}</p>
                    <p class="price-p">¥{{item.price}}</p>
                    <a @click="addToCart(item)"><i class="el-icon-shopping-cart-2 icon-addToCart"></i></a>
                </div>
            </div>
        </div>
        <div class="footer">
            <div>
                总计：<span>¥{{sum}}</span>
                <a @click="goToCart">
                    <i class="el-icon-shopping-cart-2"></i>
                    <span class="wrap-num" v-if="sumTotal">
                        <el-badge :value="sumTotal" class="item">
                        </el-badge>
                    </span>
                </a>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "shop",
        //写法一
        computed: {
            name () {
               return this.$store.state.user.name;
            },
            goods(){
                return this.$store.state.goods.goods;
            },
            sum(){
                return this.$store.getters.sumPrice;
            },
            sumTotal(){
                return this.$store.getters.sumTotal;
            }
        },
        //写法二  https://blog.csdn.net/qq_22221731/article/details/85235671
        // computed: mapState({
        //     name: state => state.user.name,
        //     goods: state => state.goods.goods
        // }),
        mounted(){
        },
        data(){
            return {
                goodsList: [
                    {
                        name: 'Mate 30 Pro 5G',
                        price: '5899',
                        id: 'a1'
                    },
                    {
                        name: '荣耀V30',
                        price: '3699',
                        id: 'a2'
                    },
                    {
                        name: '荣耀 9X',
                        price: '1099',
                        id: 'a3'
                    },
                    {
                        name: '荣耀20青春版',
                        price: '3899',
                        id: 'a4'
                    },
                    {
                        name: '荣耀20青春版',
                        price: '3899',
                        id: 'a5'
                    },
                    {
                        name: '荣耀20青春版',
                        price: '3899',
                        id: 'a6'
                    },
                    {
                        name: '荣耀20青春版',
                        price: '3899',
                        id: 'a7'
                    },
                    {
                        name: '荣耀20青春版',
                        price: '3899',
                        id: 'a8'
                    }
                ]
            }
        },
        methods: {
            ...mapActions([
                "setGoods"
            ]),
            addToCart(item){
                if(this.goods.length>0){
                    let goods = this.goods;
                    let flag = true;
                    for(let gd of goods){
                        if(gd.id==item.id){
                            gd.count++;
                            flag = false;
                            break;
                        }
                    }
                    if(flag){
                        item.count = 1;
                        goods.push(item);
                    }
                    this.setGoods(goods);
                } else {
                    let goods = [];
                    item.count = 1;
                    goods.push(item);
                    this.setGoods(goods);
                }

            },
            goToCart(){
                this.$router.push({
                    name: 'cart'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .container{
        .footer{
            height: 60px;
            text-align: center;
            font-size: 20px;
            position: relative;
            div{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                span{
                    color: #ca141d;
                    font-weight: bold
                }
                a{
                    cursor: pointer;
                    color: #ca141d;;
                    display: inline-block;
                    margin-left: 40px;
                    font-size: 35px;
                    .wrap-num{
                        position: relative;
                        content: '';
                        .item {
                            top: 17px;
                            left: 0px;
                            color: #ca141d;
                        }
                    }

                }
            }
        }
    }
    .title{
        text-align: center;
        height: 20px;
        line-height: 20px;
        background: white;
        width: 100%;
        font-size: 20px;
    }
    .shop-wrap{
        background: #F9F9F9;
        padding-right: 150px;
        padding-left: 150px;
        width: 100%;
        box-sizing: border-box;
        height: 530px;
        overflow: auto;
        padding-bottom: 20px;
        //https://blog.csdn.net/lucky___star/article/details/87876830
        :after{
            content: '';
            width: 30%;
            border:1px solid transparent;
        }
        .shop-column{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .column-item{
                height: 395px;
                position: relative;
                width: 30%;
                background: white;
                border-radius: 10px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                display: table-cell;
                text-align: center;
                margin-top: 20px;
                padding-top: 30px;
                .icon-addToCart{
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    font-size: 35px;
                    overflow: hidden;
                    top: 10px;
                    right: 10px;
                    cursor: pointer;
                }
                .img-wrap{
                    height: 245px;
                    img{
                        height: 100%;
                    }
                }
                .name-p{
                    font-weight: 400;
                    font-size: 20px;
                }
                .price-p{
                    font-size: 20px;
                    color: #ca141d;
                    font-weight: bold
                }
            }
        }
    }
</style>