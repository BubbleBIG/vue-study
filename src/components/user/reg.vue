<template>
    <div class="user-routers">
        <div class="signUpCard">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="">Sign Up</span>
          </div>
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2">
            <el-form-item prop="name">
                <el-input v-model="ruleForm2.name"
                auto-complete="off" placeholder="Username"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm2.pass"
                auto-complete="off" placeholder="Password"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass"
              auto-complete="off" placeholder="Type again"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="signForm('ruleForm2')">
                    Sign Up</el-button>
                <el-button @click="resetForm('ruleForm2')">Reset</el-button>
            </el-form-item>
            <el-form-item style="text-align:center">
                <span class="demonstration">Already a member?
                  <router-link to="/log" style="display:inline;padding: 0px 10px;
                  font-weight:bold">Log in</router-link></span>
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
      var checkName1 = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        value = value.match(/^[a-zA-Z0-9_]{3,16}$/)
        setTimeout(() => {
            if (!value) {
                callback(new Error('输入3-16个字符'));
            } else {
                callback();
            }
        }, 200)
      }
      var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length < 6) {
            callback(new Error('请输入至少6个字符'));
          }
          callback();
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        http: 'http://localhost',
        url: this.$route.path,
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass1, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName1, trigger: 'blur' }
          ]
        }
      };
    },
    created: function () {
        this.getId()
    },
    methods: {
        getId () {
            // let self = this
            // fetch('/camU/index/index/test3.html', {
            //     method: 'GET'
            // })
            // .then(res => res.json())
            // .then(function (id) {
            //     console.log(id)
            // })
        },
        signForm(formName) {
        // console.log(this.$route.path)
        this.$refs[formName].validate((valid) => {
          // console.log(formName)
          let self = this
          // let value = self.ruleForm2.name.match(/^[a-zA-Z0-9_]{3,16}$/)
          if (!valid) {
            self.$message.error('无效用户名')
          } else {
          let formData = new FormData();
          formData.append("name", self.ruleForm2.name);
          formData.append("pwd", self.ruleForm2.pass);
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
          fetch(self.http + '/camU/index/login/sign', {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            body: formData
          })
          .then(res => res.json())
          .then(function (res) {
            console.log(res)
            if (res.status === 1) {
              // console.log(self.$route.path)
              self.$router.push('/log')
              console.log(self.$route)
              // alert('submit!');
            } else {
              console.log('signUp error!!');
              return false;
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

<style lang='scss' scope>
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