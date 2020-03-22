<template>
    <div class="login-div">
       <div class="login-wrap">
           <div class="login-title">欢迎登录</div>
           <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="login-flex">
               <el-form-item label="" prop="name" class="login-item m-top">
                   <el-input v-model="ruleForm.name" size="small" placeholder="用户名" prefix-icon="el-icon-user-solid"></el-input>
               </el-form-item>
               <el-form-item label="" prop="pwd" class="login-item">
                   <el-input v-model="ruleForm.pwd" size="small" type="password" placeholder="密码" prefix-icon="el-icon-lock"></el-input>
               </el-form-item>
               <div class="login-item">
                   <el-button type="primary" size="small" class="btn-login" @click="submitForm('ruleForm')">登录</el-button>
               </div>
               <div class="label">
                   输入任意用户名和密码即可
               </div>
           </el-form>
       </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {
                    name: '',
                    pwd: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            ...mapActions([
                'handleLogin'
            ]),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.handleLogin(this.ruleForm.name).then(()=>{
                            this.$message.success("登录成功");
                            this.$router.push({
                                name: 'shop'
                            })
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
.login-div{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/bk.jpg");
    background-size: cover;
    position: relative;

    .login-wrap{
        width: 300px;
        height: 260px;
        background: white;
        border-radius: 5px;
        position: absolute;
        right: 200px;
        top: 200px;
        .login-title{
            border-bottom: 1px solid #e8eaec;
            padding: 14px 16px;
            color: #515a6e;
            font-size: 14px;
            font-weight:bold;
        }
        .login-flex{
            display: flex;
            flex-direction: column;
            .login-item{
                padding-left:20px;
                padding-right: 20px;
                height: 53px;
                line-height: 53px;
                box-sizing: border-box;
                .btn-login{
                    width: 260px;
                }
            }
            .el-form-item{
                margin-bottom: auto !important;
            }
            .m-top{
                margin-top: 18px;
            }
            .label{
                font-size: 10px;
                text-align: center;
                display: table-cell;
                height: 33px;
                line-height: 33px;
                color: #c3c3c3
            }
        }

    }
}
</style>