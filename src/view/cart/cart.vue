<template>
    <div class="container"><p class="title">购物车</p>
        <div class="cart-wrap">
            <div class="item-cart" v-for="item in goods">
                <div class="item-top">
                    <div class="inner start"><el-checkbox class="checkClass"/></div>
                    <div class="middle inner"><img src="../../assets/images/phone.png"></div>
                    <div class="end">
                        <p class="title">荣耀V30 双模5G 麒麟990 突破性相机矩阵</p>
                        <p>{{item.name}}</p>
                        <div class="item-bottom">
                            <div class="price">¥{{item.price}}</div>
                            <div class="addAnd">
                                <i class="el-icon-remove-outline" @click="reduce(item)"></i>
                                {{item.count}}
                                <i class="el-icon-circle-plus-outline" @click="add(item)"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="footer">
            总计：<span>¥{{sum}}</span>
        </p>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "cart",
        computed:{
            goods(){
                return this.$store.state.goods.goods;
            },
            sum(){
                return this.$store.getters.sumPrice;
            }
        },
        data(){
            return {
                count: 0
            }
        },
        methods: {
            ...mapActions([
                "setGoods"
            ]),
            reduce(item){
                let goods = this.goods;
                for(let gd of goods){
                    if(item.id==gd.id){
                        if(gd.count>0){
                            gd.count--;
                        }
                        break;
                    }
                }

            }
        }
    }
</script>

<style scoped lang="less">
    .footer{
        text-align: center;
        font-size: 20px;
        span{
            color: #ca141d;
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
    .cart-wrap{
        background: #F9F9F9;
        height: 510px;
        overflow: auto;
        padding-right: 300px;
        padding-left: 300px;
        padding-top: 20px;
        .item-cart{
            height: 210px;
            background: white;
            border-radius: 5px;
            box-sizing: border-box;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 20px;
            align-content: space-between;
            margin-bottom: 20px;
            .item-top{
                height: 170px;
                display: flex;
                .inner{
                    height: 170px;
                    line-height: 170px;
                    text-align: center;
                    box-sizing: border-box;
                    margin-left: 10px;
                }
                .end{
                    flex: 1 1 auto;
                    margin-left: 20px;
                    .title{
                        font-size: 23px;
                        text-align: left;
                    }
                    .item-bottom{
                        display: flex;
                        justify-content: space-between;
                        .price{
                            font-size: 30px;
                            color: #ca141d;
                        }
                        .addAnd{
                            font-size: 30px;
                        }
                    }
                }
                .start{
                    width: 52px;
                    font-size: 30px;
                    .checkClass{
                        zoom:200%;
                    }
                }
                .middle{
                    height: 170px;
                    img{
                        height: 170px;
                    }
                }
            }
        }
    }
</style>