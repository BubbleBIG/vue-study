<template>
    <div class="user-routers">
        <div class="signUpCard">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="">Login</span>
          </div>
            <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1">
            <el-form-item prop="name">
                <el-input v-model="ruleForm1.name"
                auto-complete="off" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm1.pass"
                auto-complete="off" placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item>
                <!--<el-button type="primary" @click="loginForm('ruleForm1')"
                v-loading.fullscreen.lock="fullscreenLoading"
                element-loading-text="登陆中..."
                >Sign Up</el-button>-->
                <el-button type="primary" @click="loginForm('ruleForm1')">Log in</el-button>
                <el-button @click="resetForm('ruleForm1')">Reset</el-button>
            </el-form-item>
            <el-form-item style="text-align:center">
                <span class="demonstration">Need an account?
                  <router-link to="/reg" style="display:inline;padding: 0px 10px;
                  font-weight:bold">Sign up</router-link></span>
            </el-form-item>
            </el-form>
        </el-card>
        </div>
    </div>
</template>

<script>
  export default {
    mounted: function () {
            document.title = this.$route.path   // 改变网页title
            // let strCookie = document.cookie;
            // let arrCookie = strCookie.split("=")
            // console.log(arrCookie[1])
        },
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        value = value.match(/^[a-zA-Z0-9_]{3,16}$/)
        setTimeout(() => {
            if (!value) {
                callback(new Error('请输入3-16个数字或英文字母'));
            } else {
                callback();
            }
        }, 100);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 1) {
            callback(new Error('请输入至少2个字符'));
          }
          callback();
        }
      }
      return {
        http: 'http://localhost',
        url: this.$route.path,
        ruleForm1: {
          pass: '',
          name: ''
        },
        rules1: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    created: function () {
        this.getId()
    },
    methods: {
        getId () {
        },
        loginForm (formName) {
          this.$refs[formName].validate((valid) => {
          let self = this
          // let value = self.ruleForm1.name.match(/^[a-zA-Z0-9_]{3,16}$/)
          if (!valid) {
            self.$message.error('无效用户名')
          } else {
          let formData = new FormData();
          formData.append("name", self.ruleForm1.name);
          formData.append("pwd", self.ruleForm1.pass);
        // console.log(this.$route.path)
          // let self = this
          // let formData = new FormData();
          // formData.append("name", formName.name);
          // formData.append("pwd", formName.pass);
          // fetch(':3000/login', {
          //   method: 'GET',
          //   headers: { 'Content-Type': 'application/json' },
          //   credentials: 'same-origin'
          // })
          // .then(res => res.json())
          // .then(function (id) {
          //   console.log(id)
          //   if (id) {
          //     alert('submit!');
          //   } else {
          //     console.log('error login!!');
          //     return false;
          //   }
          // })
          fetch(self.http + '/camU/index/login/login', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: formData
          })
          .then(res => res.json())
          .then(function (res) {
            // console.log(res)
            if (res.status === 1) {
              // console.log(self.$route.path)
              document.cookie = "id = " + res.id
              document.cookie = 'name = ' + res.name
              // self.fullscreenLoading = true;
              self.$message.success('登陆成功，正在跳转...')
              setTimeout(() => {
                // self.fullscreenLoading = false
                self.$router.push('/')
              }, 3000);
              // setTimeout(() => {
              //   self.$router.push('/')
              // }, 800)
              // console.log(self.$route)
              // alert('submit!');
            } else {
              // console.log('error login!!');
              self.$message.error('login error!')
              // return false;
            }
          })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
        console.log(formName)
      },
      tabForm(tab) {
        console.log(tab)
      }
    }
  }
</script>

<style lang='scss' scoped>
    .loginCard, .signUpCard {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8%;
    }
    .box-card {
        width: 320px;
        padding: 40px;
        button {
          width: 47%;
        }
    }
    .clearfix {
        text-align: center;
        font-size: 30px;
        span {
          font-weight: bold;
        }
        
    }
  .clearfix:after {
      clear: both
  }
    .likes {
		position: relative;
        h1 {
            font-size: 50px
        }
    }
</style>